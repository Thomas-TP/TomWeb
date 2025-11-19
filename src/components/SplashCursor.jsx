import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashCursor = () => {
  const [splashes, setSplashes] = useState([]);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e) => {
      const newSplash = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setSplashes((prev) => [...prev, newSplash]);

      // Remove splash after animation
      setTimeout(() => {
        setSplashes((prev) => prev.filter((splash) => splash.id !== newSplash.id));
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      {/* Custom cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-swiss-red rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: cursorPos.x - 8,
          y: cursorPos.y - 8,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Splash effects */}
      <AnimatePresence>
        {splashes.map((splash) => (
          <div key={splash.id} className="fixed top-0 left-0 pointer-events-none z-[9999]">
            {/* Generate multiple particles for splash effect */}
            {[...Array(12)].map((_, i) => {
              const angle = (Math.PI * 2 * i) / 12;
              const distance = 50 + Math.random() * 30;
              const xOffset = Math.cos(angle) * distance;
              const yOffset = Math.sin(angle) * distance;

              return (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-swiss-red rounded-full"
                  style={{
                    left: splash.x,
                    top: splash.y,
                  }}
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  animate={{
                    x: xOffset,
                    y: yOffset,
                    opacity: 0,
                    scale: 0,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.6 + Math.random() * 0.4,
                    ease: "easeOut",
                  }}
                />
              );
            })}

            {/* Central splash ring */}
            <motion.div
              className="absolute border-2 border-swiss-red rounded-full"
              style={{
                left: splash.x - 20,
                top: splash.y - 20,
              }}
              initial={{
                width: 40,
                height: 40,
                opacity: 0.8,
              }}
              animate={{
                width: 120,
                height: 120,
                opacity: 0,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            />
          </div>
        ))}
      </AnimatePresence>
    </>
  );
};

export default SplashCursor;
