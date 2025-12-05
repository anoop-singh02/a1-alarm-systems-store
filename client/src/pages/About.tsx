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
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-black/70 text-white rounded-2xl p-4 flex items-center gap-3 shadow-lg">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
                <MapPin className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                  Calgary Based
                </p>
                <p className="text-sm font-semibold leading-tight">
                  Technicians dispatch from SE Calgary daily
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container space-y-10">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-2">
              Meet the team
            </p>
            <h2 className="text-3xl font-bold text-foreground">
              Fully licensed technicians & designers
            </h2>
            <p className="text-muted-foreground mt-4">
              Every installer holds current CSTS and fall-arrest certifications. We vet
              suppliers, background-check staff, and keep training aligned with code
              updates so you never have to worry who is on-site.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member) => (
              <Card
                key={member.name}
                className="p-6 border border-border/60 bg-white shadow-sm space-y-4"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/15 text-primary font-semibold flex items-center justify-center uppercase">
                    {member.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{member.name}</p>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
