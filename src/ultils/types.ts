import { Order } from '../components/OrderItem';

export type ReceiveMessage = {
  feed: string;
  product_id: ProductsEnum;
  bids: number[][];
  asks: number[][];
};

export enum ProductsEnum {
  PI_XBTUSD = 'PI_XBTUSD',
  PI_ETHUSD = 'PI_ETHUSD',
}

export type ProcessedData = { bids: Order[]; asks: Order[] };
