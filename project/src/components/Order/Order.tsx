import {Order} from '../../types/order';
import {Accordion, Table} from 'react-bootstrap';
import dayjs from 'dayjs';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchFacadesAction} from '../../store/api-actions';
import {FacadeType} from '../../types/facades';
import {ReactNode} from 'react';
import Loading from '../Loading/Loading';

type OrderProps = {
  order: Order
}

function OrderBlock({order}: OrderProps) {
  const {number, date, agent, status, manufacturedDate, texture, patina, facades} = order;

  const dispatch = useAppDispatch();

  const getOrderTitle = (number: string, date: Date, texture: string, patina: string) => {
    return `№${number} от ${dayjs(date).format('D.MM.YYYY')}. Текстура: ${texture}. Патина: ${patina}`;
  }

  const getFacades = () => {
    dispatch(fetchFacadesAction(number));
  }

  const getFacadesBlock = ({
                             type,
                             direction,
                             patina,
                             milling,
                             texture,
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
        <td>{patina}</td>
        <td>{texture}</td>
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
      <Accordion.Header onClick={getFacades}>{getOrderTitle(number, date, texture,patina)}</Accordion.Header>
      <Accordion.Body>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Фрезеровка</th>
              <th>Тип</th>
              <th>Патина</th>
              <th>Текстура</th>
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