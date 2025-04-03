"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";
import NavItem from "./navItem";
import { StarIcon, MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { useDarkMode } from "@/components/utils/DarkModeContext";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);
  const [starsCount, setStarsCount] = useState<number>(1000);
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const fetchStarsCount = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/keploy/keploy"
        );
        if (response.ok) {
          const data = await response.json();
          let stars = data.stargazers_count;
          setStarsCount(stars);
        } else {
          console.error("Failed to fetch stars count", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching stars count:", error);
      }
    };
    fetchStarsCount();
  }, []);

  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const formatStars = (count: number): string => {
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + "k";
    }
    return count.toString();
  };

  return (
    <header
      className={`fixed w-full z-30 transition duration-300 ease-in-out ${!top ? "backdrop-blur-sm shadow-lg" : ""
        } ${darkMode ? "bg-gray-900 text-white" : "bg-neutral-100 text-gray-600"}`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0 mr-4 flex-grow-0 w-2/12 mt-[-15px] ">
            <Logo />
          </div>
          <nav className="hidden md:flex justify-start flex-grow-0 w-6/12 ">
            <ul className="flex grow">
              <li>
                <Link
                  href="/"
                  className="font-medium text-gray-600 hover:text-primary-300 px-3 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  <NavItem name="Home" />
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="font-medium text-gray-600 hover:text-primary-300 px-3 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  <NavItem name="About" />
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="font-medium text-gray-600 hover:text-primary-300 px-3 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  <NavItem name="Join" />
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="font-medium text-gray-600 hover:text-primary-300 px-3 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  <NavItem name="Testimonials" />
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header-btn-container flex-grow-0 w-4/12 justify-end hidden sm:flex items-center">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full mr-3 ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-black'
                } hover:bg-opacity-80 transition-colors`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
            <button className="w-full mr-3 p-1 overflow-hidden border-2 hover:bg-primary-200/20 border-primary-50/0 hover:border-2 hover:border-orange-400 hover:text-primary-300 px-3 border-opacity-0 rounded-full lg:w-auto sm:border-opacity-100 relative group/button">
              <span className="absolute left-0 -mt-12 h-32 w-12 -translate-x-36 rotate-12 bg-orange-500 opacity-10 transition-transform duration-700 ease-out group-hover/button:-translate-x-[-400%]" />
              <Link
                className="flex gap-2 items-center ml-4 text-sm font-extrabold transition-colors lg:ml-0"
                href="https://github.com/keploy/keploy"
              >
                <svg
                  className={`h-5 w-5 ${darkMode ? 'text-gray-200' : 'text-black'}`}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Github Logo</title>
                  <path
                    d="M8 .2C3.6.2 0 3.8 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V14c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
                <span className="flex gap-1 text-base">
                  {/* <StarIcon className="size-5 text-yellow-300 transition-all duration-300 group-hover:filter group-hover:drop-shadow-[0_0_2px_#FFD700]" /> */}
                  <p className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-black'}`}>{formatStars(starsCount)}</p>
                </span>
              </Link>
            </button>
            <Link
              href="https://app.keploy.io/signin"
              className="gap-2 text-sm font-medium bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out text-white px-7 py-2.5 flex items-center justify-center"
            >
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
