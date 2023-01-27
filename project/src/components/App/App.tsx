import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import ProfilePage from '../../pages/Profile/ProfilePage';
import {HelmetProvider} from 'react-helmet-async';
import LoginPage from '../../pages/Login/LoginPage';
import NotFoundPage from '../../pages/NotFound/NotFoundPage';
import {useAppSelector} from '../../hooks';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';


function App() {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Login} element={<LoginPage />} />
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
