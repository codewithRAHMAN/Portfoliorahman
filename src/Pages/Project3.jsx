import React from 'react';
import project3image from '../assets/mern.png';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Sidebar from '../Components/Sidebar';
import { useNavigate } from 'react-router-dom';

const Project3 = () => {
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
                    <section className="flex flex-col justify-center items-center h-screen bg-projectbg text-white  shadow-md">
                        <div className="text-center max-w-2xl">
                            <h1 className="text-5xl font-bold mb-4">CRUD WITH MERN</h1>
                            <p className="text-lg mb-6">
                                This project is a simple yet functional To-Do App designed to manage tasks efficiently. Built using the MERN stack (MongoDB, Express.js, React, and Node.js), it offers core features for task management, including adding and deleting tasks.
                            </p>
                            <a
                                href="https://mernusingcrud.netlify.app/" // Replace with your actual project link
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
                                src={project3image}
                                className="h-48 w-96 object-cover"
                                alt="Project 1"
                            />
                        </div>
                        <div className='pt-5 pb-5'>
                            <ul>
                                <li className='p-2'><strong>Create:</strong> Users can add new tasks by entering details into a form. Data is sent to the server and saved in MongoDB.</li>
                                <li className='p-2'><strong>Read:</strong> Users can view a list of all tasks stored in the database, with real-time updates reflecting any changes.</li>
                                <li className='p-2'><strong>Update:</strong> Users can edit task details, and the changes are immediately reflected both on the frontend and in the database.</li>
                                <li className='p-2'><strong>Delete:</strong> Users can delete tasks with a single click, and the task is removed from both the UI and the database.</li>
                            </ul>
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
                                    EXPRESS
                                </button>
                                <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                                    NODE JS
                                </button>
                                <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                                    MONGO DB
                                </button>
                                <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                                    GIT HUB
                                </button>
                                <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                                    TAILWIND
                                </button>
                            </div>
                        </div>

                        <div className='pt-10'>
                            <div className="text-center mb-8">
                                <h5 className="text-2xl font-semibold">See Live</h5>
                            </div>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href="https://github.com/codewithRAHMAN/modish-muslimah" // Replace with your actual project link
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

export default Project3;
