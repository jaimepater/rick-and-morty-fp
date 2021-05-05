import React, { FunctionComponent, lazy, Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';

const Home = lazy(() => import('../../containers/EpisodesIntersection/EpisodesIntersection'));

const Router: FunctionComponent = () => {
  return (
    <HashRouter>
      <Header />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </HashRouter>
  );
};

export default Router;
