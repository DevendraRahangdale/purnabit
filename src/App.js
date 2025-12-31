import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DatabasePage from "./pages/services/database/page";
import ITPage from "./pages/services/it/page"; // ✅ ADD THIS
import SoftwareDevPage from "./pages/services/software/page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Service pages */}
        <Route path="/services/database" element={<DatabasePage />} />
        <Route path="/services/it" element={<ITPage />} /> 
        <Route path="/services/software" element={<SoftwareDevPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
