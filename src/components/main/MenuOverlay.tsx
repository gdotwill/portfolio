import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }: any) => {
  return (
    <ul className="flex flex-col w-full py-4 items-center bg-black">
      {links.map((link) => (
        <li key={link.title}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
