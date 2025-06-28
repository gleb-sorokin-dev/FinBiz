import { useRef, useState } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

export const SlideTabsExample = () => {
  return (
    <div className="py-20">
      <SlideTabs />
    </div>
  );
};

type Position = {
  left: number;
  width: number;
  opacity: number;
};

type TabProps = {
  children: ReactNode;
  setPosition: (position: Position) => void;
};

type CursorProps = {
  position: Position;
};

const SlideTabs = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <nav
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      className="relative mx-auto flex w-fit rounded-full bg-white/5 backdrop-blur-3xl p-1"
    >
      <ul className="relative flex list-none m-0 p-0">
        <Tab setPosition={setPosition}>Product</Tab>
        <Tab setPosition={setPosition}>Integration</Tab>
        <Tab setPosition={setPosition}>Demo</Tab>
        <Tab setPosition={setPosition}>Pricing</Tab>
        <Tab setPosition={setPosition}>Login</Tab>

        <Cursor position={position} />
      </ul>
    </nav>
  );
};

const Tab = ({ children, setPosition }: TabProps) => {
  const ref = useRef<HTMLLIElement>(null);

  const handleMouseEnter = () => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    setPosition({
      left: ref.current.offsetLeft,
      width: rect.width,
      opacity: 1,
    });
  };

  return (
    <li
      ref={ref}
      onMouseEnter={handleMouseEnter}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: CursorProps) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
      aria-hidden="true"
    />
  );
};
