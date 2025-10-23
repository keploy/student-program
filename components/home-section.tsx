"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function HomeSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-b from-[#F5F5F5] to-[#E6E2D4]">
      {/* Decorative background elements - larger and more blurred */}
      <div
        className="decorative-circle w-[600px] h-[600px] bg-[#FF914D]/20 top-[-200px] right-[-200px]"
        style={{ animation: "slow-drift 45s ease-in-out infinite" }}
      ></div>
      <div
        className="decorative-circle w-[700px] h-[700px] bg-[#16704C]/15 bottom-[10%] left-[-300px]"
        style={{ animation: "slow-drift-alt 60s ease-in-out infinite" }}
      ></div>
      <div
        className="decorative-circle w-[500px] h-[500px] bg-[#5F3131]/10 top-[40%] right-[-100px]"
        style={{ animation: "slow-drift 50s ease-in-out infinite 10s" }}
      ></div>
      <div
        className="decorative-circle w-[400px] h-[400px] bg-[#00163D]/10 top-[20%] left-[-100px]"
        style={{ animation: "slow-drift-alt 55s ease-in-out infinite 5s" }}
      ></div>

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4"
      >
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className={`fade-in ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: "0.2s" }}
            >
              <h3 className="inline-block font-bold text-lg md:text-xl text-[#00163D] mb-4 px-4 py-1 bg-white/50 rounded-full shadow-sm">
                Welcome to Keploy
              </h3>
            </div>

            <div
              className={`fade-in ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: "0.4s" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 animated-gradient-text">
                Keploy API Fellowship
              </h1>
            </div>

            <div
              className={`fade-in ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: "0.6s" }}
            >
              <h4 className="text-base md:text-lg text-gray-700 mb-10">
                Designed to help you master open-source contributions, Git,
                GitHub, API development, Google Summer of Code (GSoC), how to
                make and integrate apps with APIs, and how to test them. This
                program is your gateway to excelling in the world of APIs and
                software engineering.
              </h4>
            </div>

            <div
              className={`fade-in ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: "0.8s" }}
            >
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                <div className="w-[200px] mx-auto sm:w-auto">
                  <Button
                    asChild
                    className="animated-gradient-button text-white rounded-full border-none hover:shadow-lg px-6 py-4 text-base flex items-center justify-center"
                  >
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSc5132o6GBa1PLZOVRK3ZxEwUE8DGJivguHoREwOprg0AMDzg/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Started
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div
              className={`home-content__scroll fade-in ${
                isVisible ? "visible" : ""
              }`}
              style={{ transitionDelay: "1s" }}
            >
              <a
                href="#about"
                className="group smoothscroll flex flex-col items-center text-muted-foreground hover:text-[#FF914D] transition-colors"
              >
                <span className="mb-2 font-medium">Learn More</span>
                <div className="bg-transparent">
                  <ChevronDown className="animate-bounce" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
