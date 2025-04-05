import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Benefit {
  title: string;
  description: string;
  perks: string;
  image: string;
}

export default function AboutSection() {
  const benefits: Benefit[] = [
    {
      title: "Learn",
      description:
        "Get one-on-one training about APIs and Keploy by the Keploy team. Learn how to build fully functional CRUD apps with best practices",
      perks: "Perks: 🎁 Exclusive swag kit by Keploy",
      image: "/images/code1.gif",
    },
    {
      title: "Teach",
      description:
        "Take sessions in your college or community and spread awareness about the world of APIs and Keploy.",
      perks: "Perks: 🔊 Recognition on our Website",
      image: "/images/code2.gif",
    },
    {
      title: "Grow",
      description:
        "The Keploy team will help you in creating your own community in your college if you wish to.",
      perks: "Perks: 🌟 Mentorship on building and growing a community",
      image: "/images/code3.gif",
    },
  ];

  const scrollContainerRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [slideHeight, setSlideHeight] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth > 0) {
      const timer = setTimeout(() => {
        const cardElements = document.querySelectorAll('.benefit-card');
        if (cardElements.length > 0) {
          const heights = Array.from(cardElements).map(el => (el as HTMLElement).offsetHeight);
          const maxHeight = Math.max(...heights);
          setSlideHeight(maxHeight);
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [windowWidth, benefits]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const renderCard = (benefit: Benefit, index: number) => (
    <div
      key={index}
      className="group relative flex-none w-full snap-center px-4 md:px-0 md:w-auto"
    >
      <Card
        className="benefit-card border-none rounded-xl overflow-hidden transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl"
        style={{
          background: "linear-gradient(135deg, #FFF 0%, #F5F5F5 100%)",
          boxShadow: "0 10px 30px -10px rgba(0, 22, 61, 0.15)",
          display: "flex",
          flexDirection: "column",
          height: slideHeight > 0 ? `${slideHeight}px` : 'auto', // Apply consistent height
        }}
      >
        <CardContent className="p-8 flex flex-col items-center flex-grow">
          <div className="flex justify-center mb-6 relative">
            <div
              className="w-24 h-24 relative rounded-lg overflow-hidden 
                        before:absolute before:inset-0 before:border-2 before:border-[#FF914D] before:rounded-lg before:z-20
                        before:opacity-0 group-hover:before:opacity-100 before:transition-all before:duration-300"
            >
              <Image
                src={benefit.image || "/placeholder.svg"}
                alt={benefit.title}
                fill
                sizes="(max-width: 768px) 100px, 150px"
                className="object-contain z-10 relative p-2"
                unoptimized={true}
              />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-center mb-4 text-[#00163D] w-full">
            <span className="relative inline-block z-10">
              {benefit.title}
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FF914D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </span>
          </h3>
          <p className="text-gray-600 mb-6 text-center flex-grow w-full">
            {benefit.description}
          </p>
          <div className="bg-[#F5F5F5] rounded-lg p-3 border-l-4 border-[#FF914D] w-full min-h-[60px] flex items-center justify-center">
            <p className="text-[#5F3131] font-medium text-center">
              {benefit.perks}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F5] via-[#F5F5F5] to-[#E6E2D4] opacity-80"></div>

      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF914D] opacity-10 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00163D] opacity-5 rounded-full -ml-48 -mb-48"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#00163D] relative z-10">
              What&apos;s in it for <span className="text-[#FF914D]">you?</span>
            </h1>
            <div className="absolute -bottom-3 left-0 right-0 h-3 bg-[#D9CD9C] opacity-70 z-0 transform -rotate-1"></div>
          </div>
          <p className="max-w-2xl mx-auto text-[#5F3131] mt-6">
            Join the Keploy community to enhance your skills, share knowledge,
            and build connections
          </p>
        </div>

        {windowWidth < 768 ? (
          <div className="mobile-slider-container">
            <Slider {...sliderSettings}>
              {benefits.map((benefit, index) => renderCard(benefit, index))}
            </Slider>
          </div>
        ) : (
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto md:grid md:grid-cols-3 md:gap-8 lg:gap-12 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {benefits.map((benefit, index) => renderCard(benefit, index))}
          </div>
        )}
      </div>
    </section>
  );
}