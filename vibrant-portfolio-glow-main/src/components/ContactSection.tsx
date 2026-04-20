import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ExternalLink, UserCircle, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast({ title: "Message Sent!", description: "Thanks for reaching out. I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
      setSending(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Drop me a message!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div>
              <label className="font-heading text-sm font-medium mb-1.5 block">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-heading text-sm font-medium mb-1.5 block">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="font-heading text-sm font-medium mb-1.5 block">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none font-body"
                placeholder="Your message..."
              />
            </div>
            <button type="submit" disabled={sending} className="gradient-btn w-full inline-flex items-center justify-center gap-2 disabled:opacity-60">
              <Send size={18} /> {sending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="glass-card p-8 space-y-6">
              <h3 className="font-heading text-xl font-semibold">Let's Connect</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Feel free to reach out through any of these platforms. I'm always open to discussing new projects and opportunities.
              </p>
              <div className="space-y-4">
                <a href="https://github.com/sateesh1309" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:gradient-bg group-hover:text-primary-foreground transition-all">
                    <ExternalLink size={20} />
                  </div>
                  <span className="font-heading text-sm">github.com/yourusername</span>
                </a>
                <a href="https://www.linkedin.com/in/rompilli-sateesh-384776383?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:gradient-bg group-hover:text-primary-foreground transition-all">
                    <UserCircle size={20} />
                  </div>
                  <span className="font-heading text-sm">linkedin.com/in/yourprofile</span>
                </a>
                <a href="sateesh1309@email.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:gradient-bg group-hover:text-primary-foreground transition-all">
                    <Mail size={20} />
                  </div>
                  <span className="font-heading text-sm">your@email.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
