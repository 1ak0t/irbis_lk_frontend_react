import {Container, Form, Row, Button} from 'react-bootstrap';
import React from 'react';


function LoginForm() {
  return (
    <Container className="container-sm mt-5">
      <Row className="col-4 mx-auto">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Адрес электронной почты</Form.Label>
            <Form.Control type="email" placeholder="Введите адрес" />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" placeholder="Введите пароль" />
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