import {Button, Container, Navbar} from 'react-bootstrap';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AppRoute, AuthorizationStatus} from '../../const';
import {logoutAction} from '../../store/api-actions';
import {Link} from 'react-router-dom';

function Header() {
  const authStatus = useAppSelector(state => state.authorizationStatus);
  const organizationName = useAppSelector(state => state.organization);

  const dispatch = useAppDispatch();

  const handleLogoutButton = () => dispatch(logoutAction());

  const loginButton = (authStatus: AuthorizationStatus) => {
    return authStatus === AuthorizationStatus.Auth ? <Button onClick={handleLogoutButton}>Выход</Button> : '';
  }

  return (
    <Navbar bg="secondary">
      <Container>
        <Navbar.Brand className="text-white"><Link to={AppRoute.Profile} style={{"color" : "white"}}>ФМФ "Ирбис"</Link></Navbar.Brand>
        <h2 style={{"color": "white"}}>{organizationName}</h2>
        {loginButton(authStatus)}
      </Container>
    </Navbar>
  );
}

export default Header;