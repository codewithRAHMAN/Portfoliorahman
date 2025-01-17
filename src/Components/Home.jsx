import React from 'react';
import { Link } from 'react-scroll'; // Make sure this import is there

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-8 py-10"> {/* Adjusted the gap and added padding */}
            <h1 className="text-5xl font-bold text-center text-gray-800">Hey, I'M MD FAZALUR RAHMAN</h1>
            <p className="text-lg text-center text-gray-600 max-w-xl">
                A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product.
            </p>

            {/* Button Section with Centered Link */}
            <div className="flex justify-center items-center mt-6">
                <Link
                    to="projects"  // This scrolls to the projects section
                    smooth={true}
                    duration={500}
                    className="cursor-pointer bg-blue-500 text-white px-6 py-3 rounded-lg text-xl hover:bg-blue-600 transition duration-300"
                >
                    Projects
                </Link>
            </div>
        </div>
    );
};

export default Home;
