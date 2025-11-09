import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Discover",
    desc: "We clarify goals, strengths, and constraints to set a realistic direction.",
  },
  {
    title: "Design",
    desc: "We craft your narrative, materials, and outreach plan for target roles.",
  },
  {
    title: "Build",
    desc: "We execute weekly: applications, networking, and skill gaps.",
  },
  {
    title: "Launch",
    desc: "We prep for interviews and negotiate offers with confidence.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            How we work together
          </h2>
          <p className="mt-2 max-w-2xl text-white/70">
            A simple, supportive framework that keeps momentum.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur"
            >
              <div className="mb-3 flex items-center gap-2 text-white">
                <CheckCircle className="h-5 w-5 text-emerald-300" />
                <span className="text-sm opacity-80">Step {idx + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
