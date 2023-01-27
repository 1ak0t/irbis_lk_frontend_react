import {FacadesType} from './facades';

export type Order = {
  number: string,
  date: Date,
  agent: string,
  status: string,
  manufacturedDate: Date,
  texture: string,
  patina: string,
  facades?: FacadesType,
}

export type Orders = Order[];