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
  const socialLinks = [
    {
      title: "Slack",
      icon: (
        <SlackIcon
          fill="currentColor"
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: "https://join.slack.com/t/keploy/shared_invite/zt-2poflru6f-_VAuvQfCBT8fDWv1WwSbkw",
    },
    {
      title: "Twitter",
      icon: (
        <TwitterIcon
          fill="currentColor"
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: "https://twitter.com/Keployio",
    },
    {
      title: "GitHub",
      icon: (
        <GithubIcon
          fill="currentColor"
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: "https://github.com/keploy/keploy",
    },
    {
      title: "LinkedIn",
      icon: (
        <LinkedinIcon
          fill="currentColor"
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: "https://www.linkedin.com/company/keploy",
    },
    {
      title: "YouTube",
      icon: (
        <YoutubeIcon
          fill="currentColor"
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: "https://www.youtube.com/@keploy",
    },
  ];

  return (
    <div className="fixed md:left-10 left-1/2 md:transform-none transform -translate-x-1/2 bottom-6 z-50">
      <FloatingDock
        items={socialLinks}
        desktopClassName=""
        mobileClassName="!flex-row !items-center"
      />
    </div>
  );
}
