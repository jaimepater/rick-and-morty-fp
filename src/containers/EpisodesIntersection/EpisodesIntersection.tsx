import React, { FunctionComponent } from 'react';
import { useQuery } from 'react-query';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { getCharacter } from 'rickmortyapi';
import { Grid } from '@material-ui/core';
import { compose, filter, intersection, last, map, reduce } from 'ramda';
import { Character, RickAndMortyApiResult } from '../../definitions/types';
import CharacterList from '../../components/CharacterList/CharacterList';

const EpisodesIntersection: FunctionComponent = () => {
  const { data: charactersResp } = useQuery<RickAndMortyApiResult<Character[]>, string>(
    'top-5-movies',
    () => getCharacter(),
  );
  const [checked, setChecked] = React.useState<number[]>([]);
  const isSelected = (x: Character) => checked.includes(x.id);
  const characters = charactersResp?.results || [];
  const episodeIntersection = (acc: string[], x: Character) => intersection(acc, x.episode);
  const characterSelected = filter(isSelected);
  const reduceEpisodes = reduce(episodeIntersection, characters[0]?.episode);
  const episodesUrls = compose<Character[], Character[], string[]>(
    reduceEpisodes,
    characterSelected,
  )(characters);
  console.log('episodesUrls', episodesUrls);
  const episodesNumbers = map(
    compose<string, string[], string[]>(last, (x: string) => x.split('/')),
  )(episodesUrls || []);
  // const episodesNumbers = map(test)(episodesUrls || []);
  console.log('episodesNumbers', episodesNumbers);

  const handleSelectCharacter = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item sm={6}>
          {charactersResp && (
            <CharacterList
              characters={charactersResp.results}
              onChange={handleSelectCharacter}
              checked={checked}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default EpisodesIntersection;
