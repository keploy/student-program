"use client";

import { useEffect, useState } from "react";
import Header from "@/components/header";
import HomeSection from "@/components/home-section";
import AboutSection from "@/components/about-section";
import JoinSection from "@/components/join-section";
import TestimonialsSection from "@/components/testimonials-section";
import NewsletterSection from "@/components/newsletter-section";
import Footer from "@/components/footer";
import SocialDock from "@/components/social-dock";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Initialize smooth scrolling
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains("smoothscroll")) {
        e.preventDefault();
        const href = target.getAttribute("href");
        if (href && href.startsWith("#")) {
          const section = document.querySelector(href);
          if (section) {
            window.scrollTo({
              top: section.getBoundingClientRect().top + window.scrollY,
              behavior: "smooth",
            });
          }
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <HomeSection />
        <AboutSection />
        <JoinSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
      <SocialDock />
    </div>
  );
}
