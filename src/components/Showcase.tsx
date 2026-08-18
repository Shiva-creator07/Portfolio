import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Event-Driven Order Processing System",
    date: "Jul 2026 – Aug 2026",
    stack: ["Spring Boot", "Kafka", "PostgreSQL", "Docker Compose"],
    bullets: [
      "Designed a microservices-based e-commerce order pipeline, with an order service publishing domain events to Kafka consumed independently by inventory, payment, and notification services.",
      "Implemented database-per-service architecture with PostgreSQL and containerized the full system with Docker Compose, enabling each service to scale, deploy, and fail independently.",
    ],
    link: "https://github.com/Shiva-creator07",
  },
  
  {
    title: "Smart Trafficking Management System",
    date: "Jun 2025 – Sept 2025",
    stack: ["Python", "YOLOv8", "OpenCV", "MongoDB Atlas", "Streamlit", "MQTT"],
    bullets: [
      "Engineered a full-stack AI-driven Cyber-Physical System achieving >95% vehicle detection accuracy by deploying YOLOv8 on edge hardware, cutting cloud bandwidth usage by ~80%.",
      "Built a hybrid edge-cloud pipeline transmitting lightweight JSON metadata via MQTT, backed by a real-time Streamlit dashboard for congestion alerts.",
    ],
    link: "https://github.com/Shiva-creator07",
  },

  {
    title: "E-commerce Profitability & CLV Analytics",
    date: "Jul 2026 – Aug 2026",
    stack: ["Python", "PostgreSQL", "SQL", "Streamlit", "Plotly"],
    bullets: [
      "Built a full-stack analytics platform on 99K+ orders from the Olist e-commerce dataset, combining PostgreSQL (hosted on Neon), layered SQL views with window functions and CTEs, and a live Streamlit dashboard for profitability, RFM segmentation, and CLV metrics.",
      "Identified and fixed two analytical bugs in production: an NTILE-based RFM scoring flaw that misclassified one-time buyers as frequent customers, and a CLV extrapolation formula producing 700x overestimates on sparse purchase data, both documented with root-cause analysis.",
    ],
    link: "https://github.com/Shiva-creator07/ecommerce-clv-analytics",
  },

  {
    title: "AI Chatbot for Student Queries",
    date: "Apr 2023 – May 2023",
    stack: ["Python", "NLP", "IBM Watson"],
    bullets: [
      "Built an NLP-powered chatbot to automate academic query resolution for college students, reducing repetitive support requests with instant, context-aware responses.",
    ],
    link: "https://github.com/Shiva-creator07",
  },
];

export default function Showcase() {
  return (
    <div className="min-h-screen px-6 md:px-12 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-16 text-center">
          SHOWCASE
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group block p-6 md:p-8 rounded-2xl border border-accent/15 bg-accent/5 hover:border-accent/40 hover:bg-accent/10 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-display text-xl md:text-2xl tracking-tight">
                  {project.title}
                </h3>
                <ArrowUpRight
                  size={22}
                  className="shrink-0 text-accent opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300"
                />
              </div>

              <p className="text-xs tracking-widest uppercase text-accent-secondary/80 mb-4">
                {project.date}
              </p>

              <ul className="space-y-2 mb-5 text-sm text-foreground/70 leading-relaxed">
                {project.bullets.map((bullet, bi) => (
                  <li key={bi} className="flex gap-2">
                    <span className="text-accent mt-1.5 shrink-0">▪</span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] tracking-wide uppercase px-2.5 py-1 rounded-full border border-accent-secondary/30 text-accent-secondary/90"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}