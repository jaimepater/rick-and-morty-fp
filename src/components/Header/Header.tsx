import React, { FunctionComponent } from 'react';
import { AppBar, Grid, MenuItem, Toolbar, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { mainMenu } from '../../core/router/MainMenu';

const MenuItemContainer = styled.div`
  .MuiListItem-root.Mui-selected {
    background-color: rgba(0, 0, 0, 0.3);
    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
  && .MuiListItem-root:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const MyComponent: FunctionComponent = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container spacing={3}>
          <Grid item>
            <Typography variant="h6">{t('appTitle')}</Typography>
          </Grid>
          <Grid item>
            <Grid container>
              {mainMenu(t).map(({ path, label }) => (
                <Grid item key={label}>
                  <MenuItemContainer>
                    <MenuItem component={Link} key={label} to={path} selected={pathname === path}>
                      {label}
                    </MenuItem>
                  </MenuItemContainer>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default MyComponent;
