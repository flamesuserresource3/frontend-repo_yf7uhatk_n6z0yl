import { Rocket, Shield, Zap, Globe } from 'lucide-react';

const features = [
  {
    title: 'Fast by default',
    description: 'Optimized build setup and responsive UI patterns so you can ship features quickly.',
    icon: Rocket,
  },
  {
    title: 'Secure foundations',
    description: 'Best practices and sensible defaults to keep your project stable and safe.',
    icon: Shield,
  },
  {
    title: 'Lightning UI',
    description: 'Clean, accessible components powered by utility-first styling.',
    icon: Zap,
  },
  {
    title: 'Global-ready',
    description: 'Built with scalability in mind—works great across devices and regions.',
    icon: Globe,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Everything you need to start strong</h2>
          <p className="mt-3 text-neutral-600">
            A curated set of essentials that help you go from concept to launch without friction.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group relative rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-white shadow-sm">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{f.description}</p>
              <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
