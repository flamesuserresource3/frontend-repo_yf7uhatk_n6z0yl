export default function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600">
            © {new Date().getFullYear()} Flames Blue. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-neutral-600 hover:text-neutral-900">Privacy</a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">Terms</a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
