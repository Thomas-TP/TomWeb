import { motion } from 'framer-motion';

const AuroraBackground = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Animated blobs creating aurora effect */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-swiss-red/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-red-400/15 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      <motion.div
        className="absolute bottom-0 left-1/2 w-[400px] h-[400px] bg-swiss-dark/10 rounded-full blur-3xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -80, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl"
        animate={{
          x: [0, 120, 0],
          y: [0, 60, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-swiss-red/15 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -70, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
      />

      {/* Overlay gradient for better blending */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent dark:via-gray-900/50" />
    </div>
  );
};

export default AuroraBackground;
