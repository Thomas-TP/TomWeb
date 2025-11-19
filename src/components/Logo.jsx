import { useTheme } from '../contexts/ThemeContext';

const Logo = ({ className = "w-10 h-10" }) => {
  const { isDark } = useTheme();

  return (
    <img
      src={isDark ? '/Logo-dark.png' : '/Logo-light.png'}
      alt="TomWeb Logo"
      className={className}
    />
  );
};

export default Logo;
