import {Button, Container, Navbar} from 'react-bootstrap';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';
import {logoutAction} from '../../store/api-actions';

function Header() {
  const authStatus = useAppSelector(state => state.authorizationStatus);

  const dispatch = useAppDispatch();

  const handleLogoutButton = () => dispatch(logoutAction());

  const loginButton = (authStatus: AuthorizationStatus) => {
    return authStatus === AuthorizationStatus.Auth ? <Button onClick={handleLogoutButton}>Выход</Button> : '';
  }

  return (
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand className="text-white">ФМФ "Ирбис"</Navbar.Brand>
        {loginButton(authStatus)}
      </Container>
    </Navbar>
  );
}

export default Header;