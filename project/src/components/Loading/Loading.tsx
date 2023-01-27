import {Container, Spinner} from 'react-bootstrap';

function Loading() {
  return (
    <Container className="container-md mt-5">
      <Spinner animation="border" variant="primary" className="mx-auto" style={{"display" : "block"}} />
    </Container>
  );
}

export default Loading;