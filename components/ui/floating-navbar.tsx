"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import { Home, User, Briefcase, Mail } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { name: "Home", link: "#home", icon: <Home className="h-4 w-4" /> },
  { name: "About", link: "#about", icon: <User className="h-4 w-4" /> },
  { name: "Projects", link: "#projects", icon: <Briefcase className="h-4 w-4" /> },
  { name: "Contact", link: "#contact", icon: <Mail className="h-4 w-4" /> },
];

export const FloatingNav = ({
  className,
}: {
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-red-500/20 rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(220,38,38,0.1),0px_1px_0px_0px_rgba(220,38,38,0.02),0px_0px_0px_1px_rgba(220,38,38,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-red-300 hover:text-red-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </a>
        ))}
        <ThemeToggle />
      </motion.div>
    </AnimatePresence>
  );
};
