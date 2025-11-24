import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/SiteHeader";
import { Camera, CheckCircle2 } from "lucide-react";
import { useMemo, useState } from "react";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(value);

export default function DesignSystemPage() {
  const [propertyType, setPropertyType] = useState<"residential" | "commercial">(
    "residential",
  );
  const [squareFootage, setSquareFootage] = useState(2200);
  const [indoorCameras, setIndoorCameras] = useState(3);
  const [outdoorCameras, setOutdoorCameras] = useState(2);
  const [audioZones, setAudioZones] = useState(2);
  const [automation, setAutomation] = useState(true);
  const [monitoring, setMonitoring] = useState(true);

  const estimatedCost = useMemo(() => {
    const baseInstall =
      squareFootage * (propertyType === "commercial" ? 0.18 : 0.12);
    const cameraCost = indoorCameras * 220 + outdoorCameras * 260;
    const automationCost = automation ? 450 : 0;
    const audioCost = audioZones * 175;
    const subtotal = baseInstall + cameraCost + automationCost + audioCost;
    const multiplier = propertyType === "commercial" ? 1.2 : 1;
    return Math.round(subtotal * multiplier);
  }, [automation, audioZones, indoorCameras, outdoorCameras, propertyType, squareFootage]);

  const monthlyCost = useMemo(() => {
    if (!monitoring) return 0;
    return propertyType === "commercial" ? 89 : 59;
  }, [monitoring, propertyType]);

  const coverageRating = useMemo(() => {
    const coverage = indoorCameras + outdoorCameras;
    if (coverage >= 7) return "Comprehensive";
    if (coverage >= 4) return "Balanced";
    return "Core Essentials";
  }, [indoorCameras, outdoorCameras]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader currentPage="store" />
      <section className="bg-gradient-to-r from-[#0096c7] to-[#005aa0] text-white py-20">
        <div className="container max-w-4xl text-center space-y-6">
          <p className="text-sm uppercase tracking-[0.2em] text-white/80">
            System Designer
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">
            Design Your Security System
          </h1>
          <p className="text-lg text-white/90">
            Use our interactive planner to explore camera placement, automation,
            and monitoring options. Get a ballpark quote before we confirm the
            final details on-site.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
            <Card className="p-8 border border-primary/10 bg-white shadow-lg">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-primary font-semibold">
                        Step 1
                      </p>
                      <h3 className="text-xl font-semibold text-foreground">
                        Property Type
                      </h3>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Choose the space you’re securing
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { id: "residential", label: "Residential" },
                      { id: "commercial", label: "Commercial" },
                    ].map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() =>
                          setPropertyType(option.id as "residential" | "commercial")
                        }
                        aria-pressed={propertyType === option.id}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors border ${
                          propertyType === option.id
                            ? "bg-[#0096c7] text-white border-[#0096c7]"
                            : "bg-white text-muted-foreground border-border hover:border-primary/40"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      Square Footage
                    </h3>
                    <input
                      aria-label="Square footage"
                      type="number"
                      min={800}
                      max={6000}
                      step={100}
                      value={squareFootage}
                      onChange={(event) =>
                        setSquareFootage(Number(event.target.value))
                      }
                      className="w-28 rounded-md border border-border bg-muted/40 px-2 py-1 text-sm text-foreground"
                    />
                  </div>
                  <input
                    type="range"
                    min={800}
                    max={6000}
                    step={100}
                    value={squareFootage}
                    onChange={(event) => setSquareFootage(Number(event.target.value))}
                    className="w-full accent-[#0096c7]"
                    aria-label="Square footage slider"
                    aria-valuemin={800}
                    aria-valuemax={6000}
                    aria-valuenow={squareFootage}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>800</span>
                    <span>6,000</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">Indoor Cameras</h3>
                      <input
                        aria-label="Indoor camera count"
                        type="number"
                        min={1}
                        max={8}
                        value={indoorCameras}
                        onChange={(event) =>
                          setIndoorCameras(Number(event.target.value))
                        }
                        className="w-16 rounded-md border border-border bg-muted/40 px-2 py-1 text-sm text-foreground"
                      />
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={8}
                      value={indoorCameras}
                      onChange={(event) => setIndoorCameras(Number(event.target.value))}
                      className="w-full accent-[#0096c7]"
                      aria-label="Indoor camera slider"
                      aria-valuemin={1}
                      aria-valuemax={8}
                      aria-valuenow={indoorCameras}
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">Outdoor Cameras</h3>
                      <input
                        aria-label="Outdoor camera count"
                        type="number"
                        min={0}
                        max={8}
                        value={outdoorCameras}
                        onChange={(event) =>
                          setOutdoorCameras(Number(event.target.value))
                        }
                        className="w-16 rounded-md border border-border bg-muted/40 px-2 py-1 text-sm text-foreground"
                      />
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={8}
                      value={outdoorCameras}
                      onChange={(event) => setOutdoorCameras(Number(event.target.value))}
                      className="w-full accent-[#0096c7]"
                      aria-label="Outdoor camera slider"
                      aria-valuemin={0}
                      aria-valuemax={8}
                      aria-valuenow={outdoorCameras}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">Audio Zones</h3>
                    <input
                      aria-label="Audio zones"
                      type="number"
                      min={0}
                      max={6}
                      value={audioZones}
                      onChange={(event) => setAudioZones(Number(event.target.value))}
                      className="w-16 rounded-md border border-border bg-muted/40 px-2 py-1 text-sm text-foreground"
                    />
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={6}
                    value={audioZones}
                    onChange={(event) => setAudioZones(Number(event.target.value))}
                    className="w-full accent-[#0096c7]"
                    aria-label="Audio zones slider"
                    aria-valuemin={0}
                    aria-valuemax={6}
                    aria-valuenow={audioZones}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      label: "Smart Automation",
                      state: automation,
                      setter: setAutomation,
                    },
                    {
                      label: "24/7 Monitoring",
                      state: monitoring,
                      setter: setMonitoring,
                    },
                  ].map((toggle) => (
                    <button
                      key={toggle.label}
                      type="button"
                      role="switch"
                      aria-checked={toggle.state}
                      onClick={() => toggle.setter((prev) => !prev)}
                      className={`flex items-center justify-between rounded-2xl border px-4 py-3 transition ${
                        toggle.state
                          ? "border-[#0096c7] bg-[#0096c7]/10"
                          : "border-border hover:border-primary/40"
                      }`}
                    >
                      <span className="text-sm font-semibold text-foreground">
                        {toggle.label}
                      </span>
                      <span
                        className={`text-xs font-bold uppercase ${
                          toggle.state ? "text-[#0096c7]" : "text-muted-foreground"
                        }`}
                      >
                        {toggle.state ? "Included" : "Add"}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </Card>

            <div className="space-y-6">
              <Card className="p-6 bg-white border border-primary/10 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">System Summary</h3>
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">
                    Estimator
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">
                        Estimated Install
                      </p>
                      <p className="text-3xl font-bold text-foreground">
                        {formatCurrency(estimatedCost)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">
                        Monthly Monitoring
                      </p>
                      <p className="text-xl font-semibold text-foreground">
                        {monthlyCost ? formatCurrency(monthlyCost) : "Optional"}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {[
                      { label: "Total Cameras", value: indoorCameras + outdoorCameras },
                      { label: "Coverage", value: coverageRating },
                      { label: "Automation", value: automation ? "Enabled" : "None" },
                      {
                        label: "Audio Zones",
                        value: audioZones ? `${audioZones} rooms` : "Not added",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-xl bg-muted/50 px-4 py-3 border border-border"
                      >
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">
                          {item.label}
                        </p>
                        <p className="font-semibold text-foreground">{item.value}</p>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-[#0096c7] hover:bg-[#0077a8] text-white">
                    Send Configuration with Quote
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Final pricing is confirmed during your on-site assessment. This
                    estimate helps us understand your goals before visiting.
                  </p>
                </div>
              </Card>
              <Card className="p-6 bg-white border border-primary/10 shadow-md">
                <h3 className="text-lg font-semibold mb-4">Why Build With Us</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {[
                    "Guided design wizard for homes and businesses",
                    "Instant configuration summary you can email or print",
                    "Flexible packages for security, automation, and networking",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
