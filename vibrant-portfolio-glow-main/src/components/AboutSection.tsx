import { motion } from "framer-motion";
import { GraduationCap, Target, Code2, Heart } from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Student of Computer Science and Information Technology with strong interest in programming, problem solving, and software development.",
  },
  {
    icon: Target,
    title: "Career Goals",
    desc: "To build a successful career in the field of software development where I apply my technical knowledge and contribute to innovative projects.",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Experience in building responsive web applications through modern frameworks and best practices using latest technologies.",
  },
  {
    icon: Heart,
    title: "Interests",
    desc: "Interested in programming, problem solving, and exploring new technologies. I also enjoy participating in technical events and hackathons.",
  },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="font-heading text-sm font-semibold text-primary mb-2 tracking-widest uppercase">
          Get To Know Me
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold">
          About Me
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <div className="w-14 h-14 mx-auto mb-4 gradient-bg rounded-xl flex items-center justify-center text-primary-foreground">
              <card.icon size={28} />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-3 text-center">{card.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed text-center">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
