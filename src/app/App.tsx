import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import { ImportButton, ErrorBoundary } from './shared/components';
import Navigation from './features/Navigation';
import Spinner from './features/Spinner';
import { IRoute } from './core/Interfaces/IRoute';

// toDO remove this (just for test)
const SimpleButton = lazy(() =>
  import('./shared/components/buttons/SimpleButton'),
);

const RouteWithSubRoutes = (route: IRoute): JSX.Element => {
  const { path, name } = route;
  return <Route exact path={path} render={() => <route.component />} />;
};

const routes = [
  {
    name: 'dashboard',
    path: '/dashboard',
    component: lazy(() => import('./routes/Dashboard')),
  },
  {
    name: 'morpion',
    path: '/morpion',
    component: lazy(() => import('./routes/Morpion')),
  },
  {
    path: '*',
    component: Redirection,
  },
];

function Redirection() {
  return <Redirect to="/dashboard" />;
}

function App() {
  return (
    <React.StrictMode>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          {/*
          <ImportButton />
          <SimpleButton buttonName="Button!" />
          */}
          <div className="content-navigation">
            <Navigation {...routes} />
          </div>
          <div className="content-container">
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={route.name} {...route} />
              ))}
            </Switch>
          </div>
        </Suspense>
      </ErrorBoundary>
    </React.StrictMode>
  );
}

export default App;
export type FixMeLater = any;
