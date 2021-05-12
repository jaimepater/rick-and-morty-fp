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
  character: Partial<Character>;
  onChange?: Function;
  checked?: number[];
  hasCheckBox: boolean;
}

const CharacterItem: FunctionComponent<CharacterItemProps> = ({
  character,
  onChange,
  checked,
  hasCheckBox,
}) => {
  const { id, name, image } = character;
  return (
    <ListItem key={id || name} button>
      {image && (
        <ListItemAvatar>
          <Avatar alt={`Image ${name}`} src={image} />
        </ListItemAvatar>
      )}
      <ListItemText primary={name} />
      {hasCheckBox && (
        <ListItemSecondaryAction>
          <Checkbox
            edge="end"
            onChange={onChange && onChange(id)}
            checked={checked?.indexOf(id as number) !== -1}
          />
        </ListItemSecondaryAction>
      )}
    </ListItem>
  );
};

export default CharacterItem;
