import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

import {
  fadeIn,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/animations";
import {
  MotionDiv,
  MotionH1,
  MotionP,
  MotionVideo,
} from "@/components/utils/Motion";
import { Badge, Button } from "@/components/ui";
import SVG from "@/components/utils/SVG";

function Hero() {
  return (
    <section
      id="hero"
      className="w-full min-h-screen flex side-padding items-center justify-center relative"
    >
      {/* Black hole video */}
      <MotionVideo
        className="absolute left-0 -top-[45%] -z-10 rotate-180 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        {...fadeIn(0)}
      >
        <source src="/static/video/blackhole.webm" type="video/webm" />
      </MotionVideo>

      {/* Left side */}
      <div className="flex flex-col flex-1 items-start gap-5">
        <MotionDiv {...slideInFromTop(0.6)}>
          <Badge variant="outline" className="mb-2">
            <Sparkles className="py-1 text-[#e59cffde]" /> Fullstack developer
            portfolio
          </Badge>
        </MotionDiv>

        <MotionH1 className="text-6xl" {...slideInFromLeft(0.5)}>
          Hi, <span className="text-gradient font-bold">I&apos;m Matthew.</span>
        </MotionH1>

        <MotionP className="text-gray-400 max-w-md" {...slideInFromLeft(0.75)}>
          I&apos;m a full stack web developer specializing in React and Next.js.
          I love coding, IT, helping others and swimming! 🙂
        </MotionP>

        <MotionDiv {...slideInFromLeft(1)}>
          <Link href="#skills" tabIndex={-1}>
            <Button>Learn more!</Button>
          </Link>
        </MotionDiv>
      </div>

      {/* Right side */}
      <MotionDiv className="flex-1 max-xl:hidden" {...slideInFromRight(0.75)}>
        <SVG src="/static/images/heroIcons.svg" />
      </MotionDiv>
    </section>
  );
}

export default Hero;
