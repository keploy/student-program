import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import JoinCommunity from "@/components/JoinCommunity";
import SpaceDivider from "@/components/SpacingDivider";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <About />
        <JoinCommunity />
        <SpaceDivider height={"6rem"} />
        <Testimonial />
        <SpaceDivider height={"6rem"} />
      </main>
    </>
  );
}
