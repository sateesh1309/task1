import { motion } from "framer-motion";
import { Globe, Server, Database, Wrench, Sparkles } from "lucide-react";

const skillGroups = [
  {
    icon: Globe,
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "TypeScript"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    icon: Database,
    title: "Database",
    skills: ["MySQL", "MongoDB", "SQL Queries", "PostgreSQL"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["GitHub", "VS Code", "Figma"],
  },
  {
    icon: Sparkles,
    title: "Others",
    skills: ["Leadership", "Communication", "Presentation"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding bg-muted/30">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-heading text-sm font-semibold text-primary mb-2 tracking-widest uppercase">
          What I Know
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold">
          My Skills
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <group.icon size={20} className="text-primary" />
              <h3 className="font-heading text-lg font-semibold">{group.title}</h3>
            </div>
            <ul className="space-y-2">
              {group.skills.map((skill) => (
                <li key={skill} className="text-muted-foreground text-sm font-medium">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
