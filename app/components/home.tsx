"use client";
import React from "react";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";



const Home = () => {
  return (
    <section id="home" className="flex items-center justify-center bg-gradient-to-br from-black via-red-900 to-black dark:bg-black w-full min-h-screen gap-4 m-0 p-0 overflow-hidden">
      <Card>
        <CanvasRevealEffect
          animationSpeed={4}
          containerClassName="bg-gradient-to-br from-red-600 to-red-800"
          colors={[[220, 38, 38], [185, 28, 28], [153, 27, 27]]}
        />
      </Card>
    </section>
  );
};

const Card = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] w-screen h-screen m-0 p-0 relative"
      style={{ cursor: 'pointer' }}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20 text-center px-4">
        <TypingAnimation 
          style={{ 
            color: '#ffffff', 
            fontSize: 'clamp(2rem, 5vw, 4rem)', 
            background: 'transparent',
            fontWeight: 'bold',
            textShadow: '0 0 20px rgba(220, 38, 38, 0.8)'
          }}
        >
          Hi, I'm Reza
        </TypingAnimation>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-6 text-white/80 text-lg md:text-xl max-w-2xl"
        >
          Full-Stack Developer & UI/UX Enthusiast
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
          className="mt-4 text-white/60 text-sm md:text-base max-w-xl"
        >
          Crafting digital experiences with modern technologies
        </motion.div>
      </div>
    </div>
  );
};


export default Home;
