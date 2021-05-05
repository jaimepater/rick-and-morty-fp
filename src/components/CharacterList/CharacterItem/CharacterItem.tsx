import React, { FunctionComponent } from 'react';
import {
  Avatar,
  Checkbox,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import { Character } from '../../../definitions/types';

interface CharacterItemProps {
  character: Character;
  onChange: Function;
  checked: number[];
}

const CharacterItem: FunctionComponent<CharacterItemProps> = ({ character, onChange, checked }) => {
  const { id, name, image } = character;
  return (
    <ListItem key={id} button>
      <ListItemAvatar>
        <Avatar alt={`Image ${name}`} src={image} />
      </ListItemAvatar>
      <ListItemText primary={name} />
      <ListItemSecondaryAction>
        <Checkbox edge="end" onChange={onChange(id)} checked={checked.indexOf(id) !== -1} />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default CharacterItem;
