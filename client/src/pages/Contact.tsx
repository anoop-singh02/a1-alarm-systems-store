import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/SiteHeader";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const contactMethods = [
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
      title: "Address",
      lines: ["20 - 5660 10 ST NE", "Calgary, AB T2E 8W7"],
      icon: MapPin,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader currentPage="contact" />

      <section className="py-16 bg-gradient-to-r from-[#0096c7] via-[#0080c1] to-[#005aa0] text-white text-center">
        <div className="container max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-white/80">
            Get In Touch
          </p>
          <h1 className="text-4xl font-bold">We're here to help</h1>
          <p className="text-white/90">
            Reach out to our Calgary-based team for service questions, quotes,
            or support. We respond within one business day.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="p-8 text-center border border-primary/10 bg-white"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
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
                </Card>
              );
            })}
          </div>

          <Card className="p-8 border border-primary/10 bg-white max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Send us a message
            </h2>
            <form className="grid md:grid-cols-2 gap-6">
              {[
                { label: "Name", type: "text", required: true },
                { label: "Email", type: "email", required: true },
                { label: "Phone", type: "tel", required: true },
                { label: "Company", type: "text", required: false },
              ].map((field) => (
                <div key={field.label} className="space-y-2">
                  <label
                    className="text-sm font-medium text-foreground"
                    htmlFor={field.label}
                  >
                    {field.label}
                    {field.required && <span className="text-red-500"> *</span>}
                  </label>
                  <input
                    id={field.label}
                    type={field.type}
                    required={field.required}
                    className="w-full rounded-lg border border-border bg-muted/30 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                  />
                </div>
              ))}
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-foreground" htmlFor="message">
                  Message<span className="text-red-500"> *</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  placeholder="Tell us about your project"
                  className="w-full rounded-lg border border-border bg-muted/30 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                />
              </div>
              <div className="md:col-span-2">
                <Button className="w-full bg-[#0096c7] hover:bg-[#0077a8] text-white">
                  Send Message
                </Button>
              </div>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              All fields marked with <span className="text-red-500">*</span> are
              required. We never share your information.
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-[#009fb5] text-white py-16">
        <div className="container text-center max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold">Ready to Secure Your Property?</h2>
          <p className="text-white/90">
            Contact us today for a free consultation with no obligation. Our
            team is ready to help you find the perfect security solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#0065a3] hover:bg-white/90 font-semibold">
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Call (403) 258-3749
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
