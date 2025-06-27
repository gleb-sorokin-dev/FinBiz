import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Freature from "./components/Freature/Freature";

import { ReactLenis } from "lenis/react";
import { SlideTabsExample } from "./components/SlideTabsExample/SlideTabsExample";
import Customers from "./components/Customers/Customers";
import Pricing from "./components/Pricing/Pricing";
import { CTA } from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <ReactLenis root>
      <div className="relative isolate overflow-hidden">
        <Header />

        <main className="mt-20">
          <Hero />
          <SlideTabsExample />
          <Freature />
          <Customers />
          <Pricing />
          <CTA />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </ReactLenis>
  );
}
