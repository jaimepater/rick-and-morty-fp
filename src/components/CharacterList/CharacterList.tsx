import React, { FunctionComponent } from 'react';
import { List } from '@material-ui/core';

import { Character } from '../../definitions/types';
import CharacterItem from './CharacterItem/CharacterItem';

interface CharacterListProps {
  characters: Partial<Character>[];
  onChange?: Function;
  checked?: number[];
  hasCheckBox: boolean;
}

const CharacterList: FunctionComponent<CharacterListProps> = ({
  characters,
  onChange,
  hasCheckBox,
  checked,
}) => {
  return (
    <List dense>
      {characters.map(character => {
        return (
          <CharacterItem
            character={character}
            hasCheckBox={hasCheckBox}
            onChange={onChange}
            checked={checked}
          />
        );
      })}
    </List>
  );
};

export default CharacterList;
