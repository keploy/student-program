import { Button } from "@/components/ui/button";

export default function JoinSection() {
  return (
    <section id="join" className="py-20 bg-gradient-to-r from-[#F5F5F5] via-[#E6E2D4] to-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="font-bold text-lg text-[#00163D] mb-4">
            Join Keploy API Community
          </h3>
          <h1 className="text-3xl md:text-4xl font-bold max-w-4xl mx-auto text-[#FF914D]">
            Meet students, mentors and educators around the world excited about
            APIs and technology
          </h1>
        </div>

        <div className="flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-[#FF914D] hover:bg-[#FF914D]/90 text-white rounded-full"
          >
            <a
              href="https://join.slack.com/t/keploy/shared_invite/zt-2poflru6f-_VAuvQfCBT8fDWv1WwSbkw"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Slack
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
