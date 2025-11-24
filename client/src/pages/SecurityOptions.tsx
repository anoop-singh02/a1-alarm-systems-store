import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { Card } from "@/components/ui/card";

const options = [
  {
    title: "Hard Wired Systems",
    detail:
      "Ideal for homes and businesses, wired systems provide dependable protection against burglars and intruders.",
  },
  {
    title: "Wireless Systems",
    detail:
      "Perfect for renters and finished spaces—minimal drilling and flexible configurations.",
  },
  {
    title: "Video Monitoring",
    detail:
      "Strategic placement at entry points, driveways, or parking areas adds visual verification and peace of mind.",
  },
  {
    title: "Internet Monitoring",
    detail:
      "Pair digital video with secure remote access so you can check in on your property from anywhere.",
  },
  {
    title: "Telephone / Cellular Backup",
    detail:
      "Keep your system online even without a traditional landline. Cellular backup ensures signals always reach our monitoring centre.",
  },
  {
    title: "Motion Detectors",
    detail:
      "High-sensitivity sensors with pet immunity to prevent false alarms while detecting real movement.",
  },
  {
    title: "Smoke & Carbon Monoxide Detectors",
    detail:
      "Life-safety devices that trigger your alarm and alert responders during fires or CO events.",
  },
  {
    title: "Heat, Water & Freeze Sensors",
    detail:
      "Early warning for extreme temperature changes or leaks to prevent costly damage to homes, businesses, or cottages.",
  },
  {
    title: "Glass Break & Passive Infrared Sensors",
    detail:
      "Detect glass shattering or infrared energy changes—ideal for storefronts and large open areas.",
  },
  {
    title: "Outdoor Sirens & Panic Buttons",
    detail:
      "Deter intruders and alert neighbours with loud exterior sirens; panic buttons summon help instantly.",
  },
];

export default function SecurityOptionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader currentPage="securityOptions" />
      <section className="bg-gradient-to-r from-[#0096c7] to-[#005aa0] text-white py-20">
        <div className="container max-w-4xl space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-white/80">
            Security Options
          </p>
          <h1 className="text-4xl font-bold">Build the perfect system.</h1>
          <p className="text-white/90 leading-relaxed">
            The original A-1 site listed every option available. We’ve refreshed that
            list so you can mix and match the components that make sense for your
            property.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container grid gap-6 md:grid-cols-2">
          {options.map((option) => (
            <Card key={option.title} className="p-6 space-y-3">
              <h2 className="text-lg font-semibold text-foreground">
                {option.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {option.detail}
              </p>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
