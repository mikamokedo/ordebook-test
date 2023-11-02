import React from 'react';
import OrderItem, { Order } from './OrderItem';

type OrderHistoryProps = {
  isSellBoard?: boolean;
  orders: Order[];
};
const OrderHistory: React.FC<OrderHistoryProps> = ({ isSellBoard, orders }) => {
  return (
    <div className="py-[10px] pr-[30px] w-full">
      <div className="flex text-gray-600 uppercase text-sm mb-[10px]">
        <div className={`w-4/12 text-right ${isSellBoard ? 'order-3' : ''}`}>
          Total
        </div>
        <div className={`w-4/12 text-right ${isSellBoard ? 'order-2' : ''}`}>
          Size
        </div>
        <div className={`w-4/12 text-right ${isSellBoard ? 'order-1' : ''}`}>
          Price
        </div>
      </div>
      {orders.map((item) => (
        <OrderItem order={item} isSellBoard={isSellBoard} />
      ))}
    </div>
  );
};

export default OrderHistory;
