import { useReveal } from "../hooks/useReveal";

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  as: Tag = "div",
  className = "",
  ...i
}) {
  const [ref, inView] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${direction} ${inView ? "in" : ""} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      {...i}
    >
      {children}
    </Tag>
  );
}
