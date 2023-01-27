import {reducer} from '../reducer';
import {Middleware, PayloadAction} from '@reduxjs/toolkit';
import browserHistory from '../../browser-history';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> = (_store) => (next) => (action: PayloadAction<string>) => {
  if (action.type === 'redirect') {
    browserHistory.push(action.payload);
  }

  return next(action);
}