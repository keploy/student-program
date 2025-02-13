"use client";
import Link from "next/link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useEffect, useState } from "react";
import ModalVideo from "./modal-video";
import { useDarkMode } from "@/components/utils/DarkModeContext"; // Import the dark mode context

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const { darkMode } = useDarkMode(); // Access the dark mode state

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1038);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={`relative ${darkMode ? "bg-neutral-900" : "bg-neutral-100"}`}>
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      ></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20 gap-16">
          <div className="text-center pb-12 md:pb-16">
            <p
              className={`text-xl sm:text-2xl ${darkMode ? "text-gray-300" : "text-accent-200"} mb-4 leading-snug sm:leading-normal my-4`}
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              Welcome to Keploy
            </p>
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent ${darkMode ? "bg-gradient-to-r from-gradient-500 to-gradient-200" : "bg-gradient-to-r from-gradient-500 to-gradient-200"} text-primary-400 font-extrabold leading-tight sm:leading-tight md:leading-tighter tracking-tighter mb-4 md:mt-4 lg:mt-5`}
              data-aos="zoom-y-out"
            >
              Keploy
              <br />
              <span className="bg-clip-text bg-gradient-to-r from-gradient-500 to-gradient-200">
                API Fellowship
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className={`text-lg sm:text-xl text-center ${darkMode ? "text-gray-300" : "text-accent-200"} mb-8 leading-snug sm:leading-normal lg:text-center`}
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Get into the world of <b>APIs and API Testing</b> with Keploy and help others grow with APIs
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:space-x-4 lg:space-x-4"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div className={`border ${darkMode ? "border-gray-600 bg-gray-800" : "border-primary-400 bg-primary-300"} rounded-full overflow-hidden p-2.5 border-opacity-40 relative transition-all group`}>
                  <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-gray-100 opacity-60 transition-transform duration-1000 ease-out group-hover:translate-x-[-1000%]" />
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdj9q7dyRh3D7ZzRExHLWRRkNPOnLnFfrbKqSwqH3Ur4HzP4g/viewform"
                    target="_blank"
                    className="btn-sm py-3 text-gray-200 rounded-md overflow-hidden p-2.5 border-opacity-40 relative transition-all group"
                    rel="noopener noreferrer"
                  >
                    <span>Join Cloud Waiting List</span>
                    <OpenInNewIcon className="transition-all duration-500 ease-out group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <ModalVideo
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Keploy Demo video"
            video="https://www.youtube.com/embed/gvWvpqWM48s"
            videoWidth={768}
            videoHeight={432}
          />
        </div>
      </div>
    </section>
  );
}
