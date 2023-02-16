import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import ProfilePage from '../../pages/Profile/ProfilePage';
import {HelmetProvider} from 'react-helmet-async';
import LoginPage from '../../pages/Login/LoginPage';
import NotFoundPage from '../../pages/NotFound/NotFoundPage';
import {useAppDispatch, useAppSelector} from '../../hooks';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import {filterOrders} from '../../store/actions';
import ConfirmEmail from '../../pages/ConfirmEmail/ConfirmEmail';
import NoEmail from '../../pages/NoEmail/NoEmail';


function App() {
  const orders = useAppSelector(state => state.orders);
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  dispatch(filterOrders(orders.filter((order) => order.status !== 'Выполнена')));

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={AppRoute.ConfirmEmail} element={<ConfirmEmail />} />
          <Route path={AppRoute.NoEmail} element={<NoEmail />} />
          <Route path={AppRoute.Profile} element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <ProfilePage />
            </PrivateRoute>
          } />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
