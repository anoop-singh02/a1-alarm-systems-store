import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

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

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Wired Systems</h3>
              <p className="text-muted-foreground leading-relaxed">
                Components such as sensors and the main control panel are connected
                via hard wiring. Wired systems offer proven reliability and support
                advanced devices.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {wiredBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Wireless Systems</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ideal for renters or finished spaces, wireless systems require minimal
                drilling and work even without a home phone line. They can be taken
                apart and moved with you.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {wirelessBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {benefit}
                  </li>
                ))}
              </ul>
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
