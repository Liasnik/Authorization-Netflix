"use client";
import React from "react";

type NavbarItemProps = {
  label: string;
  active: boolean;
  path: string;
  handleClick: (newPath: string) => void;
};

const NavbarItem: React.FC<NavbarItemProps> = ({
  label,
  active,
  path,
  handleClick,
}) => {
  return (
    <div
      onClick={() => handleClick(path)}
      className={`font-bold ${
        active
          ? "text-white cursor-default border-b-2 pb-0.5"
          : " text-gray-100/80 hover:text-white cursor-pointer transition"
      }`}
    >
      {label}
    </div>
  );
};
export default NavbarItem;
