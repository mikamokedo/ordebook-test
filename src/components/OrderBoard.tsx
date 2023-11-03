import React from 'react';
import OrderItem, { Order } from './OrderItem';

type OrderHistoryProps = {
  isAsks?: boolean;
  orders: Order[];
};
const OrderHistory: React.FC<OrderHistoryProps> = ({ isAsks, orders }) => {
  return (
    <div className="py-[10px] pr-[30px] w-full">
      <div className="flex text-gray-600 uppercase text-sm mb-[10px]">
        <div className={`w-4/12 text-right ${isAsks ? 'order-3' : ''}`}>
          Total
        </div>
        <div className={`w-4/12 text-right ${isAsks ? 'order-2' : ''}`}>
          Size
        </div>
        <div className={`w-4/12 text-right ${isAsks ? 'order-1' : ''}`}>
          Price
        </div>
      </div>
      {orders.map((item) => (
        <OrderItem order={item} isAsks={isAsks} key={item.price} />
      ))}
    </div>
  );
};

export default OrderHistory;
