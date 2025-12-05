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
  Check,
} from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";

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

const packageTiers = [
  {
    id: "basic",
    name: "Basic",
    price: "$49/mo",
    setup: "Install from $899",
    description: "Essential protection for condos & starter homes.",
    popular: false,
  },
  {
    id: "standard",
    name: "Standard",
    price: "$69/mo",
    setup: "Install from $1,499",
    description: "Balanced coverage with automation + video.",
    popular: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "$99/mo",
    setup: "Install from $2,499",
    description: "Full deterrence for luxury homes & businesses.",
    popular: false,
  },
];

const packageFeatures: Array<{
  label: string;
  basic: boolean;
  standard: boolean;
  premium: boolean;
}> = [
  { label: "ULC 24/7 Monitoring", basic: true, standard: true, premium: true },
  { label: "DSC/Honeywell Smart Panel", basic: true, standard: true, premium: true },
  { label: "PowerG Sensors on Every Entry", basic: true, standard: true, premium: true },
  { label: "4K Exterior Cameras", basic: false, standard: true, premium: true },
  { label: "Interior Dome Cameras", basic: false, standard: true, premium: true },
  { label: "Smart Lock + Thermostat", basic: false, standard: true, premium: true },
  { label: "Automation Scenes & App Control", basic: false, standard: true, premium: true },
  { label: "Dedicated Video Analytics", basic: false, standard: false, premium: true },
  { label: "Professional Audio & Vacuum Integration", basic: false, standard: false, premium: true },
  { label: "Priority Technician Dispatch", basic: false, standard: false, premium: true },
];

const securityOptions = [
  {
    title: "Hardwired Systems",
    detail:
      "DSC PowerSeries NEO panels with supervised loops and metal enclosures for maximum tamper resistance—ideal for larger homes and UL commercial installs.",
  },
  {
    title: "Wireless / Hybrid Systems",
    detail:
      "PowerG encrypted sensors with 2 km range, LTE + Wi-Fi dual-path communicators, and relocatable hardware perfect for renters or heritage spaces.",
  },
  {
    title: "Video Monitoring",
    detail:
      "Axis, Hikvision, and Rhombus 4K cameras with smart IR, motorized focus, and NDAA-compliant NVRs that store 30+ days of RAID-protected footage.",
  },
  {
    title: "Internet Monitoring",
    detail:
      "Resideo Total Connect and Alarm.com secure tunnels give you live dashboards, push notifications, and audit logs from anywhere.",
  },
  {
    title: "Cellular + Ethernet Backup",
    detail:
      "Telguard LTE-M failover radios plus Ethernet keep alarms online even when phone or ISP service drops, meeting insurance and ULC requirements.",
  },
  {
    title: "Motion & Occupancy Sensors",
    detail:
      "Dual-tech PIR/microwave detectors with pet immunity, 360° ceiling coverage, and people-counting analytics for showrooms.",
  },
  {
    title: "Life-Safety Sensors",
    detail:
      "Monitored smoke, heat, and carbon monoxide devices that cut HVAC, notify responders, and log compliance reports automatically.",
  },
  {
    title: "Environmental Sensors",
    detail:
      "Water leak, sump, freeze, and humidity probes tied to text/email alerts—protecting mechanical rooms, cold storage, and luxury finishes.",
  },
  {
    title: "Glass Break & Perimeter Sensors",
    detail:
      "Acoustic glass detectors, outdoor beams, and shock contacts covering storefront mullions, bay doors, and fenced yards.",
  },
  {
    title: "Audibles & Duress Devices",
    detail:
      "12V outdoor sirens rated for -40°C winters plus wearable and under-desk panic buttons that tie straight into guard dispatch.",
  },
];

type ServicesPageProps = {
  initialSection?: "security-options";
  headerPageOverride?: "services" | "securityOptions";
};

export default function ServicesPage({
  initialSection,
  headerPageOverride = "services",
}: ServicesPageProps = {}) {
  useEffect(() => {
    if (!initialSection) return;
    const timeout = window.setTimeout(() => {
      const el = document.getElementById(initialSection);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 60);
    return () => window.clearTimeout(timeout);
  }, [initialSection]);
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader currentPage={headerPageOverride} />
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
      <nav className="bg-muted/30 border-b">
        <div className="container py-3 text-sm text-muted-foreground flex items-center gap-2">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">Services</span>
        </div>
      </nav>
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
      <section className="py-16 bg-muted/40">
        <div className="container space-y-8">
          <div className="text-center space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">
              Compare Packages
            </p>
            <h2 className="text-3xl font-bold text-foreground">
              Pick a starting point, then customize every detail
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              All packages include installation by licensed A-1 technicians, lifetime
              service support, and our 30-day cancellation flexibility. Choose the
              tier that fits, then jump into the System Designer to tailor it further.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-separate border-spacing-y-3">
              <thead>
                <tr>
                  <th className="text-left text-xs uppercase tracking-wider text-muted-foreground">
                    Features
                  </th>
                  {packageTiers.map((tier) => (
                    <th key={tier.id} className="text-center">
                      <div className="relative inline-flex flex-col items-center gap-1 rounded-2xl border bg-white px-4 py-3 shadow-sm">
                        {tier.popular && (
                          <span className="absolute -top-3 text-[10px] uppercase tracking-widest bg-primary text-white px-2 py-1 rounded-full">
                            Most Popular
                          </span>
                        )}
                        <p className="text-sm font-semibold">{tier.name}</p>
                        <p className="text-2xl font-bold text-foreground">{tier.price}</p>
                        <p className="text-xs text-muted-foreground">{tier.setup}</p>
                        <p className="text-xs text-muted-foreground">{tier.description}</p>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {packageFeatures.map((feature) => (
                  <tr key={feature.label} className="bg-white">
                    <td className="p-4 text-sm font-medium text-foreground border border-border rounded-l-2xl">
                      {feature.label}
                    </td>
                    {(["basic", "standard", "premium"] as const).map((tier) => {
                      const included = feature[tier];
                      return (
                        <td
                          key={`${feature.label}-${tier}`}
                          className="p-4 text-center border border-border"
                        >
                          {included ? (
                            <Check className="inline-block w-5 h-5 text-primary" />
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
                <tr>
                  <td className="p-4 text-sm font-medium text-foreground border border-border rounded-l-2xl">
                    Ready to tailor your package?
                  </td>
                  {packageTiers.map((tier) => (
                    <td
                      key={`${tier.id}-cta`}
                      className="p-4 text-center border border-border rounded-r-2xl"
                    >
                      <Link href={`/store?type=${tier.id === "premium" ? "commercial" : "residential"}`}>
                        <Button size="sm" className="bg-[#0096c7] hover:bg-[#0077a8] text-white">
                          Customize
                        </Button>
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section
        id="security-options"
        className="py-16 md:py-24 bg-background border-t border-border/60 scroll-mt-24"
      >
        <div className="container space-y-6">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">
              Security Options
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Mix and match every device to fit your project
            </h2>
            <p className="text-muted-foreground">
              These are the core components we specify on Calgary installs. Use them as
              a checklist when customizing your package or stepping through the System
              Designer.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {securityOptions.map((option) => (
              <Card
                key={option.title}
                className="p-6 border border-border/80 bg-white shadow-sm space-y-2"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {option.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {option.detail}
                </p>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link href="/store">
              <Button className="bg-[#0096c7] hover:bg-[#0077a8] text-white">
                Customize These Options
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
