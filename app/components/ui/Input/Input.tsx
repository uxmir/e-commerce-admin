"use client";
import React from "react";
interface inputProps {
  label?: string;
  labelFor?: string;
  inputName?: string;
  value?: string | number;
  placeholder?: string;
  inputType?: string;
  errors?: any;
  errorValue?: string;
  onChange?: (e: any) => void;
}
const Input: React.FC<inputProps> = ({
  label,
  labelFor,
  value,
  inputType,
  inputName,
  placeholder,
  errors,
  errorValue,
  onChange,
}) => {
  return (
    <>
      <div className="flex flex-col gap-y-1 w-full">
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
          className={`w-full py-2  rounded-lg px-5 outline-none focus:outline-none border text-gray-600 dark:text-white bg-white dark:bg-transparent ${errors ? "border-red-600" : "border-gray-400 dark:border-white focus:border-amber-500"}`}
        />
        {errors && (
          <p className="text-red-600 text-sm capitalize mt-1">{errorValue}</p>
        )}
      </div>
    </>
  );
};

export default Input;
