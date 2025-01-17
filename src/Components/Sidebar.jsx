import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons

const Sidebar = () => {
    return (
        <div className="fixed top-60 left-0 min-h-64 w-16 bg-gray-800 text-white flex flex-col items-center justify-center space-y-10 z-50">
            {/* LinkedIn Icon */}
            <a
                href="https://www.linkedin.com/in/rahman4876"  // Replace with your LinkedIn profile URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-blue-500 transition duration-300"
            >
                <FaLinkedin />
            </a>

            {/* GitHub Icon */}
            <a
                href="https://github.com/codewithRahman"  // Replace with your GitHub profile URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-gray-400 transition duration-300"
            >
                <FaGithub />
            </a>

            {/* WhatsApp Icon */}
            <a
                href="https://wa.me/8247657184"  // Replace with your WhatsApp number (international format)
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-green-500 transition duration-300"
            >
                <FaWhatsapp />
            </a>

            {/* Instagram Icon */}
            <a
                href="https://www.instagram.com/fazal_45"  // Replace with your Instagram profile URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-pink-500 transition duration-300"
            >
                <FaInstagram />
            </a>
        </div>
    );
};

export default Sidebar;
