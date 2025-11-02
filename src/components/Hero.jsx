import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_10%,rgba(99,102,241,0.15),rgba(0,0,0,0))]"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              New • Build faster with style
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Design. Build. Launch.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">
                Beautiful experiences.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base sm:text-lg text-neutral-600">
              A clean, modern starter that helps you move from idea to polished
              interface quickly. Responsive out of the box, with thoughtful
              motion and accessible components.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-white hover:bg-neutral-800 transition-colors"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-neutral-800 hover:bg-neutral-50 transition-colors"
              >
                Explore Features
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-6 shadow-sm">
              <div className="grid h-full w-full place-items-center rounded-xl bg-white">
                <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
                  <div className="h-16 rounded-lg bg-indigo-100" />
                  <div className="h-16 rounded-lg bg-violet-100" />
                  <div className="h-16 rounded-lg bg-fuchsia-100" />
                  <div className="h-16 rounded-lg bg-indigo-200" />
                  <div className="h-16 rounded-lg bg-violet-200" />
                  <div className="h-16 rounded-lg bg-fuchsia-200" />
                  <div className="h-16 rounded-lg bg-indigo-300" />
                  <div className="h-16 rounded-lg bg-violet-300" />
                  <div className="h-16 rounded-lg bg-fuchsia-300" />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -top-8 -right-8 h-48 w-48 rounded-full bg-indigo-300/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
