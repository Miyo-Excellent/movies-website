import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { nanoid } from 'nanoid';

import { HandlerType } from './handlers';

export interface NavigatorProps {
  routes: HandlerType[];
}

export default function Navigator({ routes }: NavigatorProps): JSX.Element {
  return (
    <Switch>
      {routes.map((route: any) => (
        <Route key={nanoid()} {...route} />
      ))}
    </Switch>
  );
}
