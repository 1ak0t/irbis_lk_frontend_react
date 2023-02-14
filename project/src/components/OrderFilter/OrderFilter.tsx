import {Dropdown} from 'react-bootstrap';
import {OrdersType} from '../../types/orderType';
import {useRef} from 'react';

type OrderFilterProps = {
  filterOrders: Function;
  orders: OrdersType;
}

function OrderFilter({filterOrders, orders}: OrderFilterProps) {
  let title = useRef<HTMLButtonElement | null>(null);
  const setFilter = (eventKey: any ,evt: Object): any => {
    filterOrders(orders, eventKey);
  }

  const setTitle = (evt: any) => {
    if(title.current) {
      title.current.innerText = evt.target.innerText;
      console.log(title)
    }
  }

  return (
    <Dropdown onSelect={setFilter}>
      <Dropdown.Toggle ref={title} id="dropdown-button-dark-example1" variant="secondary" style={{"width": "250px"}}>
        Выберите статус заявки
      </Dropdown.Toggle>

      <Dropdown.Menu variant="dark">
        <Dropdown.Item onClick={setTitle} eventKey="В работе" active>В работе</Dropdown.Item>
        <Dropdown.Item onClick={setTitle} eventKey="Принята">Принята</Dropdown.Item>
        <Dropdown.Item onClick={setTitle} eventKey="Производство">Производство</Dropdown.Item>
        <Dropdown.Item onClick={setTitle} eventKey="Произведена">Произведена</Dropdown.Item>
        <Dropdown.Item onClick={setTitle} eventKey="На складе">На складе</Dropdown.Item>
        <Dropdown.Item onClick={setTitle} eventKey="Оплачена">Оплачена</Dropdown.Item>
        <Dropdown.Item onClick={setTitle} eventKey="Доставляется">Доставляется</Dropdown.Item>
        <Dropdown.Item onClick={setTitle} eventKey="Выполнена">Выполнена</Dropdown.Item>
        <Dropdown.Item onClick={setTitle} eventKey="Отменена">Отменена</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default  OrderFilter;