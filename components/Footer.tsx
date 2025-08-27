import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

import {
  CONTACT_EMAIL,
  GITHUB_PROFILE_URL,
  LINKEDIN_PROFILE_URL,
} from "@/lib/constants";
import { Button } from "@/components/ui";

function Footer() {
  return (
    <footer
      id="footer"
      className="w-full flex flex-col side-padding items-center justify-center gap-6 h-32 py-24 bg-black/35 relative z-10"
    >
      <div className="flex items-center gap-4">
        {/* Social media links */}
        <Link href={GITHUB_PROFILE_URL} target="_blank" tabIndex={-1}>
          <Button
            className="rounded-full p-2.5"
            variant="secondary"
            size="icon"
          >
            <Github strokeWidth={1.5} />
          </Button>
        </Link>
        <Link href={LINKEDIN_PROFILE_URL} target="_blank" tabIndex={-1}>
          <Button
            className="rounded-full p-2.5"
            variant="secondary"
            size="icon"
          >
            <Linkedin strokeWidth={1.5} />
          </Button>
        </Link>
        <Link href={`mailto:${CONTACT_EMAIL}`} target="_blank" tabIndex={-1}>
          <Button
            className="rounded-full p-2.5"
            variant="secondary"
            size="icon"
          >
            <Mail strokeWidth={1.5} />
          </Button>
        </Link>
      </div>

      {/* Page links */}
      <div className="flex items-center gap-8 text-center pb-10">
        <Link
          className="min-w-[8ch] hover:underline focus-visible:underline"
          href="#skills"
        >
          Skills
        </Link>
        <Link
          className="min-w-[8ch] hover:underline focus-visible:underline"
          href="#projects"
        >
          Projects
        </Link>
        <Link
          className="min-w-[8ch] hover:underline focus-visible:underline"
          href="#contact"
        >
          Contact
        </Link>
      </div>

      {/* Copyright */}
      <div className="bg-black absolute left-0 bottom-0 w-full py-3 side-padding text-center">
        <h6 className="text-sm text-gray-400">
          Copyright &copy;2024 | Inspired by{" "}
          <Link
            href="https://github.com/Mif2006/Space-Portolio"
            className="text-gray-500 hover:underline focus-visible:underline"
            target="_blank"
          >
            @Mif2006
          </Link>
        </h6>
      </div>
    </footer>
  );
}

export default Footer;
