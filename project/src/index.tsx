import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App/App';
import {Provider} from 'react-redux';
import {store} from './store';
import {getToken} from './services/token';
import {filterOrders, requireAuthorization} from './store/actions';
import {AuthorizationStatus} from './const';

if (getToken() !== '') {
  store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
