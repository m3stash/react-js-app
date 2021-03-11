import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import { ErrorBoundary } from './shared/components';
import Navigation from './features/Navigation';
import Spinner from './features/Spinner';
import { IRoute } from './core/Interfaces/IRoute';

const RouteWithSubRoutes = (route: IRoute): JSX.Element => {
  const { path } = route;
  return <Route exact path={path} render={() => <route.component />} />;
};

function Redirection() {
  return <Redirect to="/dashboard" />;
}

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

function App(): JSX.Element {
  return (
    <React.StrictMode>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <div className="content-navigation">
            <Navigation {...routes} />
          </div>
          <div className="content-container">
            <Switch>
              {routes.map((route) => (
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
