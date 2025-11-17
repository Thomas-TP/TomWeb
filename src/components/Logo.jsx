const Logo = ({ className = "w-10 h-10" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle with Swiss red */}
      <circle cx="50" cy="50" r="48" fill="#FF0000" />

      {/* White cross inspired by Swiss flag */}
      <rect x="44" y="25" width="12" height="50" fill="white" />
      <rect x="25" y="44" width="50" height="12" fill="white" />

      {/* "TW" letters overlay in a modern style */}
      <g opacity="0.9">
        <path
          d="M 30 30 L 35 30 L 35 35 L 32.5 35 L 32.5 45 L 30 45 Z"
          fill="white"
        />
        <path
          d="M 65 30 L 70 30 L 72 37 L 74 30 L 76 30 L 76 45 L 73.5 45 L 73.5 35 L 71 42 L 69 35 L 67.5 35 L 67.5 45 L 65 45 Z"
          fill="white"
        />
      </g>

      {/* Outer circle border */}
      <circle cx="50" cy="50" r="48" stroke="#DC143C" strokeWidth="3" fill="none" />
    </svg>
  );
};

export default Logo;
