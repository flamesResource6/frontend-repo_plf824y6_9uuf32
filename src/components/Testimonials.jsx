import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alex R.",
    role: "Product Manager @ Fintech",
    quote:
      "I went from scattered applications to a clear strategy and two offers in six weeks.",
  },
  {
    name: "Priya S.",
    role: "Data Analyst → Data Scientist",
    quote:
      "The resume and LinkedIn overhaul doubled my callbacks. The interview prep sealed the deal.",
  },
  {
    name: "Marco D.",
    role: "Marketing Lead",
    quote:
      "Felt like having a co-pilot. Honest feedback, practical systems, and weekly momentum.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Client stories
          </h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Real outcomes from coaching grounded in practicality.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.06] p-6 text-white/80 backdrop-blur"
            >
              <p className="text-sm leading-relaxed">“{t.quote}”</p>
              <footer className="mt-4">
                <div className="text-sm font-semibold text-white">{t.name}</div>
                <div className="text-xs text-white/60">{t.role}</div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
