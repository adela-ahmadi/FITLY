import useReveal from "../../hooks/useReveal";

export default function Reveal({
  children,
  from = "up",
  delay = 0,
  className = "",
}) {
  const [ref, seen] = useReveal();

  return (
    <div
      ref={ref}
      className={`rv rv-${from}${seen ? " in" : ""} ${className}`}
      style={{ "--d": `${delay}ms` }}
    >
      {children}
    </div>
  );
}
