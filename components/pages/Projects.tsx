import React from "react";
import { Sparkles } from "lucide-react";

import { PROJECTS_LIST } from "@/lib/constants";
import { fadeIn } from "@/lib/animations";
import { MotionDiv } from "@/components/utils/Motion";
import { Badge } from "@/components/ui";
import ProjectCard from "@/components/ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="w-full min-h-screen side-padding flex flex-col items-center justify-center gap-8 relative"
    >
      {/* Text */}
      <MotionDiv {...fadeIn(0.5)}>
        <Badge variant="outline">
          <Sparkles className="py-1 text-[#e59cffde]" /> Building is the best
          way to grow
        </Badge>
      </MotionDiv>
      <h1 className="head-title pb-6">Example Projects I&apos;ve built</h1>

      <div className="flex flex-col items-center justify-center gap-16">
        {PROJECTS_LIST.map((project, i) => (
          <ProjectCard key={i} index={i} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
