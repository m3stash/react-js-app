import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { ImportButton, ErrorBoundary } from './shared/components';
import MenuLeft from './feature/MenuLeft';

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
    <div className="App">
      <ImportButton />
      <ErrorBoundary>
        <Suspense fallback={<div>Mettre spinner ici !...</div>}>
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
          <MenuLeft routes={routes} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
