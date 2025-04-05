import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  GithubIcon,
  TwitterIcon,
  YoutubeIcon,
  LinkedinIcon,
  SlackIcon,
} from "lucide-react";

export default function SocialDock() {
  // Using the same colors as in the NewsletterSection
  // Primary color: #FF7F50 (coral)
  // Hover color: #E67348 (darker coral)
  const socialLinks = [
    {
      title: "Slack",
      icon: (
        <SlackIcon
          className="h-full w-full text-[#FF7F50] hover:text-[#E67348]"
        />
      ),
      href: "https://join.slack.com/t/keploy/shared_invite/zt-2poflru6f-_VAuvQfCBT8fDWv1WwSbkw",
    },
    {
      title: "Twitter",
      icon: (
        <TwitterIcon
          className="h-full w-full text-[#FF7F50] hover:text-[#E67348]"
        />
      ),
      href: "https://twitter.com/Keployio",
    },
    {
      title: "GitHub",
      icon: (
        <GithubIcon
          className="h-full w-full text-[#FF7F50] hover:text-[#E67348]"
        />
      ),
      href: "https://github.com/keploy/keploy",
    },
    {
      title: "LinkedIn",
      icon: (
        <LinkedinIcon
          className="h-full w-full text-[#FF7F50] hover:text-[#E67348]"
        />
      ),
      href: "https://www.linkedin.com/company/keploy",
    },
    {
      title: "YouTube",
      icon: (
        <YoutubeIcon
          className="h-full w-full text-[#FF7F50] hover:text-[#E67348]"
        />
      ),
      href: "https://www.youtube.com/@keploy",
    },
  ];

  return (
    <div className="fixed md:left-10 left-1/2 md:transform-none transform -translate-x-1/2 bottom-6 z-50">
      <FloatingDock
        items={socialLinks}
        desktopClassName="bg-white/70 backdrop-blur-sm border border-[#FF9F6B]/30 p-2 rounded-full"
        mobileClassName="!flex-row !items-center bg-white/70 backdrop-blur-sm border border-[#FF9F6B]/30 p-2 rounded-full"
      />
    </div>
  );
}