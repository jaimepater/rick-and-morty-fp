import React, { FunctionComponent } from 'react';
import { List } from '@material-ui/core';

import { Character } from '../../definitions/types';
import CharacterItem from './CharacterItem/CharacterItem';

interface CharacterListProps {
  characters: Character[];
  onChange: Function;
  checked: number[];
}

const CharacterList: FunctionComponent<CharacterListProps> = ({
  characters,
  onChange,
  checked,
}) => {
  return (
    <List dense>
      {characters.map(character => {
        return <CharacterItem character={character} onChange={onChange} checked={checked} />;
      })}
    </List>
  );
};

export default CharacterList;
