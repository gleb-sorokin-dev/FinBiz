"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useCallback } from "react";

type CardItem = {
  quote: string;
  name: string;
  title: string;
};

type Direction = "left" | "right";
type Speed = "fast" | "normal" | "slow";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: CardItem[];
  direction?: Direction;
  speed?: Speed;
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      const value = direction === "left" ? "forwards" : "reverse";
      containerRef.current.style.setProperty("--animation-direction", value);
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      const durations = {
        fast: "20s",
        normal: "40s",
        slow: "80s",
      };
      containerRef.current.style.setProperty(
        "--animation-duration",
        durations[speed]
      );
    }
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <section
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        "dark:[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
      aria-label="Customer testimonials"
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-gradient-to-b from-[#fafafa] to-[#f5f5f5] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-gradient-to-b dark:from-[#27272a] dark:to-[#18181b]"
            key={`${item.name}-${item.title}`}
          >
            <blockquote className="relative">
              <div
                aria-hidden="true"
                className="select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-[1] h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <p className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                {item.quote}
              </p>
              <footer className="relative z-20 mt-6 flex flex-row items-center">
                <div className="flex flex-col gap-1">
                  <cite className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400 not-italic">
                    {item.name}
                  </cite>
                  <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                    {item.title}
                  </span>
                </div>
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </section>
  );
};
