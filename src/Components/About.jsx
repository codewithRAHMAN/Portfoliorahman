import React from 'react';
import { Link } from 'react-scroll';  // Import Link from react-scroll

const About = () => {
    return (
        <div className="py-12 px-6">
            <div className="max-w-screen-xl mx-auto px-4">
                {/* Heading Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        I am a passionate Web Developer with 1.5 years of experience in creating and maintaining robust, user-friendly, and visually appealing websites.
                    </p>
                </div>

                {/* Content Section */}
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Left Section */}
                    <div className="w-full md:w-1/2">
                        <h5 className="text-xl font-semibold text-gray-800">Get to Know Me!</h5>
                        <ul className="mt-4 space-y-4 text-gray-600">
                            <li>
                                <strong>Frontend Development:</strong> Extensive experience with HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and Figma, enabling me to craft responsive and visually appealing user interfaces.
                            </li>
                            <li>
                                <strong>Backend Development:</strong> Proficient in PHP, Express.js, and Node.js, specializing in developing scalable, secure, and efficient server-side applications.
                            </li>
                            <li>
                                <strong>Database Management:</strong> Skilled in SQL and MongoDB, with expertise in designing, managing, and querying databases for optimal performance.
                            </li>
                            <li>
                                <strong>Full-Stack Development:</strong> Solid command of the MERN stack (MongoDB, Express.js, React, Node.js), capable of building end-to-end web applications that are dynamic and feature-rich.
                            </li>
                            <li>
                                <strong>Content Management Systems:</strong> Comprehensive knowledge of WordPress for designing, customizing, and managing websites tailored to diverse client requirements.
                            </li>
                            <li>
                                <strong>Web Scraping:</strong> Experienced in extracting, processing, and analyzing data from websites using advanced web scraping techniques.
                            </li>
                        </ul>

                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="mt-6 inline-block text-lg bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Contact Me
                        </Link>
                    </div>

                    {/* Right Section (Skills List as Buttons) */}
                    <div className="w-full md:w-1/2">
                        <h5 className="text-xl font-semibold text-center text-gray-800">Skills</h5>
                        <div className="mt-4 flex flex-wrap gap-4 justify-center">
                            {/* Skill Buttons */}
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">HTML</button>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">CSS</button>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">JavaScript</button>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">React</button>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">WordPress</button>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">PHP</button>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">SQL</button>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Express</button>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Python</button>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Figma</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
