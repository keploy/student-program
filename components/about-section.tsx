import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function AboutSection() {
  const benefits = [
    {
      title: "Learn",
      description:
        "Get one-on-one training about APIs and Keploy by the Keploy team.",
      perks: "Perks: 🎁 Exclusive swag kit by Keploy",
      image: "/images/code1.gif",
    },
    {
      title: "Teach",
      description:
        "Take sessions in your college or community and spread awareness about the world of APIs and Keploy.",
      perks: "Perks: 🖼 Recognition on our Website",
      image: "/images/code2.gif",
    },
    {
      title: "Grow",
      description:
        "The Keploy team will help you in creating your own community in your college if you wish to.",
      perks: "Perks: 🌟 Mentorship on how to build and grow a community",
      image: "/images/code3.gif",
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#00163D]">
            What's in it for you?
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 relative">
                    <Image
                      src={benefit.image || "/placeholder.svg"}
                      alt={benefit.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-[#00163D]">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-center">
                  {benefit.description}
                </p>
                <p className="text-[#FF914D] font-medium text-center">
                  {benefit.perks}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
