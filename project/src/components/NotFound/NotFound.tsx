import {Alert, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function NotFound() {
  return (
    <Alert variant={'danger'} className="col-6 mx-auto mt-5">
      <Alert.Heading className="mb-4 mx-auto">Страница не найдена</Alert.Heading>
      <Link to={AppRoute.Login}><Button className="mx-auto">К профилю</Button></Link>
    </Alert>
  )
}

export default NotFound;