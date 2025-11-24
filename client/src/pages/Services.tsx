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
      "Custom-built security systems tailored to Calgary homes and businesses.",
    icon: Shield,
    highlights: [
      "DSC and Honeywell panels",
      "Mobile app arm/disarm",
      "Professional installation",
    ],
  },
  {
    title: "Video Surveillance",
    description:
      "Indoor/outdoor cameras with secure recording and remote viewing.",
    icon: Camera,
    highlights: [
      "4K deterrent cameras",
      "Cloud & local storage options",
      "AI analytics for alerts",
    ],
  },
  {
    title: "Home Automation",
    description:
      "Lighting, locks, thermostats, and shades unified under one secure app.",
    icon: HomeIcon,
    highlights: [
      "Arrive/away routines",
      "Smart lock integrations",
      "Voice assistant compatibility",
    ],
  },
  {
    title: "Central Vacuum",
    description:
      "Built-in cleaning systems designed for modern builds and renovations.",
    icon: Zap,
    highlights: [
      "Low-noise units",
      "Garage & workshop kits",
      "Maintenance & repairs",
    ],
  },
  {
    title: "Sound Systems",
    description:
      "High-quality distributed audio for entertainment, boardrooms, and retail.",
    icon: Volume2,
    highlights: [
      "Multi-zone streaming",
      "Discreet speaker installs",
      "Custom control keypads",
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
                    Talk to an expert
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
            <Link href="/residential-commercial-security">
              <Button variant="ghost" className="px-0 text-primary">
                View details <ChevronRight className="ml-2 h-4 w-4" />
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
                Explore options <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
}
