import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Users, Zap, Heart, ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver the highest quality security solutions and customer service.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We're proud to serve and protect our local community for over 20 years.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We stay ahead with the latest security technology and smart home solutions.",
    },
    {
      icon: Heart,
      title: "Trust",
      description: "Your safety and satisfaction are our top priorities.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* About Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/80 text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About A-1 Alarm Systems</h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Protecting homes and businesses in Calgary for over 20 years
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded in 2004, A-1 Alarm Systems has been a trusted name in home and business security. What started as a small local company has grown into a comprehensive security provider serving thousands of satisfied customers across Calgary and surrounding areas.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our commitment to excellence, innovation, and customer satisfaction has made us the preferred choice for those who take their security seriously. We believe that everyone deserves professional-grade security solutions at affordable prices.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we continue to expand our services to include smart home automation, video surveillance, and central vacuum systems—all designed to enhance your comfort and security.
              </p>
            </div>
            <div>
              <img 
                src="/about-team.png" 
                alt="A-1 Alarm Systems Team" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-6 border-0 bg-white hover:shadow-lg transition-shadow">
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                20+
              </div>
              <p className="text-lg text-muted-foreground">
                Years of Experience
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                5000+
              </div>
              <p className="text-lg text-muted-foreground">
                Happy Customers
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                24/7
              </div>
              <p className="text-lg text-muted-foreground">
                Professional Monitoring
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Thousands of Satisfied Customers
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the A-1 Alarm Systems difference. Contact us today for your free consultation.
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
