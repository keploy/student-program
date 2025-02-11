import style from "./index.module.css";
import Link from "next/link";

const JoinCommunity = () => {
  return (
    <>
      <section id="joincommunity" className={`${style.joinHeaderBg}`}>
        <div className=" responsive-container flex flex-col items-center justify-center px-[10px] md:px-[20px] py-[114px]">
          {/* <div className=" bg-gradient-to-l from-red-500 to-orange-500 responsive-container flex flex-col items-center justify-center px-[10px] md:px-[20px] py-[114px]"> */}
          <p className=" mb-16 w-full font-medium text-center text-xl md:2xl lg:text-3xl text-[#333] text-balance my-3">
            Join Keploy API Community
          </p>
          {/* <h1 className="py-1 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-center text-balance join-header-shine-text text-white"> */}
          <h1
            className={`py-1 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-center text-balance join-header-shine-text ${style.joinHeaderShineText}`}
          >
            Meet students, mentors and educators around the world excited about
            APIs and technology
          </h1>

          <button className="flex items-center gap-3 tracking-wider bg-shadow-get-started mt-20 px-10 h-[48px] text-center cursor-pointer rounded-full text-lg font-[400] bg-white text-black">
            <span className="[&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                <path d="M94.1 315.1c0 25.9-21.2 47.1-47.1 47.1S0 341 0 315.1c0-25.9 21.2-47.1 47.1-47.1h47.1v47.1zm23.7 0c0-25.9 21.2-47.1 47.1-47.1s47.1 21.2 47.1 47.1v117.8c0 25.9-21.2 47.1-47.1 47.1s-47.1-21.2-47.1-47.1V315.1zm47.1-189c-25.9 0-47.1-21.2-47.1-47.1S139 32 164.9 32s47.1 21.2 47.1 47.1v47.1H164.9zm0 23.7c25.9 0 47.1 21.2 47.1 47.1s-21.2 47.1-47.1 47.1H47.1C21.2 244 0 222.8 0 196.9s21.2-47.1 47.1-47.1H164.9zm189 47.1c0-25.9 21.2-47.1 47.1-47.1 25.9 0 47.1 21.2 47.1 47.1s-21.2 47.1-47.1 47.1h-47.1V196.9zm-23.7 0c0 25.9-21.2 47.1-47.1 47.1-25.9 0-47.1-21.2-47.1-47.1V79.1c0-25.9 21.2-47.1 47.1-47.1 25.9 0 47.1 21.2 47.1 47.1V196.9zM283.1 385.9c25.9 0 47.1 21.2 47.1 47.1 0 25.9-21.2 47.1-47.1 47.1-25.9 0-47.1-21.2-47.1-47.1v-47.1h47.1zm0-23.7c-25.9 0-47.1-21.2-47.1-47.1 0-25.9 21.2-47.1 47.1-47.1h117.8c25.9 0 47.1 21.2 47.1 47.1 0 25.9-21.2 47.1-47.1 47.1H283.1z" />
              </svg>
            </span>
            <Link
              href={
                "https://join.slack.com/t/keploy/shared_invite/zt-12rfbvc01-o54cOG0X1G6eVJTuI_orSA"
              }
            >
              Join Slack
            </Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default JoinCommunity;
