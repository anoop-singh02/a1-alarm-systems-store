import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function StorePage() {
  const products = [
    {
      id: 1,
      name: "Smart Door Lock",
      category: "Home Automation",
      price: "$299",
      description: "Keyless entry with smartphone control and remote access",
      image: "/service-home.png",
    },
    {
      id: 2,
      name: "HD Security Camera",
      category: "Video Surveillance",
      price: "$199",
      description: "4K resolution with night vision and cloud storage",
      image: "/service-video.png",
    },
    {
      id: 3,
      name: "Wireless Alarm Sensor",
      category: "Alarm Systems",
      price: "$49",
      description: "Easy installation, 2-year battery life",
      image: "/service-alarm.png",
    },
    {
      id: 4,
      name: "Smart Thermostat",
      category: "Home Automation",
      price: "$249",
      description: "Energy-efficient temperature control with learning capabilities",
      image: "/service-home.png",
    },
    {
      id: 5,
      name: "Motion Detector",
      category: "Alarm Systems",
      price: "$79",
      description: "Advanced motion sensing with adjustable sensitivity",
      image: "/service-alarm.png",
    },
    {
      id: 6,
      name: "Smart Speaker System",
      category: "Sound Systems",
      price: "$399",
      description: "Multi-room audio with voice control integration",
      image: "/service-sound.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Store Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/80 text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">A-1 Alarm Store</h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Browse our selection of security and home automation products
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 border-0 group flex flex-col"
              >
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Service */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional Installation Available
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              All products can be professionally installed by our certified technicians. Let us handle the setup so you can enjoy your new security or automation system right away.
            </p>
            <Link href="/quote">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Schedule Installation
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Complete Support
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-0 bg-white hover:shadow-lg transition-shadow text-center">
              <div className="text-4xl font-bold text-primary mb-4">2</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Year Warranty</h3>
              <p className="text-muted-foreground">All products come with a comprehensive 2-year warranty</p>
            </Card>

            <Card className="p-8 border-0 bg-white hover:shadow-lg transition-shadow text-center">
              <div className="text-4xl font-bold text-primary mb-4">24/7</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Technical Support</h3>
              <p className="text-muted-foreground">Our support team is available around the clock</p>
            </Card>

            <Card className="p-8 border-0 bg-white hover:shadow-lg transition-shadow text-center">
              <div className="text-4xl font-bold text-primary mb-4">100%</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Satisfaction</h3>
              <p className="text-muted-foreground">We guarantee your complete satisfaction with every purchase</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
