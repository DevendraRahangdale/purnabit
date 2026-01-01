import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Pages */
import Home from "./pages/Home";
import DatabasePage from "./pages/services/database_page";
import ITPage from "./pages/services/it_page";
import SoftwareDevPage from "./pages/services/software_page";

/* Components */
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      {/* Scroll to top on route change */}
      <ScrollToTop />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Services Pages */}
        <Route path="/services/database" element={<DatabasePage />} />
        <Route path="/services/it" element={<ITPage />} />
        <Route path="/services/software" element={<SoftwareDevPage />} />

        {/* Optional: 404 Page */}
        <Route
          path="*"
          element={
            <div style={{ padding: "100px", textAlign: "center" }}>
              <h1>404</h1>
              <p>Page Not Found</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
