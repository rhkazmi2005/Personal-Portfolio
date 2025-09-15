"use client";
import { useMotionValue } from "motion/react";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "motion/react";
import { cn } from "@/lib/utils";


export const EvervaultCard = ({
  text,
  className,
}: {
  text?: string;
  className?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1500);
    setRandomString(str);
  }

  return (
    <div
      className={cn(
        "aspect-square w-full h-full flex items-center justify-center relative rounded-2xl bg-[#101012] shadow-2xl border border-neutral-800 p-0 overflow-hidden",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card w-full h-full flex items-center justify-center relative overflow-hidden rounded-2xl"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <span className="text-white font-bold text-4xl text-center drop-shadow-lg select-none">
            {text}
          </span>
        </div>
      </div>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY, randomString }: any) {
  // On hover, fill most of the card with a solid gradient (no mask)
  let maskImage = useMotionTemplate`radial-gradient(500px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500 to-red-700 opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500 group-hover/card:[mask-image:none] group-hover/card:[-webkit-mask-image:none]"
        style={{ ...style, '--mask': maskImage } as any}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-100 group-hover/card:[mask-image:none] group-hover/card:[-webkit-mask-image:none]"
        style={{ ...style, '--mask': maskImage } as any}
      >
        <p className="absolute inset-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500 p-4">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
