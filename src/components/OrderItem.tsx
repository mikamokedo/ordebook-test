import React from 'react';

export type Order = {
  total: number;
  size: number;
  price: number;
};

type OrderItemProps = {
  isSellBoard?: boolean;
  order: Order;
};
const OrderItem: React.FC<OrderItemProps> = ({ isSellBoard, order }) => {
  return (
    <div className="flex uppercase">
      <div
        className={` text-[12px] w-4/12 text-right ${
          isSellBoard ? 'order-3' : ''
        } text-white`}
      >
        {order.total}
      </div>
      <div
        className={` text-[12px] w-4/12 text-right ${
          isSellBoard ? 'order-2' : ''
        } text-white`}
      >
        {order.size}
      </div>
      <div
        className={` text-[12px] w-4/12 text-right ${
          isSellBoard ? 'order-1 text-red-500' : 'text-green-500'
        } `}
      >
        {order.price}
      </div>
    </div>
  );
};

export default OrderItem;
