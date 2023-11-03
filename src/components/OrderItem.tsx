import React from 'react';

export type Order = {
  total: number;
  size: number;
  price: number;
};

type OrderItemProps = {
  isAsks?: boolean;
  order: Order;
};
const OrderItem: React.FC<OrderItemProps> = ({ isAsks, order }) => {
  return (
    <div className="flex py-1">
      <div
        className={` text-[12px] w-4/12 text-right ${
          isAsks ? 'order-3' : ''
        } text-white`}
      >
        {order.total}
      </div>
      <div
        className={` text-[12px] w-4/12 text-right ${
          isAsks ? 'order-2' : ''
        } text-white`}
      >
        {order.size}
      </div>
      <div
        className={` text-[12px] w-4/12 text-right ${
          isAsks ? 'order-1 text-red-500' : 'text-green-500'
        } `}
      >
        {order.price}
      </div>
    </div>
  );
};

export default OrderItem;
