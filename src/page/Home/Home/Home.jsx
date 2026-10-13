import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaDownload } from "react-icons/fa";

const imageAnimation = {
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
        },
    },
};

const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.5, ease: "easeOut" },
    },
};

const MoreAboutButton = () => {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <motion.button
            onClick={() => setIsClicked(!isClicked)}
            whileTap={{ scale: 0.9 }}
            className={`
                inline-flex items-center space-x-2 font-semibold cursor-pointer 
                px-4 py-2 rounded-lg transition-colors
                ${isClicked ? "bg-blue-600 text-white" : "bg-cyan-700 bg-opacity-30 text-white hover:bg-cyan-600 hover:bg-opacity-50"}
            `}
        >
            <span>More About Me</span>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                animate={{ rotate: isClicked ? 90 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </motion.svg>
        </motion.button>
    );
};

const Homepage = () => {
    const images = [
        "https://i.ibb.co/ynGsCC88/photo-2025-08-13-08-54-35.jpg",
        "https://i.ibb.co.com/Q0vfY6L/linkedin-photo.jpg",
        "https://i.ibb.co.com/7d7ffqC2/photo-port.jpg",
        "https://i.ibb.co.com/HDSvn6p1/last-image.jpg"
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % images.length);
        }, 3000); // change every 3 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center text-white px-6 md:px-20"
        >
            <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-24 relative z-10">
                {/* Left side - image carousel with smooth up-down animation */}
                <motion.div
                    className="rounded-full p-1 shadow-lg flex-shrink-0 w-48 h-48 md:w-64 md:h-64 bg-gray-300 overflow-hidden"
                    animate={imageAnimation.animate}
                >
                    <motion.img
                        key={images[current]}
                        src={images[current]}
                        alt="Profile"
                        className="rounded-full w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    />
                </motion.div>

                {/* Right side - intro with fade and slide up */}
                <motion.div
                    className="max-w-xl"
                    initial="hidden"
                    animate="visible"
                    variants={textAnimation}
                >
                    <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white">
                        --Greetings and welcome.<br /> I am{" "}
                        <span className="text-cyan-400">Md Raihan Uddin</span>
                    </h1>
                    
                    {/* Task 2: Designation */}
                    <h2 className="text-xl md:text-2xl text-gray-400 font-semibold mb-4">
                        Full Stack Developer
                    </h2>

                    <p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-300">
                        I am a fullstack developer specializing in creating engaging front-end
                        experiences and robust backend systems. I work from design through
                        backend integration to deliver complete web solutions.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                        <NavLink to="/about" className="inline-block text-lg">
                            <MoreAboutButton />
                        </NavLink>
                        
                        {/* Task 3: Resume Download Button using Google Drive Link */}
                        <a 
                            href="https://drive.google.com/uc?export=download&id=1YuQl_pWqQAgotpM3h7f-FT8XXH-UTtEa" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center space-x-2 font-semibold cursor-pointer px-5 py-2.5 rounded-lg transition-colors border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900"
                        >
                            <FaDownload className="text-sm" />
                            <span>Download Resume</span>
                        </a>
                    </div>

                    {/* Task 4: Social Links */}
                    <div className="flex gap-6 text-2xl">
                        <a href="https://github.com/miskaran2002" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/md-raihan-uddin-cse8/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-colors">
                            <FaLinkedin />
                        </a>
                        <a href="https://x.com/MdRaihanUd57710" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#1da1f2] transition-colors">
                            <FaTwitter />
                        </a>
                        <a href="https://www.facebook.com/miskatujjaman.raihan" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#1877f2] transition-colors">
                            <FaFacebook />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Homepage;