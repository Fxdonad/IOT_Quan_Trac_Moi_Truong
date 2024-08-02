import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forecasting from "../../pages/Forecasting";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/forecasting" element={<Forecasting />} />
        {/* Thêm các route khác ở đây */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
