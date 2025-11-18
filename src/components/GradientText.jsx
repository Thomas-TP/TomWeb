import { motion } from 'framer-motion';

const GradientText = ({ children, className = '' }) => {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      style={{
        background: 'linear-gradient(90deg, #DC2626, #991B1B, #DC2626, #991B1B)',
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
      animate={{
        backgroundPosition: ['0% center', '200% center'],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {children}
    </motion.span>
  );
};

export default GradientText;
