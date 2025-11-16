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
import { Link } from "wouter";

export default function HomePage() {
  const services = [
    {
      icon: Shield,
      title: "Alarm Systems",
      description:
        "Custom-built security systems tailored to your unique needs and requirements.",
      image: "/service-alarm.png",
    },
    {
      icon: Camera,
      title: "Video Surveillance",
      description:
        "Advanced surveillance solutions for residential and commercial properties.",
      image: "/service-video.png",
    },
    {
      icon: HomeIcon,
      title: "Home Automation",
      description:
        "Smart home integration for enhanced comfort and security control.",
      image: "/service-home.png",
    },
    {
      icon: Zap,
      title: "Central Vacuum",
      description:
        "Professional central vacuum cleaning systems for modern homes.",
      image: "/service-vacuum.png",
    },
    {
      icon: Volume2,
      title: "Sound Systems",
      description:
        "High-quality in-home audio systems for entertainment and ambiance.",
      image: "/service-sound.png",
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
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/80 text-white py-12 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                Protection You Can Count On
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed">
                Rest assured your safe with us. We're a locally owned and
                operated company dedicated to 100% customer satisfaction for
                over 20 years.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
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

            <div className="w-full flex justify-center">
              <img 
                src="/security-building.png" 
                alt="Commercial Security System" 
                className="w-full max-w-md md:max-w-full h-auto rounded-xl shadow-lg object-contain"
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
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 border-0 group"
                >
                  <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                    {service.image && (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    {!service.image && (
                      <div className="w-full h-full flex items-center justify-center">
                        <Icon className="w-24 h-24 text-primary/30" />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-6 h-6 text-primary" />
                      <h3 className="text-lg font-semibold text-foreground">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
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
                Why Choose A-1 Alarm Systems?
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Award className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Industry Leaders
                    </h3>
                    <p className="text-muted-foreground">
                      Trusted by thousands of residential and commercial clients
                      across the region.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Complete Protection
                    </h3>
                    <p className="text-muted-foreground">
                      From installation to monitoring, we provide comprehensive
                      security solutions.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Zap className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Latest Technology
                    </h3>
                    <p className="text-muted-foreground">
                      We use cutting-edge security systems and smart home
                      integration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="/about-team.png" 
                alt="A-1 Alarm Systems Team" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Your Free Consultation Today
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Contact us to discuss your security needs. Our experts are ready
              to help you find the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                (403) 258-3749
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div>
                <Phone className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-white/80">(403) 258-3749</p>
              </div>
              <div>
                <Mail className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-white/80">info@a1alarm.ca</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-white/80">Calgary, Alberta</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-8">
        <div className="container text-center">
          <p className="text-white/60">
            © 2024 A-1 Alarm Systems Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
