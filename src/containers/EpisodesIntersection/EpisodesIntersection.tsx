import React, { FunctionComponent } from 'react';
import { useQuery } from 'react-query';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { getCharacter } from 'rickmortyapi';
import { Grid } from '@material-ui/core';
import { filter, intersection, last, map, reduce } from 'fp-ts/Array';
import { Eq } from 'fp-ts/string';
import { flow } from 'fp-ts/function';
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
  const equalIntersection = intersection(Eq);
  const episodeIntersection = (acc: string[], x: Character) => equalIntersection(acc, x.episode);
  const characterSelected = filter(isSelected);
  const reduceEpisodes = reduce(characters[0]?.episode, episodeIntersection);
  const episodesUrls = flow(characterSelected, reduceEpisodes)(characters);
  console.log('episodesUrls', episodesUrls);
  // console.log('aaaa', last([1, 2, 5, 6]).fold());
  // const test = (x: string) => x.split('/').reverse()[0];
  const episodesNumbers = map(flow((x: string) => x.split('/'), last))(episodesUrls || []);
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
