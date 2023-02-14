import Header from '../../components/Header/Header';
import {Helmet} from 'react-helmet-async';
import {useAppDispatch, useAppSelector} from '../../hooks';
import LoadingPage from '../Loading/LoadingPage';
import {Accordion, Container} from 'react-bootstrap';
import {useEffect} from 'react';
import {fetchOrdersAction} from '../../store/api-actions';
import OrderBlock from '../../components/Order/Order';
import OrderFilter from '../../components/OrderFilter/OrderFilter';
import {OrdersType} from '../../types/orderType';
import {filterOrders} from '../../store/actions';

function ProfilePage() {
  const isOrdersLoading = useAppSelector(state => state.isOrdersLoading);
  const orders = useAppSelector(state => state.orders);
  const filteredOrders = useAppSelector(state => state.filteredOrders);
  const dispatch = useAppDispatch();

  const filterOrdersList = (orders: OrdersType, filter?: string) => {
    if (filter && filter !== 'В работе') {
      dispatch(filterOrders(orders.filter((order) => order.status === filter)));
    } else {
      dispatch(filterOrders(orders.filter((order) => order.status !== 'Выполнена')));
    }
  };

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
      <Container className="container-sm mx-5">
        <h2 className="mt-4">Заказы</h2>
        <h5>Всего заказов: {orders.length}</h5>
        <h5>Выполнено: {orders.filter(order => order.status === 'Выполнена').length}</h5>
        <OrderFilter filterOrders={filterOrdersList} orders={orders} />
        <Accordion className="mt-5">
          {filteredOrders.map((order) => <OrderBlock order={order} key={order.number} />)}
        </Accordion>
      </Container>

    </>
  );
}

export default ProfilePage;