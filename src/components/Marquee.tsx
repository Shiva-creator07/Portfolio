const KEYWORDS = [
  "JAVA",
  "SPRING BOOT",
  "KAFKA",
  "PYTHON",
  "AWS",
  "CLOUD",
  "AI TOOLING",
];

export default function Marquee() {
  return (
    <div className="relative py-8 border-y border-accent/10 overflow-hidden">
      <div className="flex w-max animate-marquee">
        {[...KEYWORDS, ...KEYWORDS].map((word, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-display text-2xl md:text-4xl tracking-tight text-accent-secondary/85 px-8"
            >
            {word}
            <span className="text-accent/70 text-lg">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}