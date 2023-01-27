import Header from '../../components/Header/Header';
import {Helmet} from 'react-helmet-async';
import {useAppDispatch, useAppSelector} from '../../hooks';
import LoadingPage from '../Loading/LoadingPage';
import {Accordion} from 'react-bootstrap';
import {useEffect} from 'react';
import {fetchOrdersAction} from '../../store/api-actions';
import OrderBlock from '../../components/Order/Order';

function ProfilePage() {
  const isOrdersLoading = useAppSelector(state => state.isOrdersLoading);
  const orders = useAppSelector(state => state.orders);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOrdersAction());
    }, []);

  if (isOrdersLoading) {
    return (
      <LoadingPage />
    );
  };

  return (
    <>
      <Helmet>
        <title>Профиль</title>
      </Helmet>
      <Header />
      <Accordion className="container-md mt-5">
        <h2>Заказы</h2>
          {orders.map((order) => <OrderBlock order={order} key={order.number} />)}
      </Accordion>

    </>
  );
}

export default ProfilePage;