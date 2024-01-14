"use client";

import BgProvider from "@/app/components/BgProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Input } from "@/app/components/Input";
import { signIn } from "next-auth/react";
import axios from "axios";

type VariantType = "login" | "register";

const AuthPage: React.FC = () => {
  const router = useRouter();
  const [variant, setVariant] = useState<VariantType>("login");

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  const handleVariant = () => {
    setVariant((prev) => (prev === "login" ? "register" : "login"));
  };

  const login = async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: true,
        callbackUrl: "/home",
      });
    } catch (error) {
      console.log("login error", error);
    }
  };

  const register = async () => {
    try {
      // const userBody = image
      //   ? { name, email, image, password }
      //   : { name, email, password };

      // console.log("Registering user:", { userBody }); // Вывести данные регистрации перед запросом

      await axios.post("/api/register", {
        name,
        email,
        password,
        image,
      });
      login();
    } catch (error) {
      console.error("Register error", error);
    }
  };

  return (
    <BgProvider removeBgOnMobile>
      <nav className="px-4 md:px-16 py-0">
        <Image
          onClick={() => router.push("/")}
          width={100}
          height={100}
          src="/images/logo.svg"
          alt="logo"
          className="h-24 w-36 cursor-pointer"
        />
      </nav>

      <div className="flex justify-center">
        <div className="bg-black/80 rounded-[5px] px-14 pt-12 pb-16 self-center h-[717px]  lg:w-2/5 lg:max-w-[450px] w-full">
          <h2 className="text-2xl ">
            {variant === "login" ? "Увійти" : "Зареєструватись"}
          </h2>
          <div className="flex flex-col gap-4 mt-4">
            {variant === "register" && (
              <Input
                id="name"
                label="Ім`я"
                type="text"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
              />
            )}
            <Input
              id="email"
              type="text"
              label="Адреса електронної пошти"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            <Input
              id="password"
              type="password"
              label=" Пaроль"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
            {/* {variant === "register" && (
              <Input
                id="image"
                type="text"
                label="URL картинки"
                value={image}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setImage(e.target.value)
                }
              />
            )} */}
          </div>
          <button
            onClick={variant === "login" ? login : register}
            className="bg-red-700 py-3 text-white rounded-md w-full my-10 hover:bg-red-600 transition"
          >
            {variant === "login" ? "Увійти" : "Зареєструватись"}
          </button>

          <div className="flex flex-row items-center gap-4 justify-center">
            <div
              onClick={() => signIn("google", { callbackUrl: "/home" })}
              className="w-10 h-10 bg-black rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
            >
              <FaGoogle size={32} />
            </div>

            <div
              onClick={() => signIn("github", { callbackUrl: "/home" })}
              className="w-10 h-10 bg-black rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
            >
              <FaGithub size={32} />
            </div>
          </div>

          <div className="flex mt-7 text-sm">
            <p className="text-neutral-500 ">
              {variant === "login" ? "Уперше на Netflix?" : "Уже маєш акаунт?"}
            </p>
            <p
              onClick={handleVariant}
              className="text-white ml-2 cursor-pointer hover:underline transition"
            >
              {variant === "login" ? "Зареєструватись" : "Увійти"}
            </p>
          </div>
        </div>
      </div>

      <form></form>
    </BgProvider>
  );
};

export default AuthPage;
