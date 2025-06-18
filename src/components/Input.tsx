import React, { useState } from 'react';

type InputProps = {
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  error?: string;
};

const Input = ({ type, placeholder, value, onChange, label, error }: InputProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-full">
      {label && (
        <label
          className={`absolute left-3 top-2 text-sm px-1 transition-all duration-200 bg-white z-10 pointer-events-none ${
            focused || value
              ? 'text-xs -top-2 text-blue-600'
              : 'text-gray-500 top-2'
          }`}
        >
          {label}
        </label>
      )}

      <div
        className={`rounded-md p-[2px] transition-all duration-300 ${
          focused
            ? 'bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-gradient-border'
            : 'bg-gray-300'
        }`}
      >
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full px-4 py-3 rounded-md bg-white text-gray-900 border-none focus:outline-none"
        />
      </div>

      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default Input;
