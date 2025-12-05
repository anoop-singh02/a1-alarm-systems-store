import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { Card } from "@/components/ui/card";
import { CheckCircle2, MapPin } from "lucide-react";

const assetPath = (file: string) =>
  `${import.meta.env.BASE_URL}${file.replace(/^\/+/, "")}`;

const commitments = [
  "Locally owned and operated in Calgary for over 20 years.",
  "Custom-designed systems for every install—never one size fits all.",
  "30-day cancellation policy with a low-price guarantee.",
  "Licensed technicians using trusted brands like DSC and Honeywell.",
  "24/7 ULC monitoring with friendly, responsive support.",
];

const team = [
  {
    name: "Riley Chen",
    role: "Lead Security Designer",
    bio: "Specializes in DSC/Honeywell hybrid builds for luxury homes and multistory offices.",
  },
  {
    name: "Amelia Singh",
    role: "Automation & Audio Specialist",
    bio: "Certified in Control4, Sonos, and Lutron integrations with a focus on energy automation.",
  },
  {
    name: "Marcus Dubois",
    role: "Field Operations Lead",
    bio: "Journeyperson technician overseeing Calgary + Airdrie crews with COR safety accreditation.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader currentPage="about" />
      <section className="bg-gradient-to-r from-[#0096c7] to-[#005aa0] text-white py-20">
        <div className="container max-w-4xl space-y-6">
          <p className="text-sm uppercase tracking-[0.2em] text-white/80">
            About A-1 Alarm Systems
          </p>
          <h1 className="text-4xl font-bold">Protection you can trust.</h1>
          <p className="text-lg text-white/90 leading-relaxed">
            With one goal in mind—100% customer satisfaction—we’ve sustained our
            Calgary business for over 20 years. From the legacy site’s promise
            of “protection you can count on” to today’s smart security
            solutions, we remain focused on custom systems and service.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-bold text-foreground">
              Calgary roots, modern tech.
            </h2>
            <p>
              We don’t believe in a standard alarm system for every
              installation. Our team designs and installs each solution with
              your unique requirements in mind—residential, commercial, or
              industrial.
            </p>
            <p>
              Contracts can be cancelled with just 30 days’ notice. It’s our
              low-risk, low-stress guarantee, carried over from our original
              website that served the city for years.
            </p>
            <p>
              We stay current on smart security, automation, audio, and vacuum
              technologies so that you don’t have to.
            </p>
            <Card className="p-6 space-y-4 border border-border/80 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground">
                What sets us apart
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {commitments.map((commitment) => (
                  <li key={commitment} className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>{commitment}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10">
            <img
              src={assetPath("about-calgary.jpg")}
              alt="A-1 Alarm Systems truck in Calgary at sunset"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
