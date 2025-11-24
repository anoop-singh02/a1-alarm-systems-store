import { Link } from "wouter";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-white py-16 mt-16">
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold">A-1 Alarm Systems</span>
            </div>
            <p className="text-sm text-white/70">
              Professional security solutions for over 20 years.
            </p>
            <a
              href="https://www.bbb.org/ca/ab/calgary/profile/security-systems-consultants/a-1-alarm-systems-inc-0017-11051"
              target="_blank"
              rel="noreferrer"
              className="inline-flex mt-4 rounded-lg border border-white/20 bg-white/10 p-2"
            >
              <img
                src="https://seal-calgary.bbb.org/seals/black-seal-63-134-a1alarmsystemsinc-58031.png"
                alt="BBB Accredited Business"
                className="h-12 w-auto object-contain"
                loading="lazy"
              />
            </a>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/services">All Services</Link>
              </li>
              <li>
                <Link href="/residential-commercial-security">
                  Residential & Commercial
                </Link>
              </li>
              <li>
                <Link href="/security-options">Security Options</Link>
              </li>
              <li>
                <Link href="/store">System Designer</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <a
                  href="https://a1alarmsystems.ca/wp-content/uploads/2011/12/DSC-PC1616-or-DSC-PC1832-or-DSC-PC1864-User-Manual.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Online Manuals
                </a>
              </li>
              <li>
                <a
                  href="https://a1alarmsystems.ca/wp-content/uploads/2011/12/DocumentsofAOS_PropertyCrimeRatesforCanadaandProvinces.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Crime Stats
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Calgary, Alberta</li>
              <li>(403) 258-3749</li>
              <li>Toll Free: 1-855-258-3749</li>
              <li>info@a1alarm.ca</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="https://a1alarmsystems.ca/aa-vacuum-systems-inc/" target="_blank" rel="noreferrer">
                  AAA Vacuum Systems
                </a>
              </li>
              <li>
                <a href="https://a1alarmsystems.ca/questions-answers/" target="_blank" rel="noreferrer">
                  Questions & Answers
                </a>
              </li>
              <li>
                <a href="https://a1alarmsystems.ca/warranty/" target="_blank" rel="noreferrer">
                  Warranty Info
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60 space-y-3">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-white hover:text-primary transition-colors"
          >
            Back to top
          </button>
          <p>© {year} A-1 Alarm Systems Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
