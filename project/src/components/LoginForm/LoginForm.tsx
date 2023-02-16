import {Container, Form, Row, Button} from 'react-bootstrap';
import React, {FormEvent, useRef} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AuthData} from '../../types/api';
import {checkEmailAction, loginAction} from '../../store/api-actions';

function LoginForm() {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const emailBlockRef = useRef<HTMLDivElement | null>(null);
  const passwordBlockRef = useRef<HTMLDivElement | null>(null);
  const checkEmailStatus = useAppSelector(state => state.checkEmailStatus);
  const userName = useAppSelector(state => state.organization);

  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  }

  const handleLoginFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value
      })
    }
  }

  const loginChangeBlock = (checkEmailStatus: boolean) => {
    if (checkEmailStatus) {
      if (passwordBlockRef.current && emailBlockRef.current) {
        passwordBlockRef.current.style.display = "block";
        emailBlockRef.current.style.display = "none";
      }
    }
  }

  const checkEmailHandle = (checkEmailStatus: boolean) => {
    if (loginRef.current) {
      const email: string = loginRef.current.value;
      dispatch(checkEmailAction({email: email}))
    }
  }

  loginChangeBlock(checkEmailStatus);

  return (
    <Container className="container-sm mt-5">
      <Row className="col-4 mx-auto">
        <Form onSubmit={handleLoginFormSubmit}>
          <div ref={emailBlockRef}>
            <Form.Group className="mb-3">
              <Form.Label>Адрес электронной почты</Form.Label>
              <Form.Control ref={loginRef} type="email" placeholder="Введите адрес" />
            </Form.Group>
            <Button className="w-100" variant="primary" type="button" onClick={() => checkEmailHandle(checkEmailStatus)}>
              Далее
            </Button>
          </div>
          <div ref={passwordBlockRef} style={{"display" : "none"}}>
            <Form.Group className="mb-4">
              <Form.Label>{userName}</Form.Label>
              <Form.Control ref={passwordRef} type="password" placeholder="Введите пароль" />
            </Form.Group>
            <Button className="w-100" variant="primary" type="submit">
              Вход
            </Button>
          </div>
        </Form>
      </Row>
    </Container>
  );
}

export default LoginForm;