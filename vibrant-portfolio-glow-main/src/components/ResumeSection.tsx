import { motion } from "framer-motion";
import { Download, GraduationCap, Briefcase } from "lucide-react";

const education = [
  { year: "2020 - 2024", title: "B.Tech in Computer Science", org: "University of Technology", desc: "Specialized in web technologies and software engineering." },
  { year: "2018 - 2020", title: "Higher Secondary (Science)", org: "City Senior Secondary School", desc: "Focused on Mathematics and Computer Science." },
];

const experience = [
  { year: "2023 - Present", title: "Full Stack Developer", org: "Tech Solutions Inc.", desc: "Building scalable web applications using React and Node.js." },
  { year: "2022 - 2023", title: "Frontend Developer Intern", org: "StartupXYZ", desc: "Developed responsive UI components and improved site performance." },
];

const TimelineItem = ({ item, index, icon: Icon }: { item: typeof education[0]; index: number; icon: typeof GraduationCap }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15 }}
    className="flex gap-4 relative"
  >
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-primary-foreground shrink-0">
        <Icon size={18} />
      </div>
      {index < 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
    </div>
    <div className="glass-card p-5 mb-6 flex-1 hover:scale-[1.01] transition-transform">
      <span className="text-xs font-heading font-semibold text-primary">{item.year}</span>
      <h4 className="font-heading font-semibold mt-1">{item.title}</h4>
      <p className="text-sm text-muted-foreground">{item.org}</p>
      <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
    </div>
  </motion.div>
);

const ResumeSection = () => (
  <section id="resume" className="section-padding bg-muted/30">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          My <span className="gradient-text">Resume</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          My academic background and professional experience.
        </p>
        <a href="#" className="gradient-btn inline-flex items-center gap-2">
          <Download size={18} /> Download Resume
        </a>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="font-heading text-xl font-semibold mb-6 flex items-center gap-2">
            <GraduationCap className="text-primary" /> Education
          </h3>
          {education.map((item, i) => (
            <TimelineItem key={item.title} item={item} index={i} icon={GraduationCap} />
          ))}
        </div>
        <div>
          <h3 className="font-heading text-xl font-semibold mb-6 flex items-center gap-2">
            <Briefcase className="text-primary" /> Experience
          </h3>
          {experience.map((item, i) => (
            <TimelineItem key={item.title} item={item} index={i} icon={Briefcase} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ResumeSection;
