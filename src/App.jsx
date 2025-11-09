import { useState } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b1020] text-white">
      {/* Simple top nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1020]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-base font-semibold tracking-tight">
            Elevate Careers
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#testimonials" className="hover:text-white">Stories</a>
            <a href="#contact" className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 hover:bg-white/10">Contact</a>
          </nav>
          <button
            className="sm:hidden rounded-md border border-white/15 px-2 py-1 text-sm text-white/80"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>
        {open && (
          <div className="sm:hidden border-t border-white/10 px-6 pb-4">
            <nav className="grid gap-2 text-sm text-white/80">
              <a href="#services" className="py-1">Services</a>
              <a href="#process" className="py-1">Process</a>
              <a href="#testimonials" className="py-1">Stories</a>
              <a href="#contact" className="py-1">Contact</a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <Hero />
        <Services />
        <Process />
        <Testimonials />

        {/* Contact section */}
        <section id="contact" className="relative">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-semibold sm:text-4xl">Let’s talk</h2>
                <p className="mt-3 max-w-xl text-white/70">
                  Share your goals, current challenges, and timelines. We’ll reply within 24 hours.
                </p>
                <ul className="mt-6 space-y-3 text-white/70">
                  <li>• 30-min discovery call</li>
                  <li>• Transparent pricing</li>
                  <li>• No obligation</li>
                </ul>
              </div>
              <form className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-sm text-white/80">Name</label>
                    <input className="w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-white/30" placeholder="Your name" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-sm text-white/80">Email</label>
                    <input type="email" className="w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-white/30" placeholder="you@example.com" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-sm text-white/80">Message</label>
                    <textarea rows={4} className="w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-white/30" placeholder="Tell me about your goals" />
                  </div>
                </div>
                <button type="button" className="mt-4 w-full rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white/40">
                  Send message
                </button>
                <p className="mt-2 text-center text-xs text-white/60">Response within 24 hours</p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
