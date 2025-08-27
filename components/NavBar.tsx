import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

import {
  CONTACT_EMAIL,
  GITHUB_AVATAR_URL,
  GITHUB_PROFILE_URL,
  LINKEDIN_PROFILE_URL,
} from "@/lib/constants";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function NavBar() {
  return (
    <nav className="backdrop-blur-md w-full fixed top-0 side-padding left-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001444] z-20 h-14 flex justify-between items-center">
      {/* Avatar and name */}
      <div className="flex-[0.9_0.9_0%]">
        <Link
          className="flex gap-3 items-center w-fit"
          href={GITHUB_PROFILE_URL}
          target="_blank"
        >
          <Avatar>
            <AvatarImage src={GITHUB_AVATAR_URL} />
            <AvatarFallback>MM</AvatarFallback>
          </Avatar>
          <span className="font-medium text-gray-100 max-xs:hidden">
            Mateusz Muszarski
          </span>
        </Link>
      </div>

      {/* Page links */}
      <div className="flex items-center gap-16 flex-1 max-xl:hidden bg-black/40 px-4 rounded-full justify-between border border-solid border-black/20">
        <Link
          className="hover:tracking-wider focus-visible:tracking-wider transition-all px-4 py-2 min-w-[8ch]"
          href="#skills"
        >
          Skills
        </Link>
        <Link
          className="hover:tracking-wider focus-visible:tracking-wider transition-all px-4 py-2 min-w-[8ch]"
          href="#projects"
        >
          Projects
        </Link>
        <Link
          className="hover:tracking-wider focus-visible:tracking-wider transition-all px-4 py-2 min-w-[8ch]"
          href="#contact"
        >
          Contact
        </Link>
      </div>

      {/* Social media links */}
      <div className="flex items-center gap-6 flex-[0.9_0.9_0%] justify-end">
        <Link href={GITHUB_PROFILE_URL} target="_blank" tabIndex={-1}>
          <Github
            className="hover:fill-white focus-visible:fill-white"
            strokeWidth={1.5}
            tabIndex={0}
          />
        </Link>
        <Link href={LINKEDIN_PROFILE_URL} target="_blank" tabIndex={-1}>
          <Linkedin
            className="hover:fill-white focus-visible:fill-white"
            strokeWidth={1.5}
            tabIndex={0}
          />
        </Link>
        <Link href={`mailto:${CONTACT_EMAIL}`} target="_blank" tabIndex={-1}>
          <Mail
            className="hover:fill-white hover:stroke-black focus-visible:stroke-black focus-visible:fill-white"
            strokeWidth={1.5}
            tabIndex={0}
          />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
