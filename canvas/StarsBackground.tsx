"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";

import { fadeIn } from "@/lib/animations";
import { MotionDiv } from "@/components/utils/Motion";

function StarsBackground() {
  const ref: any = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((_, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere as Float32Array}
        stride={3}
        frustumCulled
      >
        <PointMaterial
          transparent
          size={0.002}
          sizeAttenuation={true}
          dethWrite={false}
        />
      </Points>
    </group>
  );
}

function StarsCanvas() {
  return (
    <MotionDiv
      className="w-full h-full fixed inset-0 -z-20"
      {...fadeIn(0, 0.75)}
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarsBackground />
        </Suspense>
      </Canvas>
    </MotionDiv>
  );
}

export default StarsCanvas;
