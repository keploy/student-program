import Content from "@/components/content";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Join from "@/components/Join";
import NewsletterSignup from "@/components/Newsletter";
import Testimonial from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="bg-neutral-100">
      <Header /> 
      <Hero />
      <Content />
      <Join />
      <Testimonial />
      <NewsletterSignup />
    </div>
  );
}
