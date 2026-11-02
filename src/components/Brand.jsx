import { Link } from "react-router-dom";

export function LogoCrop({ size = 220, className = "" }) {
  return (
    <div
      className={`logo-crop ${className}`}
      style={{
        width: size,
      }}
      role="img"
      aria-label="HemaCord logo"
    />
  );
}
export function Brand({ light = false }) {
  return (
    <Link to="/" className={`brand ${light ? "brand--light" : ""}`} aria-label="HemaCord home">
      <svg viewBox="0 0 32 40" className="brand__drop" aria-hidden="true">
        <path d="M16 1C16 1 2 17 2 26a14 14 0 0 0 28 0C30 17 16 1 16 1Z" fill="#DC3832" />
        <path
          d="M16 1c.6 3-1 8 4 15 3 4.2 6 7 6 11a12 12 0 0 1-9 11.6A14 14 0 0 0 30 26C30 17 16 1 16 1Z"
          fill="#B3192D"
        />
        <circle cx="11.5" cy="27" r="1.7" fill="#4A0D17" />
        <circle cx="20.5" cy="27" r="1.7" fill="#4A0D17" />
        <path
          d="M13 31.5q3 3 6 0"
          stroke="#7A0A1B"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <span className="brand__text">HemaCord</span>
    </Link>
  );
}
