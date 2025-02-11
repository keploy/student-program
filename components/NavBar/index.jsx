"use client";

import KeployLogo from "@/components/KeployLogo";
import { useEffect, useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [BottomLine, setBottomLine] = useState(true);

  const scrollHandler = () => {
    // pageYOffset is deprecated, so I have added new one and included previous so that old browser supports it too.
    // window.pageYOffset > 10 ? setBottomLine(false) : setBottomLine(true);
    const scrollPosition = window.scrollY || window.pageYOffset;
    scrollPosition > 10 ? setBottomLine(false) : setBottomLine(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [BottomLine]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-[99] ${
          !BottomLine ? "bg-white border-b border-slate-200" : ""
        }`}
      >
        <section className="responsive-container flex h-14 sm:h-16 items-center justify-between py-2 px-[24px]">
          <KeployLogo />
          <div className="flex items-center justify-between gap-4">
            {/* <ul className="hidden md:flex md:items-center md:justify-between md:gap-4 md:p-2 text-[14px] font-medium"> */}
            <ul className="flex items-center justify-between gap-4 text-[14px] font-medium text-slate-800/70">
              <li className="hover:text-black">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="hover:text-black">
                <Link href={"#about"}>About</Link>
              </li>
              <li>
                <button className="w-[68px] h-[36px] text-center cursor-pointer rounded-full text-white text-[14px] font-medium bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 transition-all duration-300 ease-in-out">
                  <Link href={"#joincommunity"}>Join</Link>
                </button>
              </li>
            </ul>
          </div>
        </section>
      </header>
    </>
  );
};

export default NavBar;
