import style from "./index.module.css";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <section id="hero" className={`${style.heroBg}`}>
        <div className=" responsive-container flex flex-col items-center justify-center px-[10px] md:px-[20px] py-[114px]">
          <p className="mt-24 w-full font-medium text-center text-base text-purple-950 text-balance my-3">
            Welcome to Keploy
          </p>
          <h1 className="py-1 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-center text-balance bg-gradient-to-l from-red-500 to-orange-500 bg-clip-text text-transparent ">
            Keploy API Fellowship
          </h1>

          <p className="w-full font-normal text-center text-xl text-balance my-6 text-slate-800/70 mt-4 leading-tight">
            Get into the world of APIs and API Testing with Keploy and help
            others grow with APIs
          </p>
          {/* <button className="bg-shadow-get-started mt-20 px-10 h-[48px] text-center cursor-pointer rounded-full text-white text-lg font-medium bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 transition-all duration-300 ease-in-out"> */}
          {/* <button className={`tracking-wider bg-shadow-get-started mt-24 px-10 h-[48px] text-center cursor-pointer rounded-full text-white text-lg font-[400] bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 transition-all duration-300 ease-in-out`}> */}
          <button
            className={`tracking-wider ${style.bgBhadowBtn} mt-24 px-10 h-[48px] text-center cursor-pointer rounded-full text-white text-lg font-[400] bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 transition-all duration-300 ease-in-out`}
          >
            <Link href={"https://keploy.io"}>GET STARTED</Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
