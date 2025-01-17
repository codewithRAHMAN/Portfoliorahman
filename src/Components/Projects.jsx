import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import project1image from '../assets/project1-image.png';
import project2image from '../assets/todoapp.png';
import project3image from '../assets/mern.png';
import project4image from '../assets/portfolio.png';

const Projects = () => {
    return (
        <div className="container mx-auto p-8">
            <div className="text-center mb-8">
                <h4 className="text-3xl font-bold">Latest Projects</h4>
            </div>

            {/* Project 1 */}
            <div className="flex flex-wrap justify-center gap-8 my-10">
                <div className="w-full sm:w-1/2 lg:w-1/3">
                    <img src={project1image} alt="Project 1" className="w-full h-auto rounded-lg shadow-lg" />
                </div>

                <div className="w-full sm:w-1/2 lg:w-1/3 flex flex-col justify-center items-start">
                    <div className="mb-4">
                        <h6 className="text-xl font-semibold">About Project 1</h6>
                        <p className="text-lg text-gray-700 mt-2">
                            Modern eCommerce homepage with responsive design, interactive features, intuitive navigation, product showcases, and seamless user experience.
                        </p>
                    </div>
                    <div>
                        {/* Link to Project 1 page */}
                        <Link to="/project1">
                            <button className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300">
                                Project 1
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Project 2 */}
            <div className="flex flex-wrap justify-center gap-8 my-10">
                <div className="w-full sm:w-1/2 lg:w-1/3 flex flex-col justify-center items-start">
                    <div className="mb-4">
                        <h6 className="text-xl font-semibold">About Project 2</h6>
                        <p className="text-lg text-gray-700 mt-2">
                            To-Do app with task management, built using MERN stack for seamless CRUD operations and persistence.
                        </p>
                    </div>
                    <div>
                        {/* Link to Project 2 page */}
                        <Link to="/project2">
                            <button className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300">
                                Project 2
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3">
                    <img src={project2image} alt="Project 2" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
            </div>

            {/* Project 3 */}
            <div className="flex flex-wrap justify-center gap-8 my-10">
                <div className="w-full sm:w-1/2 lg:w-1/3">
                    <img src={project3image} alt="Project 3" className="w-full h-auto rounded-lg shadow-lg" />
                </div>

                <div className="w-full sm:w-1/2 lg:w-1/3 flex flex-col justify-center items-start">
                    <div className="mb-4">
                        <h6 className="text-xl font-semibold">About Project 3</h6>
                        <p className="text-lg text-gray-700 mt-2">
                            Full CRUD app using MERN stack, enabling Create, Read, Update, Delete operations with seamless database integration.
                        </p>
                    </div>
                    <div>
                        {/* Link to Project 3 page */}
                        <Link to="/project3">
                            <button className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300">
                                Project 3
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Project 4 */}
            <div className="flex flex-wrap justify-center gap-8 my-10">


                <div className="w-full sm:w-1/2 lg:w-1/3 flex flex-col justify-center items-start">
                    <div className="mb-4">
                        <h6 className="text-xl font-semibold">About Project 4</h6>
                        <p className="text-lg text-gray-700 mt-2">
                            Built a responsive portfolio website using React and Tailwind CSS, showcasing projects, deployed seamlessly via Netlify.
                        </p>
                    </div>
                    <div>
                        {/* Link to Project 3 page */}
                        <Link to="/project4">
                            <button className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300">
                                Project 4
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3">
                    <img src={project4image} alt="Project 4" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
            </div>

        </div>
    );
}

export default Projects;
