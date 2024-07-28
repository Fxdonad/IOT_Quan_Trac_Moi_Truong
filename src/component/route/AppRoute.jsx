import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import DuDoan from '../../pages/DuDoan';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dudoan" element={<DuDoan />} />
                {/* Thêm các route khác ở đây */}
            </Routes>
        </Router>
    );
}

export default AppRoutes;
