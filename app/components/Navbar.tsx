"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import NavbarItem from "@/app/components/NavbarItem";
import { signOut } from "next-auth/react";

type NavbarProps = {
  username?: string;
};

enum NavbarLinks {
  "/home" = "Головна",
  "/movies" = "Фільми",
  "/favorites" = "Улюблені",
}

const Navbar: React.FC<NavbarProps> = ({ username }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (newPath: string) => {
    router.push(newPath);
  };

  return (
    <nav className="w-[1380px]  fixed z-40">
      {username ? (
        <div className="max-w-[1340px] h-[110px] px-4 md:px-16 py-0 flex flex-row items-center justify-between transition duration-500">
          <Image
            onClick={() => router.push("/home")}
            width={100}
            height={100}
            src="/images/logo.svg"
            alt="logo"
            className="h-40 w-auto cursor-pointer"
            priority={true}
          />
          <div className="flex flex-row gap-6 lg:flex">
            {Object.entries(NavbarLinks).map(([path, label]) => (
              <NavbarItem
                key={path}
                label={label}
                active={pathname === path}
                path={path}
                handleClick={handleNavClick}
              />
            ))}
          </div>
          <div className="flex flex-row ml-auto gap-7 items-center">
            <div className="flex gap-9">
              <select className="block border-zinc-500 border-[1px] rounded-[6px]  px-11 py-[7px]  text-lg text-white bg-neutral-900/80">
                <option value="">Українська</option>
                <option value="">English</option>
              </select>

              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className=" px-6 py-[7px]  flex flex-row items-center bg-red-600 text-white font-semibold rounded-[4px] hover:bg-blue-600 transition"
              >
                Вийти
              </button>
            </div>
            {/* <div>
              <Image
                width={100}
                height={100}
                src={`/images/trumpeter.jpg`}
                alt="avatar"
                className=" h-16 w-auto rounded-full "
              />
            </div> */}
          </div>
        </div>
      ) : (
        <div className=" h-[110px] max-w-[1340px] px-4 md:px-16 py-0 flex flex-row items-center justify-between transition duration-500">
          <Image
            width={100}
            height={100}
            src="/images/logo.svg"
            alt="logo"
            className="h-40 w-auto"
            priority={true}
          />

          <div className="flex gap-9">
            <select className="block border-zinc-500 border-[1px] rounded-[6px]  px-11 py-[7px]  text-lg text-white bg-neutral-900/80">
              <option value="">Українська</option>
              <option value="">English</option>
            </select>

            <button
              onClick={() => router.push("/auth")}
              className=" px-6 py-[7px]  flex flex-row items-center bg-red-600 text-white font-semibold rounded-[4px] hover:bg-blue-600 active:bg-red-600 transition"
            >
              Увійти
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
