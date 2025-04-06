import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
  link: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: "Sanskriti Gupta",
      role: "Web Development",
      image: "/images/testimonials/sanskriti.avif",
      quote:
        "Keploy community is surely one of the most amazing communities I have encountered yet, no cap 🧢! The mentor support was really good. I am really thankful to Nishant Mishra, Ankit Kumar, Animesh Pathak & Hardik (all our mentors and the keploy team) for your enriching Guidance. ✨✨",
      link: "https://sanskritigupta.hashnode.dev/my-keploy-fellowship-experience23#heading-how-i-got-to-know-about-this-opportunity-and-why-i-applied",
    },
    {
      name: "Sukriti Maurya",
      role: "Backend Developer and UX/UI Designer",
      image: "/images/testimonials/sukriti.avif",
      quote:
        "This fellowship was an amazing learning experience for me and I am grateful for this opportunity.",
      link: "https://sukritim.hashnode.dev/my-keploy-fellowship-experience#heading-6-api-testing-with-keploy",
    },
    {
      name: "Neel Shah",
      role: "Data Science Intern",
      image: "/images/testimonials/neel.jpg",
      quote:
        "The Keployio API Fellowship was an amazing learning experience. I now have a better understanding of the fundamentals of API development, as well as the latest trends and technologies. Throughout the program, we received mentorship from experienced API developers. They provided invaluable advice and tips for creating robust APIs that are secure and perform well.",
      link: "https://medium.com/@shahneel2409/keploy-fellowship-helped-me-a-lot-3674800d11b8",
    },
    {
      name: "Harsh Rastogi",
      role: "Student at CU",
      image: "/images/testimonials/harsh.avif",
      quote:
        "From this fellowship, my way of learning did take a new turn, as I got into reading the documents and applying them to my projects.",
      link: "https://keploy.hashnode.dev/my-keploy-api-fellowship-journey",
    },
    {
      name: "Arunima Chaudhuri",
      role: "Member & Contributor @Layer5",
      image: "/images/testimonials/arunima.avif",
      quote:
        "I got to know about this opportunity from LinkedIn. It has been a wonderful journey of learning about APIs so far. I am thankful to all my mentors for sharing their knowledge and insights with us during this program. 🤩",
      link: "https://arunima.hashnode.dev/my-keploy-api-fellowship-experience",
    },
  ];

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: windowWidth < 768 ? 1 : windowWidth < 1024 ? 2 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: windowWidth >= 768,
    centerMode: windowWidth < 768,
    centerPadding: windowWidth < 768 ? '40px' : '0',
    className: "testimonial-slider",
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-[#F5F5F5] to-[#E6E2D4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#00163D" }}>
            What do our previous fellows say?
          </h2>
          <div className="w-24 h-1 bg-[#FF914D] mx-auto rounded-full"></div>
        </div>

        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-3 py-2">
              <Card
                className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl border border-[#D9CD9C]/30 hover:border-[#FF914D]/50 bg-white/90 backdrop-blur"
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="mb-4 pb-4 border-b border-[#E6E2D4]">
                    <div className="flex items-center">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[#FF914D] p-0.5">
                        <div className="absolute inset-0 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            sizes="(max-width: 768px) 64px, 64px"
                            className="object-cover rounded-full"
                            style={{
                              borderRadius: '50%',
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-[#00163D]">{testimonial.name}</p>
                        <p className="text-sm text-[#5F3131]">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <p className="text-[#00163D]/80 italic relative">
                      {testimonial.quote}
                    </p>
                  </div>
                  
                  <a
                    href={testimonial.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-[#16704C] hover:text-[#FF914D] transition-colors font-medium text-sm"
                  >
                    Read full story →
                  </a>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
      
      <style jsx global>{`
        .testimonial-slider .slick-track {
          display: flex !important;
        }
        .testimonial-slider .slick-slide {
          height: inherit !important;
          display: flex !important;
        }
        .testimonial-slider .slick-slide > div {
          display: flex;
          width: 100%;
          height: 100%;
        }
        .testimonial-slider .slick-dots li button:before {
          color: #FF914D;
        }
        .testimonial-slider .slick-dots li.slick-active button:before {
          color: #00163D;
        }
        .testimonial-slider .slick-prev:before, 
        .testimonial-slider .slick-next:before {
          color: #FF914D;
        }
        /* Ensure images are always circular in all devices */
        .testimonial-slider img {
          border-radius: 50% !important;
        }
      `}</style>
    </section>
  );
}