"use client";
import React from "react";
interface inputProps {
  label?: string;
  labelFor?: string;
  inputName?: string;
  value?: string | number;
  placeholder?: string;
  inputType?: string;
  onChange?: (e:any) =>void;
}
const Input: React.FC<inputProps> = ({
  label,
  labelFor,
  value,
  inputType,
  inputName,
  placeholder,
  onChange
}) => {
  return (
    <>
      <label
        htmlFor={labelFor}
        className="mb-1 text-gray-600 dark:text-white capitalize"
      >
        {label}
      </label>
      <input
        name={inputName}
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full py-2  rounded-lg px-5 outline-none focus:outline-none border border-gray-400 dark:border-white focus:border-amber-500 text-gray-600 dark:text-white bg-white dark:bg-transparent"
      />
    </>
  );
};

export default Input;
