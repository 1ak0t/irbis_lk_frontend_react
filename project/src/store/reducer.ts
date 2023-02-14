import {createReducer} from '@reduxjs/toolkit';
import {
  filterOrders,
  loadFacades,
  loadOrders, orderToLoadingFacadesAction,
  requireAuthorization, setCheckEmailStatus,
  setError,
  setFacadesLoadingStatus,
  setOrdersLoadingStatus, setOrganizationName,
} from './actions';
import {OrdersType} from '../types/orderType';
import {AuthorizationStatus} from '../const';

type InitialState = {
  organization: string,
  orders: OrdersType;
  filteredOrders: OrdersType;
  authorizationStatus: AuthorizationStatus;
  checkEmailStatus: boolean;
  error: string | null;
  isOrdersLoading: boolean;
  isFacadesLoading: boolean;
  orderToLoadingFacades: string | null;
}

const initialState: InitialState = {
  organization: '',
  orders: [],
  filteredOrders: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  checkEmailStatus: false,
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
    .addCase(filterOrders, (state, action) => {
      state.filteredOrders = action.payload;
    })
    .addCase(loadFacades, (state, action) => {
      const orderToLoad = state.filteredOrders.find((order) => order.number === state.orderToLoadingFacades);
      if (orderToLoad) {
        orderToLoad.facades = action.payload;
      }
    })
    .addCase(setOrganizationName, (state, action) => {
      state.organization = action.payload;
    })
    .addCase(orderToLoadingFacadesAction, (state, action) => {
      state.orderToLoadingFacades = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setCheckEmailStatus, (state, action) => {
      state.checkEmailStatus = action.payload;
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