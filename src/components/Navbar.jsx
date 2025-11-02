import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-neutral-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-neutral-900">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-violet-500 text-white">
              <Rocket className="h-5 w-5" />
            </span>
            Flames Blue
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
            <a href="#features" className="hover:text-neutral-900 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-neutral-900 transition-colors">Pricing</a>
            <a href="#about" className="hover:text-neutral-900 transition-colors">About</a>
            <a href="#contact" className="rounded-full bg-neutral-900 text-white px-4 py-2 hover:bg-neutral-800 transition-colors">Get Started</a>
          </div>

          <button aria-label="Toggle menu" className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 rounded-lg border border-neutral-200 p-3">
              <a href="#features" className="rounded-md px-3 py-2 hover:bg-neutral-100">Features</a>
              <a href="#pricing" className="rounded-md px-3 py-2 hover:bg-neutral-100">Pricing</a>
              <a href="#about" className="rounded-md px-3 py-2 hover:bg-neutral-100">About</a>
              <a href="#contact" className="rounded-md px-3 py-2 bg-neutral-900 text-white hover:bg-neutral-800">Get Started</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
