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
      className={`${theme === 'dark' ? 'bg-black-100 text-black-1000' : 'bg-black-1000 text-black-100'} text-sm py-1.5 px-5 rounded cursor-pointer border-none outline-none z-50`}
      onClick={onClick}
      type="button"
    >
      {children || text}
    </button>
  );
};

export default PrimaryButton;
