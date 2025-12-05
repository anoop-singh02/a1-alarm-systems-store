import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

const wiredBenefits = [
  "Hardwired connections between sensors and control panel for reliability",
  "Supports state-of-the-art devices and hybrid upgrades",
  "Adds value to the property for future buyers",
];

const wirelessBenefits = [
  "Minimal drilling—ideal for renters and finished spaces",
  "Operates without a landline and can move with you",
  "Fast installation timeline with modern, sleek sensors",
];

const monitoringHighlights = [
  "Auto-tested signals from every sensor to the A-1 Alarm Control Centre",
  "24/7 monitoring with immediate dispatch of emergency personnel",
  "Custom notification lists for business owners, property managers, and families",
];

const residentialHighlights = [
  "DSC / Honeywell smart panels with connected locks, garage, and thermostat scenes",
  "Video doorbells + 4K exterior domes tuned for Calgary winters",
  "Insurance-ready documentation plus 30-day cancellation flexibility",
];

const commercialHighlights = [
  "ULC-compliant monitoring with open/close reports and scheduled arming",
  "Enterprise video platforms with multi-site dashboards + NDAA hardware",
  "Access control, panic buttons, and HVAC/lighting automation for ROI",
];

export default function ResidentialCommercialPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader currentPage="residential" />
      <section className="bg-gradient-to-r from-[#0096c7] to-[#005aa0] text-white py-20">
        <div className="container max-w-4xl space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-white/80">
            Residential & Commercial Security
          </p>
          <h1 className="text-4xl font-bold">Custom protection for every property.</h1>
          <p className="text-white/90 leading-relaxed">
            Straight from our legacy site: A-1 Alarm Systems custom builds security
            systems for commercial businesses, residential homeowners, and renters.
            Each system is engineered to match your lifestyle and risk profile, with
            round-the-clock monitoring by local experts.
          </p>
        </div>
      </section>
      <nav className="bg-muted/30 border-b">
        <div className="container py-3 text-sm text-muted-foreground flex items-center gap-2">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-foreground">
            Services
          </Link>
          <span>/</span>
          <span className="text-foreground">Residential & Commercial</span>
        </div>
      </nav>
      <section className="py-16 md:py-24">
        <div className="container space-y-12">
          <Card className="p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">
              Monitoring you can depend on
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Alarms are auto-tested to ensure there is a signal from every sensor to
              the main control panel and to the A-1 Monitoring Control Centre. In an
              emergency, a signal is sent instantly and the proper authorities are
              dispatched—no call centres overseas.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {monitoringHighlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {highlight}
                </li>
              ))}
            </ul>
          </Card>

          <div className="grid gap-8">
            <Card id="residential" className="p-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
                    Residential
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mt-1">
                    Modern smart homes & upscale infills
                  </h3>
                </div>
                <Link href="/store?type=residential">
                  <Button variant="outline" className="rounded-full px-4 py-2">
                    Design for My Home
                  </Button>
                </Link>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                From starter condos to custom estates, we combine hardwired DSC systems
                with wireless PowerG peripherals and Resideo automation to cover every
                entry, garage, and smart device.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    Why homeowners choose wired
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {wiredBenefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    Why homeowners choose wireless
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {wirelessBenefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground border-t border-border pt-4">
                {residentialHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button className="mt-4">Talk to a Home Specialist</Button>
              </Link>
            </Card>

            <Card id="commercial" className="p-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
                    Commercial
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mt-1">
                    Offices, retail, light industrial, and multi-site
                  </h3>
                </div>
                <Link href="/store?type=commercial">
                  <Button variant="outline" className="rounded-full px-4 py-2">
                    Configure My Facility
                  </Button>
                </Link>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Businesses rely on hybrid wiring, access control, analytics-driven
                cameras, and managed networking. We coordinate after-hours installs and
                provide opening/closing reports for compliance.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {commercialHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button className="mt-4">Talk to a Commercial Specialist</Button>
              </Link>
            </Card>
          </div>

          <Card className="p-8 space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Why it matters</h3>
            <p className="text-muted-foreground leading-relaxed">
              Beyond safety, a professionally installed security system can increase
              property value and lower insurance premiums. The legacy site reminded
              visitors that “there’s no price on safety”—and we still believe it.
            </p>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
}
