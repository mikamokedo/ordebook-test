import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between w-full p-[10px] border-b border-gray-500 text-sm">
      <div className="text-white">Order Book</div>
      <select className="rounded-sm bg-gray-500 text-white px-1">
        <option>Group 0.50</option>
        <option>Group 1</option>
        <option>Group 2</option>
      </select>
    </div>
  );
};

export default Header;
