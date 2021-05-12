import React, { FunctionComponent, useEffect } from 'react';
import { useQuery } from 'react-query';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { getCharacter, getEpisode } from 'rickmortyapi';
import { Grid } from '@material-ui/core';
import { compose, composeWith, filter, intersection, last, map, pick, reduce } from 'ramda';
import { Character, RickAndMortyApiResult } from '../../definitions/types';
import CharacterList from '../../components/CharacterList/CharacterList';

const EpisodesIntersection: FunctionComponent = () => {
  const { data: charactersResp } = useQuery<RickAndMortyApiResult<Character[]>, string>(
    'top-5-movies',
    () => getCharacter(),
  );

  /*  const log = (x: any) => {
    console.log('loggggg', x);
    return x;
  }; */

  const [checked, setChecked] = React.useState<number[]>([]);
  const [episodes, setEpisodes] = React.useState<Partial<Character>[] | undefined>([]);
  const isSelected = (x: Character) => checked.includes(x.id);
  const characters = charactersResp?.results || [];
  const episodeIntersection = (acc: string[], x: Character) => intersection(acc, x.episode);
  const characterSelected = filter(isSelected);
  const composeWithPromise = (...args: any) =>
    composeWith((f, val) => {
      if (val && val.then) {
        return val.then(f);
      }
      if (Array.isArray(val) && val.length && val[0] && val[0].then) {
        return Promise.all(val).then(f);
      }
      return f(val);
    })(args);
  // const episodesNumbers = map(test)(episodesUrls || []);
  // eslint-disable-next-line no-console

  useEffect(() => {
    console.log('checked', checked, checked.length > 0 ? characters[0]?.episode : []);
    const reduceEpisodes = reduce(
      episodeIntersection,
      checked.length > 0 ? characters[0]?.episode : [],
    );
    const episodesUrls = compose<Character[], Character[], string[]>(
      reduceEpisodes,
      characterSelected,
    )(characters);
    const episodesNumbers = map(
      compose<string, string[], string, number>(
        (x: string) => parseInt(x, 10),
        last,
        (x: string) => x.split('/'),
      ),
    )(episodesUrls || []);
    const episodesList = composeWithPromise(
      map(pick(['name'])),
      Promise.all.bind(Promise),
      map(getEpisode),
    )(episodesNumbers || []);
    if (episodesList instanceof Promise) {
      episodesList.then((episodesNames: Partial<Character>[]) => {
        setEpisodes(episodesNames);
      });
    }
  }, [characters, checked]);

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
              hasCheckBox
              onChange={handleSelectCharacter}
              checked={checked}
            />
          )}
        </Grid>
        <Grid item sm={6}>
          {episodes && <CharacterList characters={episodes} hasCheckBox={false} />}
        </Grid>
      </Grid>
    </>
  );
};

export default EpisodesIntersection;
