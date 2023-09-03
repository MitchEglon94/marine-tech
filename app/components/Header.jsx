"use client";

import React, { useState, Fragment, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cta, MobileMenu } from ".";
// import useDetectScroll from "@smakss/react-scroll-direction";
import { useMenuContext } from "../context/menu.context";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  BookmarkSquareIcon,
  CalendarDaysIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";
import { set } from "react-hook-form";

const Header = () => {
  const { menu, setMenu } = useMenuContext();
  const [top, setTop] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setTop(window.scrollY);
    });
  }, []);

  return (
    <div
      className={`flex justify-center  fixed top-0 z-10 w-full  ${
        top < 500 ? "bg-none" : "bg-yellow-400"
      }`}
    >
      <div
        className={`flex items-center justify-between p-4 md:p-6 md:px-8   w-full lg:w-3/4 
      `}
      >
        <Image src={`logo-white.svg`} alt={""} width={100} height={100} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6 md:hidden"
          onClick={() => setMenu(!menu)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        {/* <Image
          src={"/right-align.png"}
          alt={""}
          width={20}
          height={20}
          className="md:hidden"
          onClick={() => setMenu(!menu)}
        /> */}

        <div
          className={`${
            menu ? "flex " : "hidden"
          } w-screen border-slate-200 h-screen absolute top-0 left-0 z-10 bg-white opacity-100 transistion-opacity ease-in duration-1000 hover:opacity-100`}
        >
          <MobileMenu />
        </div>

        <div
          className={`hidden md:flex uppercase gap-6 items-center text-white `}
        >
          <Link href={"#"}>Services</Link>
          <Link href={"#"}>Products</Link>

          <Cta text={"contact"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
