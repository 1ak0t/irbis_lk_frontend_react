import {useAppSelector} from '../../hooks';
import {Button, Container, Row} from 'react-bootstrap';
import {Helmet} from 'react-helmet-async';
import Header from '../../components/Header/Header';

function ConfirmEmail() {
  const userName = useAppSelector(state => state.organization);
  const userEmail = useAppSelector(state => state.email);

  return (
    <>
      <Helmet>
        <title>Профиль</title>
      </Helmet>
      <Header />
      <Container className="container-sm mx-auto mt-5">
        <Row className="col-4 mx-auto text-center">
          <h3>Добрый день, {userName}</h3>
          <p className="mt-4">Для продолжения регистрации необходимо подтвердить владение этим почтовый ящиком.</p>
          <p>На почту {userEmail} придет письмо с ссылкой на форму регистрации.</p>
          <Button className="mt-4">Подтвердить</Button>
        </Row>
      </Container>
    </>
  );
}

export default ConfirmEmail;