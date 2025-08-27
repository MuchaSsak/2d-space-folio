"use client";

import React from "react";
import { ReactSVG } from "react-svg";

type SVGProps = {
  src: string;
  className?: string;
};

// The purpose of this component is to avoid having to "use client" when using <ReactSVG />
function SVG({ src, ...props }: SVGProps) {
  return <ReactSVG src={src} {...props} />;
}

export default SVG;
