import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { 
  IconBrandGithub, 
  IconBrandX, 
  IconBrandYoutube, 
  IconBrandLinkedin, 
  IconBrandSlack 
} from "@tabler/icons-react";

export default function SocialDock() {
  const socialLinks = [
    {
      title: "Slack",
      icon: (
        <IconBrandSlack className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://join.slack.com/t/keploy/shared_invite/zt-2poflru6f-_VAuvQfCBT8fDWv1WwSbkw",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://twitter.com/Keployio",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/keploy/keploy",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/company/keploy",
    },
    {
      title: "YouTube",
      icon: (
        <IconBrandYoutube className="h-full w-full text-neutral-500 dark:text-neutral-300" />
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
