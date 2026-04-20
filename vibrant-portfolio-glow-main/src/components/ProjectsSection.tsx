import { motion } from "framer-motion";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectTaskManager from "@/assets/project-taskmanager.jpg";
import projectChatApp from "@/assets/project-chatapp.jpg";

const projects = [
  {
    title: "Student Management System",
    desc: "A comprehensive system to manage student records, enrollment, grades, and academic progress with an intuitive dashboard.",
    image: projectEcommerce,
    tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
  },
  {
    title: "Attendance Management System",
    desc: "An efficient platform for tracking and managing student attendance with automated reports and real-time updates.",
    image: projectTaskManager,
    tags: ["HTML", "CSS", "JavaScript", "MySQL", "Node.js"],
  },
  {
    title: "Online Quiz System",
    desc: "An interactive quiz platform with timed assessments, instant scoring, and detailed performance analytics for students.",
    image: projectChatApp,
    tags: ["React.js", "TypeScript", "PostgreSQL", "Express.js"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-heading text-sm font-semibold text-primary mb-2 tracking-widest uppercase">
          My Work
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold">
          Featured Projects
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={800}
                height={512}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="font-heading text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs font-heading font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
