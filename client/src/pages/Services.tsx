import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Camera,
  Home as HomeIcon,
  Zap,
  Volume2,
  ChevronRight,
} from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    title: "Alarm Systems",
    description:
      "Custom A-1 alarm packages using DSC PowerSeries NEO and Honeywell ProSeries hardware.",
    icon: Shield,
    highlights: [
      "PowerG encrypted sensors + LTE/Wi-Fi dual-path radios",
      "Resideo Total Connect and Alarm.com mobile control",
      "ULC monitoring with cellular backup & 30-day cancellation",
    ],
  },
  {
    title: "Video Surveillance",
    description:
      "NDAA-compliant Axis + Hikvision 4K cameras with secure recording and analytics.",
    icon: Camera,
    highlights: [
      "Motorized zoom lenses + smart IR deterrence",
      "Hybrid NVRs with RAID + encrypted cloud backups",
      "AI line-crossing, loitering, and license plate detection",
    ],
  },
  {
    title: "Home Automation",
    description:
      "Resideo, Control4, and Brilliant dashboards connecting lighting, locks, HVAC, and shades.",
    icon: HomeIcon,
    highlights: [
      "Z-Wave 800 / Matter-ready scenes for arrive & away",
      "Lutron, Yale, Schlage, and August integrations",
      "Voice assistant + mobile widgets with audit trails",
    ],
  },
  {
    title: "Central Vacuum",
    description:
      "Cyclo Vac and DrainVac central vacuums sized for new builds and retrofits.",
    icon: Zap,
    highlights: [
      "600+ air-watt quiet motors w/ HEPA filtration",
      "Hide-A-Hose retractable + garage service kits",
      "Bagless conversions + annual tune-ups",
    ],
  },
  {
    title: "Sound Systems",
    description:
      "Sonos, Denon HEOS, and Origin Acoustics distributed audio engineered by our designers.",
    icon: Volume2,
    highlights: [
      "Multi-zone DSP + architectural/pendant speakers",
      "Boardroom conferencing + retail paging presets",
      "Equipment racks with surge + remote diagnostics",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader currentPage="services" />
      <section className="bg-gradient-to-r from-[#0096c7] to-[#005aa0] text-white py-20">
        <div className="container max-w-3xl text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-white/80">
            Services
          </p>
          <h1 className="text-4xl font-bold">Full-service security partner.</h1>
          <p className="text-white/90">
            From the offerings on our old site to today’s smart experiences, we
            provide everything you need to secure and automate your property.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container grid gap-8 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">
                      {service.title}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button variant="ghost" className="px-0 text-primary">
                    Talk to an Expert
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            );
          })}
        </div>
        <div className="container mt-12 grid gap-8 md:grid-cols-2">
          <Card className="p-6 space-y-3">
            <h3 className="text-xl font-semibold text-foreground">
              Residential & Commercial Security
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Dive deeper into wired vs. wireless installs, monitoring, and
              property-value benefits carried forward from our legacy site.
            </p>
            <Link href="/residential-commercial-security#residential">
              <Button variant="ghost" className="px-0 text-primary">
                Talk to a Residential Expert{" "}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>
          <Card className="p-6 space-y-3">
            <h3 className="text-xl font-semibold text-foreground">
              Security Options
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Explore every sensor and add-on—from video monitoring to panic
              buttons—relisted from the original site with modern context.
            </p>
            <Link href="/security-options">
              <Button variant="ghost" className="px-0 text-primary">
                Browse Every Device <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
}
