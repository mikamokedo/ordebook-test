import React from 'react';
import { ExclamationCircleOutlined, SwapOutlined } from '@ant-design/icons';

type FooterProps = {
  onToggle: () => void;
  onKillFeed: () => void;
};

const Footer: React.FC<FooterProps> = ({ onToggle, onKillFeed }) => {
  return (
    <div className="flex pt-[30px] pb-[5px] bg-[#2B3749]">
      <div className="w-6/12 flex justify-end pr-2">
        <button
          className="rounder-5px text-white bg-[#624ADE] px-[10px] py-[5px] rounded flex items-center"
          onClick={onToggle}
        >
          <SwapOutlined />
          <div className="ml-[5px]"> Toggle Feed</div>
        </button>
      </div>
      <div className="w-6/12  pl-2">
        <button
          className="rounder-5px text-white bg-[#C11E20] px-[10px] py-[5px] rounded flex items-center"
          onClick={onKillFeed}
        >
          <ExclamationCircleOutlined />
          <div className="ml-[5px]"> Kill Feed</div>
        </button>
      </div>
    </div>
  );
};

export default Footer;
