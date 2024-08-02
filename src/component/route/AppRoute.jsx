import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import Forecasting from "../../pages/Forecasting";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/forecasting" element={<Forecasting />} />
        {/* Thêm các route khác ở đây */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
