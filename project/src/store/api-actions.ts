import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {Orders} from '../types/order';
import {APIRoutes, AppRoute, AuthorizationStatus} from '../const';
import {
  loadFacades,
  loadOrders, orderToLoadingFacadesAction,
  redirectToRoute,
  requireAuthorization,
  setFacadesLoadingStatus,
  setOrdersLoadingStatus,
} from './actions';
import {AuthData, UserData} from '../types/api';
import {dropToken, saveToken} from '../services/token';
import {FacadesType} from '../types/facades';

export const fetchOrdersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'orders/fetchOrders',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOrdersLoadingStatus(true));
    const {data} = await api.get<Orders>(APIRoutes.Orders);
    dispatch(setOrdersLoadingStatus(false));
    dispatch(loadOrders(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'users/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoutes.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'users/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoutes.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(fetchOrdersAction());
    dispatch(redirectToRoute(AppRoute.Profile));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'users/login',
  async (_arg, {dispatch, extra: api}) => {
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(redirectToRoute(AppRoute.Login));
  },
);

export const fetchFacadesAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'facades/fetchFacades',
  async (orderNumber, {dispatch, extra: api}) => {
    dispatch(setFacadesLoadingStatus(true));
    dispatch(orderToLoadingFacadesAction(orderNumber));
    const {data} = await api.get<FacadesType>(`${APIRoutes.Facades}/${orderNumber}`);
    dispatch(setFacadesLoadingStatus(false));
    dispatch(loadFacades(data));
    dispatch(orderToLoadingFacadesAction(null));
  },
);

