import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Shield,
  Camera,
  Home as HomeIcon,
  Zap,
  Volume2,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Award,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import { useMemo, useState } from "react";

const assetPath = (file: string) =>
  `${import.meta.env.BASE_URL}${file.replace(/^\/+/, "")}`;

const homeHref = import.meta.env.BASE_URL || "/";
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Store", href: "#store" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(value);

export default function HomePage() {
  const [propertyType, setPropertyType] = useState<"residential" | "commercial">("residential");
  const [squareFootage, setSquareFootage] = useState(2200);
  const [indoorCameras, setIndoorCameras] = useState(3);
  const [outdoorCameras, setOutdoorCameras] = useState(2);
  const [audioZones, setAudioZones] = useState(2);
  const [automation, setAutomation] = useState(true);
  const [monitoring, setMonitoring] = useState(true);

  const estimatedCost = useMemo(() => {
    const baseInstall = squareFootage * (propertyType === "commercial" ? 0.18 : 0.12);
    const cameraCost = indoorCameras * 220 + outdoorCameras * 260;
    const automationCost = automation ? 450 : 0;
    const audioCost = audioZones * 175;
    const subtotal = baseInstall + cameraCost + automationCost + audioCost;
    const multiplier = propertyType === "commercial" ? 1.2 : 1;
    return Math.round(subtotal * multiplier);
  }, [automation, audioZones, indoorCameras, outdoorCameras, propertyType, squareFootage]);

  const monthlyCost = useMemo(() => {
    if (!monitoring) return 0;
    return propertyType === "commercial" ? 89 : 59;
  }, [monitoring, propertyType]);

  const coverageRating = useMemo(() => {
    const coverage = indoorCameras + outdoorCameras;
    if (coverage >= 7) return "Comprehensive";
    if (coverage >= 4) return "Balanced";
    return "Core Essentials";
  }, [indoorCameras, outdoorCameras]);

  const services = [
    {
      icon: Shield,
      title: "Alarm Systems",
      description:
        "Custom-built security systems tailored to your unique needs and requirements.",
      image: assetPath("service-alarm.png"),
    },
    {
      icon: Camera,
      title: "Video Surveillance",
      description:
        "Advanced surveillance solutions for residential and commercial properties.",
      image: assetPath("service-video.png"),
    },
    {
      icon: HomeIcon,
      title: "Home Automation",
      description:
        "Smart home integration for enhanced comfort and security control.",
      image: assetPath("service-home.png"),
    },
    {
      icon: Zap,
      title: "Central Vacuum",
      description:
        "Professional central vacuum cleaning systems for modern homes.",
      image: assetPath("service-vacuum.png"),
    },
    {
      icon: Volume2,
      title: "Sound Systems",
      description:
        "High-quality in-home audio systems for entertainment and ambiance.",
      image: assetPath("service-sound.png"),
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
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a
            href={homeHref}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-foreground">
              A-1 Alarm Systems
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button className="rounded-full bg-[#0096c7] hover:bg-[#0077a8] text-white px-6 py-2 text-sm">
            Get Quote
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-[#0096c7] via-[#0080c1] to-[#005aa0] text-white py-20 md:py-32"
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
                <Button
                  size="lg"
                  className="bg-white text-[#0065a3] hover:bg-white/90 font-semibold"
                >
                  Free Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Design Your System
                </Button>
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
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 md:py-24 bg-muted/30">
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
      <section id="services" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive security and home automation solutions for
              residential and commercial properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all group border-0 bg-white"
                >
                  <div className="h-48 bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                      Learn more <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-muted/30">
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
                  price guarantee.
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
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
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
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
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

      {/* Configurator Section */}
      <section
        id="store"
        className="py-16 md:py-24 bg-gradient-to-b from-white to-muted/30"
      >
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wide text-primary font-semibold mb-3">
              Design Your Security System
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Design Your Perfect Security System
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Use our interactive tool to plan your layout, compare packages,
              and understand how different options impact pricing before we
              finalize your on-site quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
            <Card className="p-8 border border-primary/10 bg-white shadow-lg">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-primary font-semibold">
                        Step 1
                      </p>
                      <h3 className="text-xl font-semibold text-foreground">
                        Property Type
                      </h3>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Choose the space you’re securing
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { id: "residential", label: "Residential" },
                      { id: "commercial", label: "Commercial" },
                    ].map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() =>
                          setPropertyType(option.id as "residential" | "commercial")
                        }
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors border ${
                          propertyType === option.id
                            ? "bg-[#0096c7] text-white border-[#0096c7]"
                            : "bg-white text-muted-foreground border-border hover:border-primary/40"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      Square Footage
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {squareFootage.toLocaleString()} sq. ft.
                    </span>
                  </div>
                  <input
                    type="range"
                    min={800}
                    max={6000}
                    step={100}
                    value={squareFootage}
                    onChange={(event) => setSquareFootage(Number(event.target.value))}
                    className="w-full accent-[#0096c7]"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>800</span>
                    <span>6,000</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">Indoor Cameras</h3>
                      <span className="text-sm text-muted-foreground">
                        {indoorCameras}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={8}
                      value={indoorCameras}
                      onChange={(event) => setIndoorCameras(Number(event.target.value))}
                      className="w-full accent-[#0096c7]"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>1</span>
                      <span>8</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">Outdoor Cameras</h3>
                      <span className="text-sm text-muted-foreground">
                        {outdoorCameras}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={8}
                      value={outdoorCameras}
                      onChange={(event) => setOutdoorCameras(Number(event.target.value))}
                      className="w-full accent-[#0096c7]"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>0</span>
                      <span>8</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">Audio Zones</h3>
                    <span className="text-sm text-muted-foreground">
                      {audioZones} rooms
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={6}
                    value={audioZones}
                    onChange={(event) => setAudioZones(Number(event.target.value))}
                    className="w-full accent-[#0096c7]"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>0</span>
                    <span>6</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {[{ label: "Smart Automation", state: automation, setter: setAutomation }, { label: "24/7 Monitoring", state: monitoring, setter: setMonitoring }].map(
                    (toggle) => (
                      <button
                        key={toggle.label}
                        type="button"
                        onClick={() => toggle.setter((prev) => !prev)}
                        className={`flex items-center justify-between rounded-2xl border px-4 py-3 transition ${
                          toggle.state
                            ? "border-[#0096c7] bg-[#0096c7]/10"
                            : "border-border hover:border-primary/40"
                        }`}
                      >
                        <span className="text-sm font-semibold text-foreground">
                          {toggle.label}
                        </span>
                        <span
                          className={`text-xs font-bold uppercase ${
                            toggle.state ? "text-[#0096c7]" : "text-muted-foreground"
                          }`}
                        >
                          {toggle.state ? "Included" : "Add"}
                        </span>
                      </button>
                    )
                  )}
                </div>
              </div>
            </Card>

            <div className="space-y-6">
              <Card className="p-6 bg-white border border-primary/10 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">System Summary</h3>
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">
                    Estimator
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">
                        Estimated Install
                      </p>
                      <p className="text-3xl font-bold text-foreground">
                        {formatCurrency(estimatedCost)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">
                        Monthly Monitoring
                      </p>
                      <p className="text-xl font-semibold text-foreground">
                        {monthlyCost ? formatCurrency(monthlyCost) : "Optional"}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {[
                      { label: "Total Cameras", value: indoorCameras + outdoorCameras },
                      { label: "Coverage", value: coverageRating },
                      { label: "Automation", value: automation ? "Enabled" : "None" },
                      {
                        label: "Audio Zones",
                        value: audioZones ? `${audioZones} rooms` : "Not added",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-xl bg-muted/50 px-4 py-3 border border-border"
                      >
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">
                          {item.label}
                        </p>
                        <p className="font-semibold text-foreground">{item.value}</p>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-[#0096c7] hover:bg-[#0077a8] text-white">
                    Send Configuration with Quote
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Final pricing is confirmed during your on-site assessment. This
                    estimate helps us understand your goals before visiting.
                  </p>
                </div>
              </Card>
              <Card className="p-6 bg-white border border-primary/10 shadow-md">
                <h3 className="text-lg font-semibold mb-4">Why Build With Us</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {[
                    "Guided design wizard for homes and businesses",
                    "Instant configuration summary you can email or print",
                    "Flexible packages for security, automation, and networking",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm uppercase tracking-wide text-primary font-semibold mb-3">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Answers to common questions about our systems, pricing, and
              service process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "How soon can you install a system?",
                answer:
                  "Most residential projects can be scheduled within 1–2 weeks after the site assessment.",
              },
              {
                question: "Do you offer financing or leasing?",
                answer:
                  "Yes, we provide flexible payment plans and can bundle monitoring into a monthly rate.",
              },
              {
                question: "Can I monitor my system from my phone?",
                answer:
                  "All of our packages include secure mobile access with live video and instant alerts.",
              },
              {
                question: "What happens if I move?",
                answer:
                  "We can relocate your equipment or design a new system for the next owner. Contracts are cancellable with 30 days notice.",
              },
            ].map((item) => (
              <Card
                key={item.question}
                className="p-6 border border-primary/10 bg-white"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {item.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 text-white bg-gradient-to-r from-[#0096c7] to-[#005aa0]">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Secure Your Property?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Contact us today for a free consultation and let our experts design
            the perfect security solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#0065a3] hover:bg-white/90 font-semibold">
              Get Free Quote
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 md:py-24 bg-muted/30"
      >
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wide text-primary font-semibold mb-3">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              We're here to help with all your security needs
            </h2>
            <p className="text-lg text-muted-foreground">
              Reach out through any of these channels or send us a quick
              message.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border border-primary/10 bg-white">
              <div className="space-y-6">
                {[
                  {
                    title: "Phone",
                    lines: ["(403) 258-3749", "Toll-Free: 1-855-258-3749"],
                    icon: Phone,
                  },
                  {
                    title: "Email",
                    lines: ["info@a1alarm.ca", "We respond within 24 hours"],
                    icon: Mail,
                  },
                  {
                    title: "Location",
                    lines: ["Calgary, Alberta", "Serving Calgary and area"],
                    icon: MapPin,
                  },
                  {
                    title: "Business Hours",
                    lines: [
                      "Mon–Fri: 8 AM - 6 PM",
                      "Sat: 9 AM - 4 PM, Sun closed",
                    ],
                    icon: MessageSquare,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {item.title}
                        </h3>
                        {item.lines.map((line) => (
                          <p
                            key={line}
                            className="text-sm text-muted-foreground leading-tight"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
            <Card className="p-8 border border-primary/10 bg-white">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Send Us a Message
              </h3>
              <form className="space-y-4">
                {["Name", "Email", "Phone"].map((label) => (
                  <div key={label} className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      {label}
                    </label>
                    <input
                      type="text"
                      placeholder={`Enter your ${label.toLowerCase()}`}
                      className="w-full rounded-lg border border-border bg-muted/30 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                ))}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project"
                    className="w-full rounded-lg border border-border bg-muted/30 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                </div>
                <Button className="w-full bg-[#0096c7] hover:bg-[#0077a8] text-white">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6" />
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
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            © {new Date().getFullYear()} A-1 Alarm Systems Inc. All rights
            reserved.
          </div>
        </div>
      </footer>
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Secure Your Property?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Contact us today for a free consultation with no obligation. Our
              team is ready to help you find the perfect security solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                Schedule Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Call (403) 258-3749
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Multiple ways to reach our team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-0 bg-white hover:shadow-lg transition-shadow">
              <Phone className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Phone</h3>
              <p className="text-muted-foreground mb-2">(403) 258-3749</p>
              <p className="text-sm text-muted-foreground">
                Toll Free: 1 (855) 258-3749
              </p>
            </Card>

            <Card className="p-8 text-center border-0 bg-white hover:shadow-lg transition-shadow">
              <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground">a1alarm@hotmail.com</p>
            </Card>

            <Card className="p-8 text-center border-0 bg-white hover:shadow-lg transition-shadow">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Address</h3>
              <p className="text-muted-foreground text-sm">
                20 - 5660 10 ST NE
                <br />
                Calgary, AB T2E 8W7
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6" />
                <span className="font-bold">A-1 Alarm Systems</span>
              </div>
              <p className="text-sm text-white/70">
                Your trusted security partner for over 20 years.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Alarm Systems
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Video Surveillance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Home Automation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-sm text-white/70 mb-2">(403) 258-3749</p>
              <p className="text-sm text-white/70">a1alarm@hotmail.com</p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-center text-sm text-white/70">
              © 2024 A-1 Alarm Systems Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
