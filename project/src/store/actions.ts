import {createAction} from '@reduxjs/toolkit';
import {Orders} from '../types/order';
import {AppRoute, AuthorizationStatus} from '../const';
import {FacadesType} from '../types/facades';

export const loadOrders = createAction<Orders>('orders/loadOrders');

export const loadFacades = createAction<FacadesType>('facades/loadFacades');

export const orderToLoadingFacadesAction = createAction<string | null>('facades/orderToLoadingFacades');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('error');

export const setOrdersLoadingStatus = createAction<boolean>('orders/setOrdersLoadingStatus');

export const setFacadesLoadingStatus = createAction<boolean>('orders/setFacadesLoadingStatus');

export const redirectToRoute = createAction<AppRoute>('redirect');

export const logout = createAction('logout');