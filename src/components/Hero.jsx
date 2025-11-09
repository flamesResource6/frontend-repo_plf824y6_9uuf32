import { motion } from "framer-motion";
import { Rocket, Target } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-blue-500/20 via-cyan-500/20 to-emerald-500/20 blur-3xl"
          animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
                <Rocket className="h-3.5 w-3.5" />
                Career Growth Starts Here
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
                Design a career you love with expert coaching
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                One-on-one guidance to help you clarify your direction, showcase your strengths, and land roles that fit. Practical strategies, personalized to you.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-gray-900 shadow-sm transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/40"
                >
                  Get Started
                </a>
                <a
                  href="#process"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  <Target className="h-4 w-4" />
                  How it works
                </a>
              </div>
              <div className="mt-2 flex items-center gap-4 text-sm text-white/60">
                <div className="flex -space-x-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-7 w-7 rounded-full border border-white/20 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur"
                    />
                  ))}
                </div>
                <span>Trusted by 500+ driven professionals</span>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative mx-auto w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-white/0" />
              <div className="relative space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-white/80">
                    Free Discovery Call
                  </span>
                  <span className="text-xs text-emerald-300">Open slots this week</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Resume Review",
                    "Personal Branding",
                    "Interview Prep",
                    "Career Strategy",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <button className="w-full rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white/40">
                  Book your session
                </button>
                <p className="text-center text-xs text-white/60">
                  No pressure, just a friendly chat to see if we fit.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
