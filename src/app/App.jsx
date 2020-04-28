import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import { ImportButton, ErrorBoundary } from './shared/components';
import Navigation from './features/Navigation';
import Spinner from './features/Spinner';

const SimpleButton = lazy(() =>
  import('./shared/components/buttons/SimpleButton'),
);

function Redirection() {
  return <Redirect to="/dashboard" />;
}

function RouteWithSubRoutes(route) {
  const { path, routes } = route;
  return (
    <Route
      path={path}
      render={(props) => <route.component path={props.path} routes={routes} />}
    />
  );
}

RouteWithSubRoutes.propTypes = {
  path: PropTypes.string.isRequired,
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
            <Navigation routes={routes} />
          </div>
          <div className="content-container">
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes
                  key={`${i + route.path}`}
                  path={route.path}
                  component={route.component}
                />
              ))}
            </Switch>
          </div>
        </Suspense>
      </ErrorBoundary>
    </React.StrictMode>
  );
}

export default App;
