import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/SiteHeader";
import {
  Award,
  Camera,
  CheckCircle2,
  ChevronRight,
  Home as HomeIcon,
  Shield,
  Volume2,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";

const assetPath = (file: string) =>
  `${import.meta.env.BASE_URL}${file.replace(/^\/+/, "")}`;

const testimonials = [
  {
    quote:
      "We switched to A-1 Alarm Systems last year and the installation team was outstanding. Monitoring has been rock solid.",
    author: "Derek P.",
    role: "Calgary Retail Owner",
  },
  {
    quote:
      "Their custom automation package streamlined everything in our office. Support is fast and friendly.",
    author: "Kelly R.",
    role: "Operations Manager",
  },
];

const partners = ["DSC", "Honeywell", "Axis", "Yale"];

const stats = [
  { label: "Years in Calgary", value: "20+" },
  { label: "24/7 Monitoring", value: "ULC" },
  { label: "Contract Exit", value: "30 Days" },
  { label: "Customer Satisfaction", value: "100%" },
];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", "services", "about", "trust"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: "-30% 0px -50% 0px",
        },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const services = [
    {
      title: "Alarm Systems",
      description:
        "Custom-built security systems tailored to Calgary homes and businesses.",
      icon: Shield,
      highlights: [
        "Hardwired & wireless hybrids",
        "Keypad + mobile app control",
        "Professional installation & training",
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
        "Z-Wave & Wi-Fi integrations",
        "Scenes for arrive/away routines",
        "Voice assistant compatibility",
      ],
    },
    {
      title: "Central Vacuum",
      description:
        "Built-in cleaning systems designed for modern builds and renovations.",
      icon: Zap,
      highlights: [
        "Powerful low-noise units",
        "Garage & high ceiling kits",
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
        "Discreet in-ceiling speakers",
        "Custom control keypads",
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
      <SiteHeader currentPage="home" activeAnchor={activeSection} />

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
                    Free Consultation
                  </Button>
                </Link>
                <Link href="/store">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    Design Your System
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hidden md:block">
              <img
                src={assetPath("security-building.png")}
                alt="Commercial Security System"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="bg-white/10 border-white/20 text-white text-center py-6 backdrop-blur-sm"
              >
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-xs uppercase tracking-wide">
                  {stat.label}
                </p>
              </Card>
            ))}
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
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Drawing from our legacy site and decades of local installs, these are
              the solutions Calgary families and businesses rely on us for.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="h-full border border-slate-200 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                          Service {String(index + 1).padStart(2, "0")}
                        </p>
                        <h3 className="text-xl font-semibold text-foreground">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {service.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button
                        variant="ghost"
                        className="mt-6 px-0 text-primary hover:text-primary"
                      >
                        Learn more
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-muted/30 scroll-mt-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                About A-1 Alarm Systems
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We are a locally owned and operated company with one goal in
                  mind: 100% customer satisfaction. We have sustained our
                  business for over 20 years by providing protection you can
                  trust and rely on.
                </p>
                <p>
                  We don't believe in a standard alarm system for all of our
                  service installations. Our systems are custom built with each
                  customer's unique individual needs and requirements in mind.
                </p>
                <p>
                  Our contracts can be canceled with just 30 days notice. We're
                  ensuring a low-risk investment for our consumers with a low
                  price guarantee, exactly as promised on our legacy site.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <p className="text-sm text-muted-foreground">
                    Years of Experience
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">
                    Customer Satisfaction
                  </p>
                </div>
              </div>
              <div className="mt-8 space-y-3">
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
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Custom Solutions
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Tailored security systems for your specific needs
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Professional Service
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Expert installation and ongoing support
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Responsive Support
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Always available when you need us
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="trust" className="py-16 md:py-24 bg-white">
        <div className="container grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-wide text-primary font-semibold mb-3">
              Testimonials
            </p>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Trusted by Calgary homeowners and businesses
            </h2>
            <div className="space-y-6">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.author}
                  className="p-6 border border-primary/10 bg-muted/20"
                >
                  <p className="text-lg text-foreground mb-4 leading-relaxed">
                    “{testimonial.quote}”
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-wide text-primary font-semibold mb-3">
              Partners & Certifications
            </p>
            <div className="grid grid-cols-2 gap-4">
              {partners.map((partner) => (
                <Card
                  key={partner}
                  className="p-6 border border-dashed border-primary/30 text-center text-lg font-semibold text-muted-foreground"
                >
                  {partner}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6" aria-hidden="true" />
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
            <p>
              © {new Date().getFullYear()} A-1 Alarm Systems Inc. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
