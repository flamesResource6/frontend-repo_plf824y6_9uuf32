import { motion } from "framer-motion";
import { Compass, Briefcase, FileText, Mic } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Career Clarity",
    desc: "Define your direction with strengths mapping and a realistic action plan.",
  },
  {
    icon: Briefcase,
    title: "Job Search Strategy",
    desc: "Target the right roles, companies, and networking paths that fit you.",
  },
  {
    icon: FileText,
    title: "Resume & LinkedIn",
    desc: "Communicate your value with clean, compelling narratives that get replies.",
  },
  { icon: Mic, title: "Interview Prep", desc: "Practice sessions and feedback to interview with confidence." },
];

export default function Services() {
  return (
    <section id="services" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-end justify-between"
        >
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Services
            </h2>
            <p className="mt-2 max-w-2xl text-white/70">
              Practical, tailored support to accelerate your next step.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur hover:bg-white/10 sm:block"
          >
            Book a call
          </a>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6 shadow-sm backdrop-blur"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/5 blur-2xl transition group-hover:scale-125" />
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
