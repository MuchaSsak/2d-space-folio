import React from "react";
import { Sparkles } from "lucide-react";

import { SKILLS_LIST } from "@/lib/constants";
import { fadeIn, slideInFromBottom } from "@/lib/animations";
import {
  Badge,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";
import { MotionDiv } from "@/components/utils/Motion";
import SVG from "@/components/utils/SVG";

function Skills() {
  return (
    <section
      id="skills"
      className="w-full min-h-screen side-padding flex flex-col items-center justify-center gap-4 relative text-center"
    >
      {/* Text */}
      <MotionDiv {...fadeIn(0.5)}>
        <Badge variant="outline">
          <Sparkles className="py-1 text-[#e59cffde]" /> Always learning new
          things
        </Badge>
      </MotionDiv>
      <h1 className="head-title pt-4">Making apps with robust technologies</h1>
      <p className="text-gray-400 max-w-md">
        These are my major technology decisions to make my applications
        performant, flexible, scalable and generally provide good UX and DX.
      </p>

      {/* Logos */}
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {SKILLS_LIST.map((skill, i) => (
          <TooltipProvider key={skill.path} delayDuration={100}>
            <Tooltip>
              <TooltipTrigger className="cursor-default">
                <MotionDiv {...slideInFromBottom(i / 10)}>
                  <SVG
                    className="w-28 h-28 relative [&_svg]:absolute [&_svg]:h-20 [&_svg]:w-20 [&_svg]:left-1/2 [&_svg]:top-1/2 [&_svg]:-translate-x-1/2 [&_svg]:-translate-y-1/2 hover:-translate-y-4 transition-transform duration-300"
                    src={skill.path}
                  />
                </MotionDiv>
              </TooltipTrigger>
              <TooltipContent sideOffset={8}>
                <p>{skill.skillName}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>

      {/* Background video */}
      <video
        className="w-full h-full absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 opacity-50 object-cover"
        autoPlay
        playsInline
        loop
        muted
      >
        <source src="/static/video/wormhole.webm" />
      </video>
    </section>
  );
}

export default Skills;
