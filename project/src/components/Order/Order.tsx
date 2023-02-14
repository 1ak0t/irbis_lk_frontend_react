import {OrderType} from '../../types/orderType';
import {Accordion, Badge, Table} from 'react-bootstrap';
import dayjs from 'dayjs';
import {useAppDispatch} from '../../hooks';
import {fetchFacadesAction} from '../../store/api-actions';
import {FacadeType} from '../../types/facades';
import {ReactNode} from 'react';

type OrderProps = {
  order: OrderType
}

function OrderBlock({order}: OrderProps) {
  const {number, date, agent, status, manufacturedDate, texture, patina, facades} = order;

  const dispatch = useAppDispatch();

  const getOrderTitle = ({number, date, texture, patina, status}: OrderType) => {
    const orderTitle = `№${number} от ${dayjs(date).format('D.MM.YYYY')}. Текстура: ${texture}. Патина: ${patina}`;

    return orderTitle;
  }

  const getBadge = (status: string) => {
    let bg = '';

    switch (status) {
      case 'Выполнена':
        bg = 'success';
        break;
      case 'На складе':
        bg = 'warning';
        break;
      case 'Произведена':
        bg = 'primary';
        break;
      case 'Оплачена':
        bg = 'info';
        break;
      case 'Принята':
        bg = 'info';
        break;
      case 'Отменена':
        bg = 'danger';
        break;
      case 'Доставляется':
        bg = 'primary';
        break;
      case 'Производство':
        bg = 'primary';
        break;
    }

    return (
      <Badge bg={bg} className="me-3" style={{"width": "100px"}}>
        {status}
      </Badge>
    );
  }

  const getFacades = () => {
    dispatch(fetchFacadesAction(number));
  }

  const getFacadesBlock = ({
                             type,
                             direction,
                             milling,
                             view,
                             height,
                             width,
                             thickness,
                             square,
                             count,
                             price,
                             total,
                           }: FacadeType) => {

    return (
      <tr key={square}>
        <td>{milling}</td>
        <td>{type}</td>
        <td>{direction}</td>
        <td>{view}</td>
        <td>{height}</td>
        <td>{width}</td>
        <td>{thickness}</td>
        <td>{square}</td>
        <td>{count}</td>
        <td>{price}</td>
        <td>{total}</td>
      </tr>
    );
  }

  return (
    <Accordion.Item eventKey={number} className="mb-3">
      <Accordion.Header onClick={getFacades}>{getBadge(status)}{getOrderTitle(order)}</Accordion.Header>
      <Accordion.Body>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Фрезеровка</th>
              <th>Тип</th>
              <th>Направление</th>
              <th>Вид</th>
              <th>Высота</th>
              <th>Ширина</th>
              <th>Толщина</th>
              <th>Площадь</th>
              <th>Количество</th>
              <th>Цена</th>
              <th>Итого</th>
            </tr>
          </thead>
          <tbody>
            {facades?.map((facade): ReactNode => getFacadesBlock(facade))}
          </tbody>
        </Table>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default OrderBlock;