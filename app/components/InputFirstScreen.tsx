"use client";

import React, { useState } from "react";

const InputFirstScreen = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="relative">
      <input
        className="block border-zinc-600 border-[1px] rounded-[5px] pt-8  px-5 pb-2 w-[32.375rem] text-lg text-white bg-neutral-900/80 appearance-none  focus:right-0 peer invalid:border-b-1"
        id="asd"
        type="email"
        placeholder=""
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label
        htmlFor="asd"
        className="absolute text-xl text-white dark:text-white/70 duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0]  start-5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      >
        Адреса електронної пошти
      </label>
    </div>
  );
};

export default InputFirstScreen;
