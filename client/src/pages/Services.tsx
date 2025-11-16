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

export default function ServicesPage() {
  const services = [
    {
      icon: Shield,
      title: "Alarm Systems",
      description:
        "Custom-built security systems tailored to your unique needs and requirements.",
      details:
        "Our advanced alarm systems provide 24/7 monitoring and instant alerts. We offer both wireless and hardwired solutions with professional installation and ongoing support.",
      image: "/service-alarm.png",
    },
    {
      icon: Camera,
      title: "Video Surveillance",
      description:
        "Advanced surveillance solutions for residential and commercial properties.",
      details:
        "High-definition cameras with cloud storage, remote viewing capabilities, and intelligent motion detection. Perfect for monitoring your property from anywhere.",
      image: "/service-video.png",
    },
    {
      icon: HomeIcon,
      title: "Home Automation",
      description:
        "Smart home integration for enhanced comfort and security control.",
      details:
        "Control your lights, locks, thermostat, and security systems from your smartphone. Create custom automation routines for maximum convenience and energy efficiency.",
      image: "/service-home.png",
    },
    {
      icon: Zap,
      title: "Central Vacuum",
      description:
        "Professional central vacuum cleaning systems for modern homes.",
      details:
        "Quiet, powerful central vacuum systems that improve air quality and provide convenient whole-home cleaning. Professional installation included.",
      image: "/service-vacuum.png",
    },
    {
      icon: Volume2,
      title: "Sound Systems",
      description:
        "High-quality in-home audio systems for entertainment and ambiance.",
      details:
        "Multi-room audio systems with crystal-clear sound quality. Perfect for whole-home entertainment, parties, or creating the perfect ambiance.",
      image: "/service-sound.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Services Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/80 text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Comprehensive security and home automation solutions for residential and commercial properties
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 border-0 group flex flex-col"
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
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-6 h-6 text-primary" />
                      <h3 className="text-lg font-semibold text-foreground">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                      {service.details}
                    </p>
                    <Link href="/quote">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        Get Quote
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Secure Your Property?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let our experts help you choose the perfect security solution.
          </p>
          <Link href="/quote">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              Get Your Free Quote
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
