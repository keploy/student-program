import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

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

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#412074]">
            What do our previous fellows say?
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow border border-gray-100"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <a
                  href={testimonial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-[#FF6B35] transition-colors"
                >
                  <p className="text-muted-foreground line-clamp-4">
                    {testimonial.quote}
                  </p>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
