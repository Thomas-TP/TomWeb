import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => onLoadingComplete?.(), 500);
          }, 300);
          return 100;
        }
        // Accelerate progress as it gets closer to 100
        const increment = prev < 60 ? 8 : prev < 90 ? 12 : 18;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-white via-red-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        >
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-swiss-red/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, 20],
                  x: [-10, 10],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center gap-8 px-4">
            {/* Rotating Swiss Cross */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="relative"
            >
              <svg className="w-24 h-24 md:w-32 md:h-32" viewBox="0 0 100 100">
                <rect
                  x="40"
                  y="15"
                  width="20"
                  height="70"
                  fill="currentColor"
                  className="text-swiss-red"
                />
                <rect
                  x="15"
                  y="40"
                  width="70"
                  height="20"
                  fill="currentColor"
                  className="text-swiss-red"
                />
              </svg>

              {/* Pulsing glow effect */}
              <motion.div
                className="absolute inset-0 blur-xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg className="w-24 h-24 md:w-32 md:h-32" viewBox="0 0 100 100">
                  <rect x="40" y="15" width="20" height="70" fill="#DC2626" />
                  <rect x="15" y="40" width="70" height="20" fill="#DC2626" />
                </svg>
              </motion.div>
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <img
                src="/Logo-dark.png"
                alt="TomWeb"
                className="h-20 md:h-24 w-auto"
              />
            </motion.div>

            {/* Progress bar */}
            <div className="w-64 md:w-80">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col gap-2"
              >
                {/* Progress bar container */}
                <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: [-200, 400],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Progress fill */}
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-swiss-red to-red-700 shadow-lg"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>

                {/* Progress text */}
                <motion.div
                  className="text-center text-sm font-semibold text-gray-700 dark:text-gray-300"
                  animate={{
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Chargement... {progress}%
                </motion.div>
              </motion.div>
            </div>

            {/* Loading dots animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-swiss-red rounded-full"
                  animate={{
                    y: [0, -12, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Corner decorations - Swiss flags */}
          <div className="absolute top-8 right-8 opacity-10">
            <svg className="w-16 h-16" viewBox="0 0 100 100">
              <rect x="40" y="15" width="20" height="70" fill="currentColor" className="text-swiss-red" />
              <rect x="15" y="40" width="70" height="20" fill="currentColor" className="text-swiss-red" />
            </svg>
          </div>
          <div className="absolute bottom-8 left-8 opacity-10">
            <svg className="w-16 h-16" viewBox="0 0 100 100">
              <rect x="40" y="15" width="20" height="70" fill="currentColor" className="text-swiss-red" />
              <rect x="15" y="40" width="70" height="20" fill="currentColor" className="text-swiss-red" />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
