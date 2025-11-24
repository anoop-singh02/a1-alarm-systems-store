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
} from "lucide-react";

const assetPath = (file: string) =>
  `${import.meta.env.BASE_URL}${file.replace(/^\/+/, "")}`;

const homeHref = import.meta.env.BASE_URL || "/";

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
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Call Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/80 text-white py-20 md:py-32">
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
                Rest assured your safe with us. We're a locally owned and
                operated company dedicated to 100% customer satisfaction for
                over 20 years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  Free Consultation
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Learn More
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
