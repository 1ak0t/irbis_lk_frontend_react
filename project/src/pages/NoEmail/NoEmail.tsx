import {Helmet} from 'react-helmet-async';
import Header from '../../components/Header/Header';
import {Container, Row} from 'react-bootstrap';

function NoEmail() {
  return (
    <>
      <Helmet>
        <title>Почтовый ящик отсутствует</title>
      </Helmet>
      <Header />
      <Container className="container-sm mx-auto mt-5">
        <Row className="col-4 mx-auto text-center">
          <h3>Данный адрес отсутствует в нашей базе</h3>
          <p className="mt-4">Если вы являете нашим клиентом, обратитесь к менеджерам для добавления почтового ящика.</p>
          <p>Контакты</p>
        </Row>
      </Container>
    </>
  );
}

export default NoEmail;