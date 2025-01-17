import React from 'react';
import About from './About';
import Home from './Home';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Projects from './Projects';
import Header from './Header';
import Contact from './Contact'

const Portfolio = () => {
    return (
        <div>
            <Header />
            <Sidebar />
            <section id="home" className="min-h-screen bg-gray-100 flex items-center justify-center">
                <Home />
            </section>
            <section id="about" className="min-h-screen bg-blue-100 flex items-center justify-center">
                <About />
            </section>
            <section id="projects" className="min-h-screen bg-green-100 flex items-center justify-center">
                <Projects />
            </section>
            <section id="contact" className="min-h-screen bg-yellow-100 flex items-center justify-center">
                <Contact />

            </section>
            <Footer />
        </div>
    );
};

export default Portfolio;
