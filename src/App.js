import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

/* Pages */
import Home from "./pages/Home";
import DatabasePage from "./pages/services/database_page";
import ITPage from "./pages/services/it_page";
import SoftwareDevPage from "./pages/services/software_page";
import Privacy from "./pages/Privacy";
import TermsOfUse from "./pages/TermsOfUse";

/* Components */
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";
import Navbar from "./components/Navbar";

function App() {
  // Controls navbar visibility when cookie bar is shown
  const [hideNavbar, setHideNavbar] = useState(false);

  return (
    <BrowserRouter>
      {/* Scroll to top on route change */}
      <ScrollToTop />

      {/* COOKIE BANNER (Top, Animated, Controls Navbar) */}
      <CookieBanner onVisibilityChange={setHideNavbar} />

      {/* NAVBAR (Hidden while cookie banner is visible) */}
      {!hideNavbar && <Navbar />}

      {/* MAIN CONTENT */}
      <main className={hideNavbar ? "pt-0" : "pt-[72px]"}>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Services */}
          <Route path="/services/database" element={<DatabasePage />} />
          <Route path="/services/it" element={<ITPage />} />
          <Route path="/services/software" element={<SoftwareDevPage />} />

          {/* Legal Pages */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="py-24 text-center">
                <h1 className="text-4xl font-bold">404</h1>
                <p className="text-gray-600 mt-2">Page Not Found</p>
              </div>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
