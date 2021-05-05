import React, { FunctionComponent } from 'react';
import './App.css';
import './core/i18n';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import MuiTheme from './theme/muiTheme';
import { StaleTime } from './definitions/enums';
import Router from "./core/router/Router";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: StaleTime.SHORT,
    },
  },
});

const app: FunctionComponent = () => {
  return (
    <ThemeProvider theme={MuiTheme}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Router />
        </QueryClientProvider>
    </ThemeProvider>
  );
};

export default app;
