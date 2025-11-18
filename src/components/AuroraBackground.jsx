import { motion } from 'framer-motion';

const AuroraBackground = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Animated blobs creating aurora effect - More visible */}
      <motion.div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-swiss-red/40 dark:bg-swiss-red/30 rounded-full blur-3xl"
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
        className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-red-400/35 dark:bg-red-400/25 rounded-full blur-3xl"
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
        className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-swiss-dark/25 dark:bg-swiss-dark/20 rounded-full blur-3xl"
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
        className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-600/30 dark:bg-red-600/20 rounded-full blur-3xl"
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
        className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-swiss-red/35 dark:bg-swiss-red/25 rounded-full blur-3xl"
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

      {/* Additional blobs for more coverage */}
      <motion.div
        className="absolute top-1/3 left-1/3 w-[550px] h-[550px] bg-red-500/25 dark:bg-red-500/15 rounded-full blur-3xl"
        animate={{
          x: [0, -60, 0],
          y: [0, 80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
      />

      {/* Overlay gradient for better blending - Less opaque */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent dark:via-gray-900/30" />
    </div>
  );
};

export default AuroraBackground;
