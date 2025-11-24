import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ContactPage from "@/pages/Contact";
import DesignSystemPage from "@/pages/DesignSystem";
import NotFound from "@/pages/NotFound";
import AboutPage from "@/pages/About";
import ServicesPage from "@/pages/Services";
import { Route, Router, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

const basePath =
  (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "") || "/";
const routerBase = basePath === "/" ? "" : basePath;

function Routes() {
  return (
    <Router base={routerBase}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/about"} component={AboutPage} />
        <Route path={"/services"} component={ServicesPage} />
        <Route path={"/store"} component={DesignSystemPage} />
        <Route path={"/contact"} component={ContactPage} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Routes />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
