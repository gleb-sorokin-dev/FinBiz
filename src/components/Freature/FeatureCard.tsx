import { motion, useMotionValue, frame } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import React from "react";

import * as variants from "../../lib/motionVariants";

type FeatureCardProps = {
  classes?: string;
  children: React.ReactNode;
};

export default function FeatureCard({ classes, children }: FeatureCardProps) {
  const glowRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [showGlow, setShowGlow] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const rect = cardRef.current?.getBoundingClientRect();

      frame.read(() => {
        x.set(event.pageX - (rect?.left ?? 0) - window.scrollX);
        y.set(event.pageY - (rect?.top ?? 0) - window.scrollY);
      });
    },
    [x, y]
  );

  return (
    <motion.div
      variants={variants.staggerContainer}
      initial="start"
      whileInView="end"
      viewport={{ once: true }}
      className={`relative overflow-hidden p-[1px] ring ring-inset ring-zinc-800/50 rounded-[14px] ${classes}`}
    >
      <div
        className="relative bg-card isolate backdrop-blur-md rounded-xl overflow-hidden"
        ref={cardRef}
        onMouseOver={() => setShowGlow(true)}
        onMouseOut={() => setShowGlow(false)}
        onMouseMove={handleMouseMove}
      >
        {children}
      </div>

      <motion.div
        className="absolute -top-[150px] -left-[150px] rounded-full w-[300px] h-[300px] -z-10 bg-foreground blur-[50px]"
        ref={glowRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: showGlow ? 1 : 0 }}
        style={{ x, y }}
      ></motion.div>
    </motion.div>
  );
}
