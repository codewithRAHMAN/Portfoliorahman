import React, { useState } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import webdeveloperimage from '../assets/profile-picture.jpeg';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = (target) => {
        setIsMenuOpen(false); // Close the menu on navigation
        if (location.pathname === '/') {
            scroller.scrollTo(target, {
                smooth: true,
                duration: 500,
                offset: -70,
            });
        } else {
            navigate('/');
            setTimeout(() => {
                scroller.scrollTo(target, {
                    smooth: true,
                    duration: 500,
                    offset: -70,
                });
            }, 100);
        }
    };

    return (
        <div className="flex items-center justify-between bg-menuBg p-4">
            {/* Logo */}
            <div
                className="cursor-pointer flex items-center gap-5"
                onClick={() => handleMenuClick('home')}
            >
                <img
                    src={webdeveloperimage}
                    alt="Web Developer"
                    className="rounded-full w-10 h-10 object-fill"
                />
                <p className="text-white hover:text-red-500">MD FAZALUR RAHMAN</p>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex">
                <ul className="flex flex-row gap-5">
                    <li
                        className="cursor-pointer text-white hover:text-red-800"
                        onClick={() => handleMenuClick('home')}
                    >
                        Home
                    </li>
                    <li
                        className="cursor-pointer text-white hover:text-red-800"
                        onClick={() => handleMenuClick('about')}
                    >
                        About
                    </li>
                    <li
                        className="cursor-pointer text-white hover:text-red-800"
                        onClick={() => handleMenuClick('projects')}
                    >
                        Latest Projects
                    </li>
                    <li
                        className="cursor-pointer text-white hover:text-red-800"
                        onClick={() => handleMenuClick('contact')}
                    >
                        Contact Us
                    </li>
                </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? (
                        <FiX className="text-white w-6 h-6" />
                    ) : (
                        <FiMenu className="text-white w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-menuBg p-4 shadow-md md:hidden">
                    <ul className="flex flex-col gap-4">
                        <li
                            className="cursor-pointer text-white hover:text-red-800"
                            onClick={() => handleMenuClick('home')}
                        >
                            Home
                        </li>
                        <li
                            className="cursor-pointer text-white hover:text-red-800"
                            onClick={() => handleMenuClick('about')}
                        >
                            About
                        </li>
                        <li
                            className="cursor-pointer text-white hover:text-red-800"
                            onClick={() => handleMenuClick('projects')}
                        >
                            Latest Projects
                        </li>
                        <li
                            className="cursor-pointer text-white hover:text-red-800"
                            onClick={() => handleMenuClick('contact')}
                        >
                            Contact Us
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Header;
