import Link from "next/link";
import { navLinks } from "@/data/navLinks";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-2xl font-bold text-indigo-400">PeakCraft</span>
            <p className="mt-3 text-sm text-gray-400">
              Premium 3D printed items, crafted with precision and care.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Contact
            </h3>
            <p className="text-gray-400 text-sm">Get in touch with us:</p>
            <Link
              href="/contact"
              className="mt-2 inline-block text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium"
            >
              Contact Page →
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} PeakCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
