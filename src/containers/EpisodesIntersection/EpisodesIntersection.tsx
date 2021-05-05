import React, { FunctionComponent } from 'react';
import { useQuery } from 'react-query';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { getCharacter } from 'rickmortyapi';
import { Grid } from '@material-ui/core';
import { filter, intersection } from 'fp-ts/Array';
import { Eq } from 'fp-ts/string';
import { Character, RickAndMortyApiResult } from '../../definitions/types';
import CharacterList from '../../components/CharacterList/CharacterList';

const EpisodesIntersection: FunctionComponent = () => {
  const { data: charactersResp } = useQuery<RickAndMortyApiResult<Character[]>, string>(
    'top-5-movies',
    () => getCharacter(),
  );
  const [checked, setChecked] = React.useState<number[]>([]);
  const characterFiltered = filter<Character>(x => checked.includes(x.id));
  const inter = intersection(Eq);
  const mergeEpisodes = characterFiltered(charactersResp?.results || []).reduce<string[]>(
    (acc, x) => {
      return inter(acc)(x.episode);
    },
    charactersResp?.results[0].episode || [],
  );
  console.log('aaaa', mergeEpisodes);

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
