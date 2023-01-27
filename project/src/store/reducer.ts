import {createReducer} from '@reduxjs/toolkit';
import {
  loadFacades,
  loadOrders, orderToLoadingFacadesAction,
  requireAuthorization,
  setError,
  setFacadesLoadingStatus,
  setOrdersLoadingStatus,
} from './actions';
import {Orders} from '../types/order';
import {AuthorizationStatus} from '../const';

type InitialState = {
  orders: Orders;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isOrdersLoading: boolean;
  isFacadesLoading: boolean;
  orderToLoadingFacades: string | null;
}

const initialState: InitialState = {
  orders: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOrdersLoading: false,
  isFacadesLoading: false,
  orderToLoadingFacades: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOrders, (state, action) => {
      state.orders = action.payload;
    })
    .addCase(loadFacades, (state, action) => {
      const orderToLoad = state.orders.find((order) => order.number === state.orderToLoadingFacades);
      if (orderToLoad) {
        orderToLoad.facades = action.payload;
      }
    })
    .addCase(orderToLoadingFacadesAction, (state, action) => {
      state.orderToLoadingFacades = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setOrdersLoadingStatus, (state, action) => {
      state.isOrdersLoading = action.payload;
    })
    .addCase(setFacadesLoadingStatus, (state, action) => {
      state.isFacadesLoading = action.payload;
    });
})

export {reducer};