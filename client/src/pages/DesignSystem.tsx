import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { Camera, CheckCircle2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useSearch } from "wouter";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(value);

export default function DesignSystemPage() {
  const search = useSearch();
  const [propertyType, setPropertyType] = useState<"residential" | "commercial">(
    "residential",
  );
  const [squareFootage, setSquareFootage] = useState(2200);
  const [entryPoints, setEntryPoints] = useState(4);
  const [concerns, setConcerns] = useState<string[]>(["burglary", "monitoring"]);
  const [budget, setBudget] = useState<"starter" | "balanced" | "premium">(
    "balanced",
  );
  const [stepIndex, setStepIndex] = useState(0);

  const ecwidStoreId = import.meta.env.VITE_ECWID_STORE_ID;
  const steps = [
    {
      title: "Property Type",
      description: "Tell us whether we’re protecting a home or a business.",
    },
    {
      title: "Size of the space",
      description: "Approximate square footage helps us plan zones and devices.",
    },
    {
      title: "Entry points & doors",
      description: "We place contacts and cameras around vulnerable areas.",
    },
    {
      title: "Top security concerns",
      description: "Pick what matters most so we can tailor the package.",
    },
    {
      title: "Budget focus",
      description: "Dial in the right balance of protection and spend.",
    },
  ] as const;
  const concernOptions = [
    { id: "burglary", label: "Burglary & break-ins" },
    { id: "fire", label: "Fire / environmental" },
    { id: "monitoring", label: "24/7 monitoring" },
    { id: "automation", label: "Smart automation" },
  ];
  const budgetOptions = [
    {
      id: "starter",
      label: "Starter",
      detail: "Core coverage with essential sensors.",
    },
    {
      id: "balanced",
      label: "Balanced",
      detail: "Blends security, cameras, and automation.",
    },
    {
      id: "premium",
      label: "Premium",
      detail: "Maximum deterrence with pro hardware.",
    },
  ] as const;

  useEffect(() => {
    const params = new URLSearchParams(search ?? "");
    const type = params.get("type");
    if (type === "residential" || type === "commercial") {
      setPropertyType(type);
    }
  }, [search]);

  useEffect(() => {
    if (!ecwidStoreId) return;
    const script = document.createElement("script");
    script.src = `https://app.ecwid.com/script.js?${ecwidStoreId}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [ecwidStoreId]);

  const monitoringIncluded = concerns.includes("monitoring");
  const automationIncluded = concerns.includes("automation");
  const fireIncluded = concerns.includes("fire");

  const recommendedSystem = useMemo(() => {
    const indoor =
      propertyType === "commercial"
        ? Math.max(3, Math.round(squareFootage / 1800))
        : Math.max(2, Math.round(squareFootage / 1400));
    const outdoor =
      propertyType === "commercial"
        ? Math.max(3, Math.round(entryPoints / 2))
        : Math.max(1, Math.round(entryPoints / 3));
    const sensors = Math.max(entryPoints, indoor + outdoor + 2);
    return { indoor, outdoor, sensors };
  }, [entryPoints, propertyType, squareFootage]);

  const coverageRating = useMemo(() => {
    const coverage = recommendedSystem.indoor + recommendedSystem.outdoor;
    if (coverage >= 8) return "Comprehensive";
    if (coverage >= 4) return "Balanced";
    return "Core Essentials";
  }, [recommendedSystem]);

  const estimatedCost = useMemo(() => {
    const baseInstall =
      (squareFootage / (propertyType === "commercial" ? 1800 : 1400)) *
      (propertyType === "commercial" ? 1400 : 900);
    const entryPointCost =
      entryPoints * (propertyType === "commercial" ? 160 : 110);
    const cameraCost =
      (recommendedSystem.indoor + recommendedSystem.outdoor) *
      (propertyType === "commercial" ? 260 : 210);
    const concernCost =
      (fireIncluded ? 350 : 0) + (automationIncluded ? 450 : 0);
    const subtotal = baseInstall + entryPointCost + cameraCost + concernCost;
    const budgetMultiplier =
      budget === "starter" ? 0.9 : budget === "premium" ? 1.25 : 1;
    return Math.round(subtotal * budgetMultiplier);
  }, [
    automationIncluded,
    budget,
    entryPoints,
    fireIncluded,
    propertyType,
    recommendedSystem.indoor,
    recommendedSystem.outdoor,
    squareFootage,
  ]);

  const monthlyCost = useMemo(() => {
    if (!monitoringIncluded) return 0;
    return propertyType === "commercial" ? 99 : 69;
  }, [monitoringIncluded, propertyType]);

  const configurationSummary = useMemo(
    () => ({
      propertyType,
      squareFootage,
      entryPoints,
      concerns,
      budget,
      indoorCameras: recommendedSystem.indoor,
      outdoorCameras: recommendedSystem.outdoor,
      monitoring: monitoringIncluded,
      estimatedCost,
      monthlyCost,
      coverageRating,
    }),
    [
      budget,
      monitoringIncluded,
      concerns,
      coverageRating,
      entryPoints,
      estimatedCost,
      monthlyCost,
      propertyType,
      recommendedSystem.indoor,
      recommendedSystem.outdoor,
      squareFootage,
    ],
  );

  const totalSteps = steps.length;
  const progress = ((stepIndex + 1) / totalSteps) * 100;

  const handleNext = () =>
    setStepIndex((prev) => Math.min(prev + 1, totalSteps - 1));
  const handlePrev = () => setStepIndex((prev) => Math.max(prev - 1, 0));
  const toggleConcern = (id: string) =>
    setConcerns((prev) =>
      prev.includes(id)
        ? prev.filter((concern) => concern !== id)
        : [...prev, id],
    );

  const handleSendConfiguration = () => {
    localStorage.setItem(
      "a1-config-draft",
      JSON.stringify({
        ...configurationSummary,
        createdAt: new Date().toISOString(),
      }),
    );
    const basePath = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "");
    window.location.assign(`${basePath}/contact?configDraft=1`);
  };

  const placementZones =
    propertyType === "commercial"
      ? [
          { label: "Lobby & Reception", cameras: 2 },
          { label: "Shop Floor", cameras: 2 },
          { label: "Perimeter / Yard", cameras: 3 },
          { label: "Server / Cash Office", cameras: 1 },
        ]
      : [
          { label: "Front Entry", cameras: 1 },
          { label: "Main Floor", cameras: 2 },
          { label: "Garage / Alley", cameras: 1 },
          { label: "Backyard", cameras: 1 },
        ];

  const renderStepContent = () => {
    switch (stepIndex) {
      case 0:
        return (
          <div className="flex flex-wrap gap-4">
            {["residential", "commercial"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() =>
                  setPropertyType(type as "residential" | "commercial")
                }
                className={`rounded-2xl border px-5 py-3 text-left transition-colors ${
                  propertyType === type
                    ? "border-[#0096c7] bg-[#0096c7]/10 text-foreground"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <p className="text-sm font-semibold capitalize">{type}</p>
                <p className="text-xs text-muted-foreground">
                  {type === "residential"
                    ? "Homes, condos, rentals"
                    : "Retail, office, industrial"}
                </p>
              </button>
            ))}
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Square footage</span>
              <span className="font-semibold">
                {squareFootage.toLocaleString()} sq. ft.
              </span>
            </div>
            <input
              type="range"
              min={700}
              max={propertyType === "commercial" ? 20000 : 6000}
              step={100}
              value={squareFootage}
              onChange={(event) => setSquareFootage(Number(event.target.value))}
              className="w-full accent-[#0096c7]"
            />
            <p className="text-xs text-muted-foreground">
              Larger spaces typically need more zones, repeaters, and cameras.
            </p>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Entry points</span>
              <span className="font-semibold">{entryPoints} doors/windows</span>
            </div>
            <input
              type="range"
              min={2}
              max={propertyType === "commercial" ? 30 : 12}
              step={1}
              value={entryPoints}
              onChange={(event) => setEntryPoints(Number(event.target.value))}
              className="w-full accent-[#0096c7]"
            />
            <p className="text-xs text-muted-foreground">
              Count exterior doors, patio entries, and accessible windows.
            </p>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Choose everything that applies.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {concernOptions.map((option) => {
                const active = concerns.includes(option.id);
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => toggleConcern(option.id)}
                    className={`rounded-xl border px-4 py-3 text-left text-sm transition-colors ${
                      active
                        ? "border-[#0096c7] bg-[#0096c7]/10 text-primary"
                        : "border-border hover:border-primary/40"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        );
      case 4:
      default:
        return (
          <div className="grid sm:grid-cols-3 gap-3">
            {budgetOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setBudget(option.id)}
                className={`rounded-2xl border px-4 py-3 text-left transition-colors ${
                  budget === option.id
                    ? "border-[#0096c7] bg-[#0096c7]/10"
                    : "border-border hover:border-primary/40"
                }`}
              >
                <p className="text-sm font-semibold">{option.label}</p>
                <p className="text-xs text-muted-foreground">{option.detail}</p>
              </button>
            ))}
          </div>
        );
    }
  };

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
              <div className="flex items-start justify-between gap-4 mb-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
                    Step {stepIndex + 1} of {totalSteps}
                  </p>
                  <h3 className="text-2xl font-semibold text-foreground mt-1">
                    {steps[stepIndex].title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {steps[stepIndex].description}
                  </p>
                </div>
                <div className="w-32">
                  <div className="h-1.5 rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-6">{renderStepContent()}</div>
              <div className="flex items-center justify-between border-t border-border mt-8 pt-6">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={handlePrev}
                  disabled={stepIndex === 0}
                >
                  Back
                </Button>
                <div className="flex gap-3">
                  {stepIndex < totalSteps - 1 && (
                    <Button type="button" onClick={handleNext}>
                      Next step
                    </Button>
                  )}
                  {stepIndex === totalSteps - 1 && (
                    <Button
                      type="button"
                      className="bg-[#0096c7] hover:bg-[#0077a8] text-white"
                      onClick={handleSendConfiguration}
                    >
                      Save My Quote
                    </Button>
                  )}
                </div>
              </div>
            </Card>

            <div className="space-y-6">
              <Card className="p-6 bg-white border border-primary/10 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Recommended package</h3>
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">
                    Real-time estimate
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">
                        Estimated install
                      </p>
                      <p className="text-3xl font-bold text-foreground">
                        {formatCurrency(estimatedCost)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">
                        Monthly monitoring
                      </p>
                      <p className="text-xl font-semibold text-foreground">
                        {monthlyCost ? formatCurrency(monthlyCost) : "Optional"}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {[
                      {
                        label: "Cameras",
                        value: `${recommendedSystem.indoor + recommendedSystem.outdoor} total`,
                      },
                      { label: "Coverage", value: coverageRating },
                      {
                        label: "Entry points",
                        value: `${entryPoints} doors/windows`,
                      },
                      {
                        label: "Focus",
                        value: concerns.length
                          ? concerns
                              .map((id) => concernOptions.find((c) => c.id === id)?.label)
                              .filter(Boolean)
                              .join(", ")
                          : "Custom",
                      },
                      {
                        label: "Budget",
                        value:
                          budgetOptions.find((opt) => opt.id === budget)?.label ??
                          budget,
                      },
                      {
                        label: "Property Type",
                        value: propertyType,
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
                  <Button
                    type="button"
                    onClick={handleSendConfiguration}
                    className="w-full bg-[#0096c7] hover:bg-[#0077a8] text-white"
                  >
                    Save My Quote & Email It
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    We’ll attach this configuration to your contact form so our sales
                    team already knows your priorities.
                  </p>
                </div>
              </Card>
              <Card className="p-6 bg-white border border-primary/10 shadow-md">
                <h3 className="text-lg font-semibold mb-4">
                  Visualizing camera placement
                </h3>
                <div className="grid grid-cols-2 gap-3 h-48">
                  {placementZones.map((zone) => (
                    <div
                      key={zone.label}
                      className="rounded-xl border border-dashed border-primary/40 bg-gradient-to-br from-slate-50 to-slate-100 p-3 flex flex-col justify-between"
                    >
                      <p className="text-xs font-semibold text-muted-foreground">
                        {zone.label}
                      </p>
                      <div className="flex gap-1">
                        {Array.from({ length: zone.cameras }).map((_, index) => (
                          <div
                            key={`${zone.label}-${index}`}
                            className="h-7 w-7 rounded-full bg-white shadow flex items-center justify-center text-primary"
                          >
                            <Camera className="w-3.5 h-3.5" />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  We map cameras to high-traffic areas, shipping doors, and blind spots
                  so you can visualize coverage before we visit on-site.
                </p>
              </Card>
              <Card className="p-6 bg-white border border-primary/10 shadow-md">
                <h3 className="text-lg font-semibold mb-4">What happens next?</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {[
                    "Email your configuration to our team with a single click.",
                    "We review your quiz answers and prep a tailored layout.",
                    "A specialist calls within one business day to confirm details.",
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
      <Footer />
    </div>
  );
}
