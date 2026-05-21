import { Link } from "@tanstack/react-router";
import logoWhite from "@/assets/logo-white.png";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center mb-6">
              <img src={logoWhite} alt="ADNC Group" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-paper/70 max-w-md text-balance">
              We design, engineer and ship complex mobile applications for ambitious
              companies. Studio of senior engineers, designers and product strategists.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm uppercase tracking-widest text-paper/50 mb-4">Studio</h4>
            <ul className="space-y-2 text-paper/80">
              <li><Link to="/services" className="hover:text-paper">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-paper">Work</Link></li>
              <li><Link to="/about" className="hover:text-paper">About</Link></li>
              <li><Link to="/contact" className="hover:text-paper">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-sm uppercase tracking-widest text-paper/50 mb-4">Contact</h4>
            <p className="text-paper/80">hello@adncgroup.com</p>
            <p className="text-paper/80 mt-1">Available worldwide · HQ Casablanca, Morocco</p>
            <Link
              to="/contact"
              className="inline-flex items-center mt-6 rounded-full bg-paper text-ink px-5 py-2.5 text-sm font-medium hover:bg-paper/90 transition"
            >
              Start a project →
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-paper/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-paper/50">
          <p>© {new Date().getFullYear()} ADNC Group. All rights reserved.</p>
          <p>​</p>
        </div>
      </div>
    </footer>
  );
}
