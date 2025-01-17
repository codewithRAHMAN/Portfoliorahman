import React from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';
import webdeveloperimage from '../assets/profile-picture.jpeg';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleMenuClick = (target) => {
        if (location.pathname === '/') {
            // Scroll to the section if already on the homepage
            scroller.scrollTo(target, {
                smooth: true,
                duration: 500,
                offset: -70, // Adjust if there's a fixed header
            });
        } else {
            // Navigate to the homepage and scroll
            navigate('/');
            setTimeout(() => {
                scroller.scrollTo(target, {
                    smooth: true,
                    duration: 500,
                    offset: -70,
                });
            }, 100); // Ensure the homepage is loaded before scrolling
        }
    };

    return (
        <div className="flex flex-row items-center justify-between bg-menuBg p-4">
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
                <p className=" text-white hover:text-red-500">MD FAZALUR RAHMAN</p>
            </div>

            {/* Menu */}
            <div>
                <ul className="flex flex-row gap-5">
                    <li
                        className="cursor-pointer text-white hover:text-red-800"
                        onClick={() => handleMenuClick('home')}
                    >
                        Home
                    </li>
                    <li
                        className="cursor-pointer  text-white hover:text-red-800"
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
        </div>
    );
};

export default Header;
