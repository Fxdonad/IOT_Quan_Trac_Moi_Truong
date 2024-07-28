import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Sử dụng icon từ react-icons

function Footer() {
    return (
        <footer className="flex p-6 text-center text-white bg-gradient-to-r from-gray-800 to-gray-600">
            <div className="flex">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <FaFacebook className="text-2xl hover:text-blue-500" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <FaTwitter className="text-2xl hover:text-blue-400" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <FaInstagram className="text-2xl hover:text-pink-400" />
                </a>
            </div>
            <p className="text-sm">©Fxdonad 2024 Weather Metrics System. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
