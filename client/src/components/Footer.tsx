export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-white py-16 mt-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold">A-1 Alarm Systems</span>
            </div>
            <p className="text-sm text-white/70">
              Professional security solutions for over 20 years.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Alarm Systems</li>
              <li>Video Surveillance</li>
              <li>Home Automation</li>
              <li>Central Vacuum</li>
              <li>Sound Systems</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Store</li>
              <li>System Designer</li>
              <li>FAQ</li>
              <li>Contact</li>
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
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60 space-y-3">
          <a href="#home" className="text-white hover:text-primary transition-colors">
            Back to top
          </a>
          <p>© {year} A-1 Alarm Systems Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
