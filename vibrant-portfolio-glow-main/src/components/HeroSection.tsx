import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const roles = ["Tech Enthusiast", "Web Developer", "Problem Solver", "Quick Learner"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-28 relative overflow-hidden">
      {/* Vivid animated background */}
      <div className="absolute inset-0 hero-gradient-bg" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/40 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-[140px] animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-neon-pink/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-20 right-1/4 w-[300px] h-[300px] bg-accent/15 rounded-full blur-[80px] animate-float" style={{ animationDelay: "2s" }} />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/60 rounded-full animate-float"
          style={{
            top: `${15 + i * 15}%`,
            left: `${10 + i * 16}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${4 + i}s`,
          }}
        />
      ))}

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="font-heading text-xs font-semibold text-primary tracking-widest uppercase">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            className="font-heading text-5xl md:text-7xl font-bold leading-[1.1] mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Hi, I'm{" "}
            <span className="gradient-text block md:inline">Sateesh</span>
            <span className="gradient-text block md:inline"> Rompilli</span>
          </motion.h1>

          <motion.div
            className="h-12 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="font-heading text-2xl md:text-3xl font-semibold text-foreground/80">
              {text}
              <span className="text-primary animate-pulse">|</span>
            </span>
          </motion.div>

          <motion.p
            className="text-muted-foreground max-w-lg mb-10 leading-relaxed text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Passionate web developer crafting modern, responsive, and user-friendly digital experiences.
            I turn ideas into elegant code and bring designs to life.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a href="#projects" className="gradient-btn inline-flex items-center gap-2 text-lg px-8 py-4">
              View Projects
            </a>
            <a href="#contact" className="gradient-btn-outline inline-flex items-center gap-2 text-lg px-8 py-4">
              <Mail size={20} /> Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Photo with glowing ring */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.4, type: "spring", damping: 15 }}
        >
          <div className="relative group">
            {/* Outer glow ring */}
            <div className="absolute -inset-3 rounded-full gradient-bg opacity-50 blur-xl group-hover:opacity-70 transition-opacity duration-500 animate-glow-pulse" />
            {/* Spinning gradient border */}
            <div className="absolute -inset-1.5 rounded-full gradient-bg opacity-60 animate-spin-slow" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background">
              <img
                src={profilePhoto}
                alt="Sateesh Rompilli"
                width={512}
                height={512}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-2 -right-2 w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-primary-foreground font-heading font-bold text-lg shadow-2xl"
              animate={{ rotate: [0, 10, 0, -10, 0], y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {"</>"}
            </motion.div>
            {/* Status dot */}
            <div className="absolute top-4 right-4 w-5 h-5 bg-accent rounded-full border-2 border-background shadow-lg shadow-accent/50">
              <div className="w-full h-full bg-accent rounded-full animate-ping opacity-75" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
          <span className="text-xs font-heading tracking-widest uppercase">Scroll Down</span>
          <ArrowDown size={20} className="animate-bounce group-hover:text-primary" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
