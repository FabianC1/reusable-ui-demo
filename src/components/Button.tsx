import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

const Button = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full px-6 py-3 rounded-md font-semibold text-white 
        bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 
        bg-[length:200%_200%] bg-left 
        hover:bg-right hover:scale-[1.02]
        transition-all duration-500 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-purple-500
        active:scale-95 shadow-md
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
