import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router"; // note: "react-router-dom" is standard

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
            animate={{
                color: isClicked ? "#2563EB" /* blue-600 */ : "#06b6d4" /* cyan-400 */,
                transition: { duration: 0.3 },
            }}
            className="inline-flex items-center space-x-2 font-semibold cursor-pointer"
        >
            <span>More About Me</span>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
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
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center text-white px-6 md:px-20"
        >
            <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-24 relative z-10">
                {/* Left side - photo with smooth up-down animation */}
                <motion.div
                    className="rounded-full p-1 shadow-lg flex-shrink-0 w-48 h-48 md:w-64 md:h-64 bg-gray-300"
                    animate={imageAnimation.animate}
                >
                    <img
                        src="https://i.ibb.co.com/7dGjpJHJ/photo-port.jpg"
                        alt="Profile"
                        className="rounded-full w-full h-full object-cover"
                    />
                </motion.div>

                {/* Right side - intro with fade and slide up */}
                <motion.div
                    className="max-w-xl"
                    initial="hidden"
                    animate="visible"
                    variants={textAnimation}
                >
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                        --Greetings and welcome.<br></br> I am{" "}
                        <span className="text-cyan-400">Md Raihan Uddin</span>
                    </h1>

                    <p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-300">
                        I am a fullstack developer specializing in creating engaging front-end
                        experiences and robust backend systems. I work from design through
                        backend integration to deliver complete web solutions.
                    </p>

                    <NavLink to="/about" className="inline-block text-2xl">
                        <MoreAboutButton />
                    </NavLink>
                </motion.div>
            </div>
        </section>
    );
};

export default Homepage;
