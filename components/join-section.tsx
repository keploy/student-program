import { Button } from "@/components/ui/button";

export default function JoinSection() {
  return (
    <section id="join" className="py-20 bg-[#FF6B35]/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-lg text-[#412074] mb-4">
            Join Keploy API Community
          </h3>
          <h1 className="text-3xl md:text-4xl font-bold max-w-4xl mx-auto text-[#FF6B35]">
            Meet students, mentors and educators around the world excited about
            APIs and technology
          </h1>
        </div>

        <div className="flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white rounded-full"
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
