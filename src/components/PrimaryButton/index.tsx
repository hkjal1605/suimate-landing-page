'use client';

import React from 'react';

interface IPropType {
  children?: React.ReactNode;
  onClick?: () => void;
  text?: string;
  theme?: string;
}

const PrimaryButton = (props: IPropType) => {
  const { children, onClick, text, theme } = props;

  return (
    <button
      className={`${theme === 'dark' ? 'bg-black-100 text-black-1000' : 'bg-black-1000 text-black-100'} text-[13px] h-8 px-5 rounded-full cursor-pointer border-none outline-none z-40`}
      onClick={() => {
        if (onClick) onClick();
        window.open('https://app.insidex.trade', '_blank');
      }}
      type="button"
    >
      {children || text}
    </button>
  );
};

export default PrimaryButton;
