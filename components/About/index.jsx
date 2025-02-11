import AboutInfoCard from "./AboutInfoCard";
import aboutData from "../../utils/about-data";
import LearnLogo from "./LearnLogo";
import GrowLogo from "./GrowLogo";
import TeachLogo from "./TeachLogo";
const About = () => {
  return (
    <>
      <section id="about">
        <div className=" responsive-container flex flex-col items-center justify-center py-[114px]">
          <h1 className=" mb-16 w-full py-1 leading-tight text-center text-balance bg-gradient-to-l from-indigo-900/95 to-purple-950/95 bg-clip-text text-transparent text-3xl font-semibold md:text-4xl">
            What's in it for you ?
          </h1>
          <div className="w-full flex flex-col lg:flex-row justify-around items-center lg:items-baseline">
            <AboutInfoCard
              heading={aboutData[0].heading}
              description={aboutData[0].description}
            >
              <LearnLogo />
            </AboutInfoCard>

            <AboutInfoCard
              heading={aboutData[1].heading}
              description={aboutData[1].description}
            >
              <TeachLogo />
            </AboutInfoCard>
            <AboutInfoCard
              heading={aboutData[2].heading}
              description={aboutData[2].description}
            >
              <GrowLogo />
            </AboutInfoCard>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
