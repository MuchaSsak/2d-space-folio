import React from "react";
import { Sparkles } from "lucide-react";

import { fadeIn } from "@/lib/animations";
import { CONTACT_EMAIL } from "@/lib/constants";
import ContactIcon from "@/components/ContactIcon";
import ContactForm from "@/components/ContactForm";
import { MotionDiv } from "@/components/utils/Motion";
import { Badge } from "@/components/ui";

function Contact() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen flex flex-col side-padding items-center justify-center relative pt-24"
    >
      <MotionDiv {...fadeIn(0.5)}>
        <Badge variant="outline">
          <Sparkles className="py-1 text-[#e59cffde]" />
          {CONTACT_EMAIL}
        </Badge>
      </MotionDiv>
      <h1 className="head-title pt-6">Contact me via mail</h1>

      <ContactIcon />
      <ContactForm />
    </section>
  );
}

export default Contact;
