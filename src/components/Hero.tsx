import { useEffect, useState } from "react";

const NAME = "SHIVANSH MISHRA";
const TAGLINE = "Building scalable backend systems & AI-powered tools";

const GRADIENTS = [
  "bg-gradient-to-r from-foreground to-foreground",
  "bg-gradient-to-r from-accent to-accent-secondary",
  "bg-gradient-to-r from-accent-secondary to-muted",
  "bg-gradient-to-r from-accent via-foreground to-accent-secondary",
];

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [gradientIndex, setGradientIndex] = useState(0);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setTyped(NAME.slice(0, index));
      if (index === NAME.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  const cycleGradient = () => {
    setGradientIndex((prev) => (prev + 1) % GRADIENTS.length);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 gap-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

<div
  className="absolute inset-0 pointer-events-none"
  style={{
    backgroundImage:
      "linear-gradient(to right, rgba(189,216,233,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(189,216,233,0.07) 1px, transparent 1px)",
    backgroundSize: "48px 48px",
    maskImage:
      "radial-gradient(circle at center, transparent 5%, black 70%)",
    WebkitMaskImage:
      "radial-gradient(circle at center, transparent 5%, black 70%)",
  }}
/>

      <h1
        onClick={cycleGradient}
        className={`relative font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-center cursor-pointer select-none bg-clip-text text-transparent transition-all duration-500 ${GRADIENTS[gradientIndex]}`}
      >
        {typed}
        {isTyping && <span className="animate-pulse text-foreground">|</span>}
      </h1>

      <p className="relative text-sm sm:text-base md:text-lg tracking-[0.2em] uppercase text-foreground/60 overflow-hidden bg-clip-text text-transparent bg-[linear-gradient(110deg,var(--color-foreground)_45%,var(--color-accent)_50%,var(--color-foreground)_55%)] bg-[length:200%_100%] animate-shimmer">
        {TAGLINE}
      </p>
    </div>
  );
}