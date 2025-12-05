import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

const options = [
  {
    title: "Hard Wired Systems",
    detail:
      "DSC PowerSeries NEO panels with supervised loops and metal cans for maximum tamper resistance—ideal for larger homes and UL commercial installs.",
  },
  {
    title: "Wireless / Hybrid Systems",
    detail:
      "PowerG encrypted sensors with 2 km range, LTE + Wi-Fi dual-path communicators, and relocatable hardware perfect for renters or heritage spaces.",
  },
  {
    title: "Video Monitoring",
    detail:
      "Axis, Hikvision, and Rhombus 4K cameras with smart IR, motorized focus, and NDAA-compliant NVRs that hold 30+ days of RAID-protected footage.",
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
      "Dual-tech PIR/microwave detectors with pet immunity, ceiling 360° coverage, and people-counting analytics for showrooms.",
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

export default function SecurityOptionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader currentPage="securityOptions" />
      <section className="bg-gradient-to-r from-[#0096c7] to-[#005aa0] text-white py-20">
        <div className="container max-w-4xl space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-white/80">
            Security Options
          </p>
          <h1 className="text-4xl font-bold">Build the perfect system.</h1>
          <p className="text-white/90 leading-relaxed">
            The original A-1 site listed every option available. We’ve refreshed that
            list so you can mix and match the components that make sense for your
            property.
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
          <span className="text-foreground">Security Options</span>
        </div>
      </nav>
      <section className="py-16 md:py-24">
        <div className="container grid gap-6 md:grid-cols-2">
          {options.map((option) => (
            <Card key={option.title} className="p-6 space-y-3">
              <h2 className="text-lg font-semibold text-foreground">
                {option.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {option.detail}
              </p>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
