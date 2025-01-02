'use client'
import { navLinks } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import MenuOverlay from "./MenuOverlay";
import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="w-full h-[65px] fixed bg-black top-0 shadow-lg md:shadow-[#2A0E61]/50 md:bg-[#03001417] md:backdrop-blur-md z-50 px-10">
      <div className="flex container z-50 flex-wrap items-center justify-between mx-auto py-2">
        <a
          href="#about"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold md:block text-gray-300">
            Quantum Digitals
          </span>
        </a>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <GiHamburgerMenu className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <MdOutlineClose className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu w-[900px] h-full  flex-row items-center justify-between md:mr-20 menu hidden md:block md:w-auto" id="navbar">
          <div className="items-center justify-between w-full h-auto  mr-[15px]   text-gray-200 flex p-10 md:p-3 md:flex-row md:space-x-10 mt-0">
            {navLinks.map((link)=> (
                <a key={link.title} href={link.path} className="cursor-pointer">
                  {link.title}
                </a>
              ))
            }
          </div>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>











    // <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
    //   <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
    //     <a
    //       href="#about-me"
    //       className="h-auto w-auto flex flex-row items-center"
    //     >
    //       <Image
    //         src="/NavLogo.png"
    //         alt="logo"
    //         width={50}
    //         height={50}
    //         className="cursor-pointer hover:animate-slowspin"
    //       />

    //       <span className="font-bold hidden md:block text-gray-300">
    //         Quantum Digitals
    //       </span>
    //     </a>

    //     <div className="mobile-menu block md:hidden bg-red">
    //       {!navbarOpen ? (
    //         <button
    //           onClick={() => setNavbarOpen(true)}
    //           className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
    //         >
    //           <GiHamburgerMenu className="h-5 w-5" />
    //         </button>
    //       ) : (
    //         <div className=" bg-red">
    //             <button
    //               onClick={() => setNavbarOpen(false)}
    //               className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
    //             >
    //               <MdOutlineClose className="h-5 w-5" />
    //             </button>
    //             <div flex flex-col py-4 items-center bg-black>
    //               {navLinks.map((link)=> (
    //                 <a key={link.title}href={link.path} className="cursor-pointer">
    //                     {link.title}
    //                   </a>
    //                 ))
    //               }
    //             </div>
      
    //         </div>
        
    //       )}
    //     </div>

    //     <div className="menu hidden md:block md:w-auto w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
    //       <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
    //         {navLinks.map((link)=> (
    //           <a key={link.title}href={link.path} className="cursor-pointer">
    //               {link.title}
    //             </a>
    //           ))
    //         }
    //       </div>
    //     </div>

    //     {/* {navbarOpen ? <MenuOverlay links={navLinks} /> : null} */}

    //     <div className="flex flex-row gap-5">
    //       {/* {Socials.map((social) => (
    //         <Image
    //           src={social.src}
    //           alt={social.name}
    //           key={social.name}
    //           width={24}
    //           height={24}
    //         />
    //       ))} */}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;