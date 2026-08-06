import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";

const EMAIL = "connectwith.shivanshmishra@gmail.com";

const SOCIALS = [
  { label: "Email", href: "mailto:connectwith.shivanshmishra@gmail.com",icon: Mail },
  { label: "GitHub", href: "https://github.com/Shiva-creator07", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shivansh-mishra-81b127359/", icon: Linkedin },
  { label: "Instagram", href: "https://instagram.com/i_.shivansh.11", icon: Instagram },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen px-6 md:px-12 py-24 flex items-center">
      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-6">
            CONTACT
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-10 max-w-sm">
            Open to New Grad SWE roles, backend engineering, and developer tooling opportunities. Reach out directly or drop a message.
          </p>

          <div className="flex flex-col gap-4">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
  
    <a
    key={label}
    href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors w-fit"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full border border-accent/20 group-hover:border-accent/60 group-hover:bg-accent/10 transition-colors">
                  <Icon size={17} />
                </span>
                <span className="text-sm tracking-wide">{label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs tracking-widest uppercase text-accent-secondary/80">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="bg-transparent border-b border-accent/20 focus:border-accent outline-none py-2 text-foreground placeholder:text-foreground/30 transition-colors"
              placeholder="Your name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs tracking-widest uppercase text-accent-secondary/80">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="bg-transparent border-b border-accent/20 focus:border-accent outline-none py-2 text-foreground placeholder:text-foreground/30 transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs tracking-widest uppercase text-accent-secondary/80">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="bg-transparent border-b border-accent/20 focus:border-accent outline-none py-2 text-foreground placeholder:text-foreground/30 transition-colors resize-none"
              placeholder="Let's talk about..."
            />
          </div>

          <button
            type="submit"
            className="mt-4 flex items-center justify-center gap-2 bg-accent text-background font-medium tracking-wide py-3 rounded-full hover:bg-accent-secondary transition-colors w-fit px-8"
          >
            Send Message
            <Send size={16} />
          </button>
        </motion.form>
      </div>
    </div>
  );
}