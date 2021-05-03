import React, { FunctionComponent } from 'react';
import './App.css';
import './core/i18n';
import { ThemeProvider } from 'styled-components';
import DateFnsUtils from '@date-io/date-fns';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import MuiTheme from './theme/muiTheme';
import { StaleTime } from './definitions/enums';

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
        </QueryClientProvider>
    </ThemeProvider>
  );
};

export default app;
