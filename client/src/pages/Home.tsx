import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import {
  Award,
  CalendarCheck2,
  CheckCircle2,
  ChevronRight,
  Clock4,
  MapPin,
  ShieldCheck,
  Smile,
} from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";

const assetPath = (file: string) =>
  `${import.meta.env.BASE_URL}${file.replace(/^\/+/, "")}`;

const stats = [
  { label: "Years in Calgary", value: 20, suffix: "+", icon: ShieldCheck },
  { label: "24/7 Monitoring", display: "ULC Listed", icon: Clock4 },
  { label: "Contract Exit", value: 30, suffix: " Days", icon: CalendarCheck2 },
  { label: "Customer Satisfaction", value: 100, suffix: "%", icon: Smile },
];

function CountUp({ value, suffix }: { value: number; suffix?: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    let animationFrame: number;
    const duration = 1200;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCurrent(Math.round(progress * value));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [value]);

  return (
    <span>
      {current}
      {suffix ?? ""}
    </span>
  );
}

export default function HomePage() {

  const services = [
    {
      title: "Alarm Systems",
      description:
        "Custom A-1 packages built on DSC PowerSeries NEO and Honeywell ProSeries platforms.",
      highlights: [
        "Encrypted PowerG sensors + LTE / Wi-Fi dual-path communicators",
        "Honeywell Total Connect and DSC Alarm.com app integrations",
        "ULC-listed monitoring with 30-day cancellation & labour warranty",
      ],
    },
    {
      title: "Video Surveillance",
      description:
        "Axis and Hikvision 4K deterrent cameras with NDAA-compliant recording.",
      highlights: [
        "Smart IR domes, turret cameras, and motorized zoom lenses",
        "NVRs with RAID storage plus cloud clips for mobile alerts",
        "AI analytics for line-crossing, loitering, and license plates",
      ],
    },
    {
      title: "Home Automation",
      description:
        "Resideo, Control4, and Brilliant interfaces that unify lighting, locks, and HVAC.",
      highlights: [
        "Z-Wave 800 and Matter-ready device support",
        "Arrive/Away scenes with Lutron, Yale, and Schlage partners",
        "Voice assistant compatibility plus custom dashboards",
      ],
    },
    {
      title: "Central Vacuum",
      description:
        "Cyclo Vac and DrainVac systems engineered for modern builds and retrofits.",
      highlights: [
        "Quiet 600+ air-watt power units with HEPA filtration",
        "Hide-A-Hose retractable tubing and garage kits",
        "Annual maintenance programs & bagless conversions",
      ],
    },
    {
      title: "Sound Systems",
      description:
        "Sonos, Denon HEOS, and Origin Acoustics audio plans for homes and commercial venues.",
      highlights: [
        "Multi-zone DSP tuning with architectural and pendant speakers",
        "Conference room + retail paging presets",
        "Rack design, surge protection, and remote monitoring",
      ],
    },
  ];

  const whyUs = [
    {
      number: "1",
      title: "20+ Years Experience",
      description:
        "A-1 Alarm Systems Inc offers superior protection with over 20 years of proven expertise.",
    },
    {
      number: "2",
      title: "Affordable & Quality",
      description:
        "We believe security is a right. Low prices with quality installation and the service you deserve.",
    },
    {
      number: "3",
      title: "Easy Next Steps",
      description:
        "Contact us at (403) 258-3749 for your free consultation with no obligation.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader currentPage="home" />

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-[#0096c7] via-[#0080c1] to-[#005aa0] text-white py-20 md:py-32 scroll-mt-24"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Protection You Can Count On
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Rest assured you're safe with us. We're a locally owned and
                operated Calgary company dedicated to 100% customer satisfaction
                for over 20 years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-[#0065a3] hover:bg-white/90 font-semibold"
                  >
                    Talk to an Expert
                  </Button>
                </Link>
                <Link href="/store">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    Design Your System Now
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-10 md:mt-0 w-full">
              <div className="relative w-full rounded-2xl shadow-2xl overflow-hidden bg-black aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9]">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src={assetPath("hero-security.mp4")}
                  poster={assetPath("security-building.png")}
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label="A-1 Alarm Systems hero background video"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={stat.label}
                  className="relative overflow-hidden bg-white/10 border-white/20 text-white text-center py-6 backdrop-blur-md"
                >
                  <span className="absolute top-3 left-3 h-2 w-2 rounded-full bg-cyan-200 animate-pulse" />
                  <div className="relative mx-auto mb-3 flex h-12 w-12 items-center justify-center">
                    <span className="absolute h-full w-full rounded-full bg-white/10 animate-ping" />
                    <Icon className="relative h-6 w-6" aria-hidden="true" />
                  </div>
                  {typeof stat.value === "number" ? (
                    <p className="text-3xl font-bold">
                      <CountUp value={stat.value} suffix={stat.suffix} />
                    </p>
                  ) : (
                    <p className="text-2xl font-bold">{stat.display}</p>
                  )}
                  <p className="text-xs uppercase tracking-wide mt-2">
                    {stat.label}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 md:py-24 bg-muted/30 scroll-mt-24">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {whyUs.map((item, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-shadow border-0 bg-white"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 scroll-mt-24">
        <div className="container grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">
                Comprehensive Services
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                One partner for alarms, video, automation, and more
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl lg:max-w-none">
                We engineer complete ecosystems—pairing DSC/Honeywell alarms with 4K
                cameras, automation, vacuums, and audio across Calgary homes and
                businesses.
              </p>
            </div>
            <div className="space-y-4">
              {services.map((service) => (
                <Card
                  key={service.title}
                  className="flex flex-col gap-4 p-5 border border-border/70 bg-white shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-semibold">
                      {service.title
                        .split(" ")
                        .map((word) => word[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="relative mt-0.5 flex h-4 w-4 items-center justify-center">
                          <span className="absolute h-4 w-4 rounded-full border border-primary/40 animate-ping" />
                          <span className="h-2 w-2 rounded-full bg-primary"></span>
                        </span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10">
            <img
              src={assetPath("services-collage.jpg")}
              alt="Collage showing security camera, smart home control, and central vacuum inlet"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/15 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-muted/30 scroll-mt-24">
        <div className="container grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-3">
              About A-1
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Proudly protecting Calgary for over 20 years
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We are a locally owned and operated company with one goal in mind:
                100% customer satisfaction. We have sustained our business for over
                two decades by providing protection you can trust and rely on.
              </p>
              <p>
                We do not believe in cookie-cutter security. Every installation is
                planned around your property, lifestyle, and how you prefer to
                manage your system.
              </p>
              <p>
                Our contracts can be canceled with just 30 days notice, backed by a
                low price guarantee—exactly as promised on our legacy site.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <p className="text-sm text-muted-foreground">Years of Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <p className="text-sm text-muted-foreground">
                  Customer Satisfaction
                </p>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-[1.1fr_0.9fr] gap-6">
              <div className="space-y-3">
                {[
                  "Locally owned & operated in Calgary",
                  "30-day cancellation policy with low-price guarantee",
                  "Fully licensed technicians and vetted suppliers",
                  "Custom solutions for residential, commercial, and industrial sites",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20">
                <div className="space-y-4">
                  {[
                    {
                      title: "Custom Solutions",
                      description: "Tailored security for every property type.",
                    },
                    {
                      title: "Professional Service",
                      description: "Expert installation & friendly training.",
                    },
                    {
                      title: "Responsive Support",
                      description: "Local team on call when you need us.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10">
            <img
              src={assetPath("about-calgary.jpg")}
              alt="A-1 Alarm Systems truck parked in a Calgary neighbourhood at sunset"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-black/70 text-white rounded-2xl p-4 flex items-center gap-3 shadow-lg">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
                <MapPin className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                  Calgary Based
                </p>
                <p className="text-sm font-semibold leading-tight">
                  On-site installs across YYC & surrounding area
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
