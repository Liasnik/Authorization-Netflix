import React from "react";

type InputProps = {
  id: string;
  value: string;
  type: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({
  id,
  value,
  label,
  type,
  onChange,
}) => {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="block rounded-[5px] px-5 pt-6 pb-1 w-full text-sm text-white bg-neutral-800 appearance-none focus:outline-none focus:right-0 peer invalid:border-b-1"
        placeholder=""
      />
      <label
        htmlFor={id}
        className="absolute text-sm text-zinc-400 duration-150 transform -translate-y-1  scale-[65%] top-2 z-10 origin-[0] start-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-[65%] peer-focus:-translate-y-1"
      >
        {label}
      </label>
    </div>
  );
};
