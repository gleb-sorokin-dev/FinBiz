import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AspectRatio } from "../ui/aspect-ratio";
import ReactPlayer from "react-player/youtube";

import { heroData } from "./HeroData";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import finBizDash from "@/assets/finBiz-dashboard.svg";
import { CirclePlay } from "lucide-react";
import { useRef } from "react";

const heroChildVariants = {
  start: {
    y: 30,
    opacity: 0,
    filter: "blur(5px)",
  },
  end: {
    y: 0,
    opacity: 1,
    filter: "blur(0)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const heroVariants = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

export default function Hero() {
  const heroBannerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroBannerRef,
    offset: ["start 1080px", "50% start"],
  });

  const scrollYTransform = useTransform(scrollYProgress, [0, 1], [0.85, 1.15]);

  const scale = useSpring(scrollYTransform, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="py-10 md:py-16 bg-black">
      <motion.div
        variants={heroVariants}
        initial="start"
        animate="end"
        className="container text-center mx-auto"
      >
        <div className="max-w-screen-md mx-auto">
          <motion.p
            variants={heroChildVariants}
            className="text-sm uppercase tracking-wider bg-secondary/50 text-secondary-foreground max-w-max mx-auto px-3 py-1 rounded-full border-t border-gray-500/10 backdrop-blur-3xl mb-6 md:mb-10"
          >
            {heroData.sectionSubTitle}
          </motion.p>
          <motion.h2
            variants={heroChildVariants}
            className="text-4xl font-semibold !leading-tight mb-4 md:text-5xl md:mb-5 lg:text-6xl"
          >
            {heroData.sectionTitle}
          </motion.h2>
          <motion.p
            variants={heroChildVariants}
            className="text-muted-foreground md:text-xl"
          >
            {heroData.sectionText}
          </motion.p>

          <motion.div
            variants={heroChildVariants}
            className="flex justify-center gap-2 mt-6 md:mt-10"
          >
            <Button>Try it for free</Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost">
                  <CirclePlay /> Watch Demo
                </Button>
              </DialogTrigger>
              <DialogContent className="p-0 overflow-hidden max-w-[640px] xl:max-w-[1000px]">
                <AspectRatio ratio={16 / 9}>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=9VlvbpXwLJs&t=3824s"
                    style={{
                      maxWidth: "100%",
                      minWidth: "100%",
                      maxHeight: "100%",
                      minHeight: "100%",
                    }}
                  />
                </AspectRatio>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>

        <div className="relative mt-12 max-w-screen-xl mx-auto isolate rounded-xl md:mt-16">
          <motion.figure
            initial={{ y: 120, opacity: 0, filter: "blur(5px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0)" }}
            transition={{ duration: 1.5, delay: 0.5, ease: "backInOut" }}
            className="bg-background/60 border border-slate-800 backdrop-blur-3xl rounded-3xl overflow-hidden shadow-2xl"
            ref={heroBannerRef}
            style={{ scale }}
          >
            <img
              src={finBizDash}
              width={1536}
              height={747}
              alt="FinBiz Dashboard"
            />
          </motion.figure>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "backInOut" }}
            className="absolute bg-[#787878] inset-5 blur-[50px] -z-10"
          ></motion.div>
          <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1.5, ease: "backOut" }}
            className="absolute inset-0 bg-[#787878] blur-[200px] scale-y-75 scale-x-125 -z-10 rounded-full"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
