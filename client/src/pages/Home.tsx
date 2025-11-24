import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/SiteHeader";
import {
  Award,
  Camera,
  ChevronRight,
  Home as HomeIcon,
  Shield,
  Volume2,
  Zap,
} from "lucide-react";
import { Link } from "wouter";

const assetPath = (file: string) =>
  `${import.meta.env.BASE_URL}${file.replace(/^\/+/, "")}`;

export default function HomePage() {
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
      <SiteHeader currentPage="home" />

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
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            © {new Date().getFullYear()} A-1 Alarm Systems Inc. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
