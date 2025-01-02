import React from "react";
import NavLink from "./NavLink";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MenuOverlay = ({ links }: any) => {
  return (
    <ul className="flex flex-col w-full py-4 items-center bg-black">
      {links.map((link: { title: string  ; path: string; }) => (
        <li key={link.title}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
