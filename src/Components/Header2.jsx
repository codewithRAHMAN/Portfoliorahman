import React from 'react'
import { Link } from 'react-scroll';
import webdeveloperimage from '../assets/profile-picture.jpeg';



const Header2 = () => {
    return (
        <>
            <div className="flex flex-row items-center justify-between bg-menuBg text-white p-4">
                <Link to="home" smooth={true} duration={500} className="cursor-pointer flex  items-center gap-5">
                    <img src={webdeveloperimage} alt="Web Developer" className="rounded-full w-10 h-10 object-fill " /><p className=' hover:text-red-500'>
                        MD FAZALUR RAHMAN
                    </p>
                </Link>

                <div>
                    <ul className="flex flex-row gap-5">
                        <li>
                            <Link
                                to="Portfolio/#home"
                                smooth={true}
                                duration={500}
                                className="cursor-pointer hover:text-gray-800"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="Portfolio/#about"
                                smooth={true}
                                duration={500}
                                className="cursor-pointer hover:text-gray-800"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="Portfolio/#projects"
                                smooth={true}
                                duration={500}
                                className="cursor-pointer hover:text-gray-800"
                            >
                                Latest Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="Portfolio/#contact"
                                smooth={true}
                                duration={500}
                                className="cursor-pointer hover:text-gray-800"
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header2
