import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-black text-white py-14 px-4">
            {/* Footer Content */}
            <div className="container mx-auto text-center md:text-left flex justify-around">
                {/* Name and Description */}
                <div className="mb-8">
                    <h4 className="text-3xl font-bold">MD FAZALUR RAHMAN</h4>
                    <p className="mt-2 text-lg">
                        A"Passionate web developer skilled in front-end and back-end technologies, <br />creating user-friendly, dynamic websites."
                    </p>
                </div>

                {/* Social Icons */}
                <div className="mb-8">
                    <h4 className="text-2xl font-semibold">Social</h4>
                    <div className="flex justify-center gap-6 mt-4">
                        <a href="https://www.linkedin.com/in/rahman4876" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-3xl hover:text-blue-500 transition duration-300" />
                        </a>
                        <a href="https://github.com/codewithRahman" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-3xl hover:text-gray-300 transition duration-300" />
                        </a>
                        <a href="https://www.instagram.com/fazal_45" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-3xl hover:text-pink-500 transition duration-300" />
                        </a>
                        <a href="https://wa.me/8247657184" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className="text-3xl hover:text-green-500 transition duration-300" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Horizontal Line */}
            <hr className="border-gray-700" />

            {/* Copyright Text */}
            <div className="text-center items-center mt-6">
                <p>© Copyright 2025. Made by Rahman</p>
            </div>
        </div>
    );
};

export default Footer;
