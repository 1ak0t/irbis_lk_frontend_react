import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from '../services/api';
import {reducer} from './reducer';
import {redirect} from './middlewares/redirect';

const api = createAPI();

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    }).concat(redirect),
});