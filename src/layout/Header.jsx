import React from 'react';
import { Link } from 'react-router-dom';
import { FaCloudSun } from 'react-icons/fa';

function Header() {
    return (
        <header className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-6 shadow-md flex items-center justify-between">
            <div className="flex items-center">
                <FaCloudSun className="text-3xl mr-4" />
                <h1 className="text-2xl font-bold">Weather Metrics System</h1>
            </div>
            <nav>
                <ul className="flex space-x-6">
                    <li><Link to="/" className="hover:underline">Home</Link></li>
                    <li><Link to="/dudoan" className="hover:underline">Dự đoán</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
