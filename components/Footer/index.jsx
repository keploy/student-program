import Link from "next/link";
import KeployLogo from "../KeployLogo";

const Footer = () => {
  return (
    <>
      <section id="footer">
        <div className="responsive-container flex flex-col items-center justify-center py-[114px]">
          <div className="w-full flex flex-col lg:flex-row justify-around items-start">
            <KeployLogo href={"https://keploy.io/"}/>
            <div className="w-full mt-10 flex items-baseline justify-evenly gap-4">
              {/* 1st col */}
              <ul className="flex flex-col items-start justify-between gap-4 text-[1rem] text-slate-800/70">
                <li className="text-black font-semibold">Developers</li>
                <li className="hover:text-black">
                  <Link href={"https://github.com/keploy/keploy"}>Github</Link>
                </li>
                <li className="hover:text-black">
                  <Link href={"https://keploy.io/docs/"}>Documentation</Link>
                </li>
                <li className="hover:text-black">
                  <Link href={"https://keploy.io/blog"}>Blogs</Link>
                </li>
              </ul>
              {/* 2nd col */}
              <ul className="flex flex-col items-start justify-between gap-4 text-[1rem] text-slate-800/70">
                <li className="text-black font-semibold">Company</li>
                <li className="hover:text-black">
                  <Link href={"https://keploy.io/about"}>About</Link>
                </li>
                <li className="hover:text-black">
                  <Link href={"https://keploy.io/docs/privacy-policy/t"}>
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className="w-[calc(100%-20px)] my-16 mx-auto border-t-1 border-gray-300"></hr>
          <p className="mr-auto text-[1rem] text-slate-800/70">© Keploy Inc</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
