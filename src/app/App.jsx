import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { ImportButton, ErrorBoundary, Morpion } from './shared/components';

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
    path: '/dashboard',
    component: lazy(() => import('./routes/Dashboard')),
  },
  {
    path: '*',
    component: Redirection,
  },
];

function App() {
  return (
    <div className="App">
      <br />
      <ImportButton />
      <ErrorBoundary>
        <Suspense fallback={<div>Chargement...</div>}>
          <SimpleButton buttonName="Button!" />
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes
                key={`${i + route.path}`}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </Suspense>
      </ErrorBoundary>
      <br />
      <Morpion />
    </div>
  );
}

export default App;
