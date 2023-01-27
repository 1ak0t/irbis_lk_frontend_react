import {Container, Form, Row, Button} from 'react-bootstrap';
import React, {FormEvent, useRef} from 'react';
import {useAppDispatch} from '../../hooks';
import {AuthData} from '../../types/api';
import {loginAction} from '../../store/api-actions';

function LoginForm() {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

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

  return (
    <Container className="container-sm mt-5">
      <Row className="col-4 mx-auto">
        <Form onSubmit={handleLoginFormSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Адрес электронной почты</Form.Label>
            <Form.Control ref={loginRef} type="email" placeholder="Введите адрес" />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Пароль</Form.Label>
            <Form.Control ref={passwordRef} type="password" placeholder="Введите пароль" />
          </Form.Group>
          <Button className="w-100" variant="primary" type="submit">
            Вход
          </Button>
        </Form>
      </Row>
    </Container>
  );
}

export default LoginForm;