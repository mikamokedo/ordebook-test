import React from 'react';

type HeaderProps = {
  selectOptions: number[];
  onChange: (value: number) => void;
  value: number;
};
const Header: React.FC<HeaderProps> = ({ selectOptions, onChange, value }) => {
  return (
    <div className="flex justify-between w-full p-[10px] border-b border-gray-500 text-sm">
      <div className="text-white">Order Book</div>
      <select
        className="rounded-sm bg-gray-500 text-white px-1"
        onChange={(e) => onChange(Number(e.target.value))}
        value={value}
      >
        {selectOptions.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Header;
