import Header from '../../components/Header/Header';
import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import {Helmet} from 'react-helmet-async';

function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Авторизация</title>
      </Helmet>
      <Header />
      <LoginForm />
    </>
  );
}

export default LoginPage;