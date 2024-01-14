"use client";

import React from "react";
import { useRouter } from "next/navigation";

const ButtonMainScreen = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/auth")}
      className="bg-red-700 text-3xl py-3  text-white rounded-[5px] w-60 my-0 hover:bg-red-800 transition"
    >
      Почати
    </button>
  );
};

export default ButtonMainScreen;
