import React from 'react';
import project4image from '../assets/portfolio.png';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Sidebar from '../Components/Sidebar';
import { useNavigate } from 'react-router-dom';

const Project4 = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Header */}
            <Header />

            <div className="flex flex-grow">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}


                <div className="flex-grow">
                    {/* Hero Section */}
                    <section className="flex flex-col justify-center items-center h-screen bg-projectbg  text-white  shadow-md">
                        <div className="text-center max-w-2xl">
                            <h1 className="text-5xl font-bold mb-4">PORTFOLIO</h1>
                            <p className="text-lg mb-6">
                                Created a responsive portfolio using React and Tailwind CSS, showcasing projects and skills, deployed efficiently on Netlify platform.
                            </p>
                            <a
                                href="https://portfoliobyrahman.netlify.app/" // Replace with your actual project link
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 bg-white text-blue-500 rounded-md shadow-md hover:bg-gray-100 transition duration-300"
                            >
                                View Project Live
                            </a>
                        </div>
                    </section>

                    {/* Image Section */}
                    <section className="flex flex-col justify-center items-center h-screen bg-gray-50">
                        <div className="shadow-lg rounded-lg overflow-hidden">
                            <img
                                src={project4image}
                                className="h-48 w-96 object-cover"
                                alt="Project 1"
                            />
                        </div>
                        <div>
                            <p className='text-2xl px-40 py-5'>Developed a responsive and visually appealing portfolio website using React and Tailwind CSS, highlighting skills and projects. Integrated GitHub for version control and deployed seamlessly on Netlify for efficient hosting.</p>
                        </div>
                        <button
                            type="button"
                            className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-md shadow hover:bg-blue-600 transition duration-300"
                            onClick={() => navigate('/')}
                        >
                            Back to Home
                        </button>
                    </section>

                    {/* Tools Section */}
                    <section className="flex flex-col justify-center items-center h-screen bg-gray-100 rounded-lg shadow-md">
                        <div>
                            <div className="text-center mb-8">
                                <h5 className="text-2xl font-semibold text-gray-800">Tools Used</h5>
                            </div>
                            <div className="flex flex-wrap justify-center gap-4 px-4">
                                <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                                    REACT
                                </button>
                                <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                                    TAILWIND
                                </button>
                                <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                                    NODE JS
                                </button>
                                <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                                    NETLIFY
                                </button>
                                <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                                    GITHUB
                                </button>
                            </div>
                        </div>

                        <div className='pt-10'>
                            <div className="text-center mb-8">
                                <h5 className="text-2xl font-semibold">See Live</h5>
                            </div>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href="https://github.com/rahman4876/portfolio.git" // Replace with your actual project link
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-3 bg-white text-indigo-500 rounded-md shadow-md hover:bg-gray-100 transition duration-300"
                                >
                                    See Project
                                </a>
                                <button
                                    type="button"
                                    className="px-8 py-3 bg-white text-indigo-500 rounded-md shadow-md hover:bg-gray-100 transition duration-300"
                                    onClick={() => navigate('/')}
                                >
                                    Back to Home
                                </button>
                            </div>
                        </div>


                    </section>

                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Project4;
