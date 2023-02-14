import {createAction} from '@reduxjs/toolkit';
import {OrdersType} from '../types/orderType';
import {AppRoute, AuthorizationStatus} from '../const';
import {FacadesType} from '../types/facades';

export const loadOrders = createAction<OrdersType>('orders/loadOrders');

export const filterOrders = createAction<OrdersType>('orders/filterOrders');

export const loadFacades = createAction<FacadesType>('facades/loadFacades');

export const orderToLoadingFacadesAction = createAction<string | null>('facades/orderToLoadingFacades');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setCheckEmailStatus = createAction<boolean>('user/setCheckEmailStatus');

export const setOrganizationName = createAction<string>('user/setOrganizationName');

export const setError = createAction<string | null>('error');

export const setOrdersLoadingStatus = createAction<boolean>('orders/setOrdersLoadingStatus');

export const setFacadesLoadingStatus = createAction<boolean>('orders/setFacadesLoadingStatus');

export const redirectToRoute = createAction<AppRoute>('redirect');

export const logout = createAction('logout');