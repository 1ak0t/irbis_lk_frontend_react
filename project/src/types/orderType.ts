import {FacadesType} from './facades';

export type OrderType = {
  number: string,
  date: Date,
  agent: string,
  status: string,
  manufacturedDate: Date,
  texture: string,
  patina: string,
  facades?: FacadesType,
}

export type OrdersType = OrderType[];