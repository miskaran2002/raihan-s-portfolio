import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaFileAlt, FaFootballBall, FaMusic, FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { FlagIcon } from "react-flag-kit";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const boxVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeInOut" },
    },
};

const AboutMe = () => {
    return (
        <section
            id="about"
            className="min-h-screen px-6 md:px-20 py-20 relative z-10 text-white"
        >
            {/* Intro text full width */}
            <div className="max-w-4xl mx-auto mb-12 text-center md:text-left">
                <h2 className="text-5xl font-extrabold mb-6 text-cyan-400 select-none">
                    About Me
                </h2>

                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                    I am Md Raihan Uddin, a passionate Computer Science & Engineering student at
                    University of Barisal. With a strong background in programming and web
                    development, I enjoy building innovative digital solutions. Outside coding, I
                    love sports and music which keep me balanced and creative.
                </p>

                {/* Social Links */}
                <div className="flex justify-center md:justify-start gap-6 mb-8">
                    <a href="https://github.com/miskaran2002" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-cyan-400 transition">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/md-raihan-uddin-cse8/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-cyan-400 transition">
                        <FaLinkedin />
                    </a>
                    <a href="https://x.com/MdRaihanUd57710" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-cyan-400 transition">
                        <FaTwitter />
                    </a>
                    <a href="https://www.facebook.com/miskatujjaman.raihan" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-cyan-400 transition">
                        <FaFacebook />
                    </a>
                </div>

                {/* Languages */}
                <div className="flex flex-wrap justify-center md:justify-start gap-6">
                    <div className="flex items-center gap-2 bg-gray-900 bg-opacity-70 px-4 py-2 rounded-lg shadow">
                        <span role="img" aria-label="Bangla" className="text-xl">🇧🇩</span> Bangla
                    </div>
                    <div className="flex items-center gap-2 bg-gray-900 bg-opacity-70 px-4 py-2 rounded-lg shadow">
                        <span role="img" aria-label="English" className="text-xl">🇬🇧</span> English
                    </div>
                    <div className="flex items-center gap-2 bg-gray-900 bg-opacity-70 px-4 py-2 rounded-lg shadow">
                        <span role="img" aria-label="Hindi" className="text-xl">🇮🇳</span> Hindi
                    </div>
                </div>
            </div>

            {/* Below intro - flex container with animated words and cards */}
            <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
                {/* Left side - animated words */}
                <motion.div
                    className="flex flex-col space-y-6 text-3xl md:text-5xl font-bold tracking-wide flex-1"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={boxVariants}>Programming Journey</motion.div>
                    <motion.div variants={boxVariants}>Passion for Development</motion.div>
                    <motion.div variants={boxVariants}>Creative Mind</motion.div>
                    <motion.div variants={boxVariants}>Lifelong Learner</motion.div>
                    <motion.div variants={boxVariants}>Football Enthusiast</motion.div>
                    <motion.div variants={boxVariants}>Music Lover</motion.div>
                    <motion.div variants={boxVariants}>Problem Solver</motion.div>
                </motion.div>

                {/* Right side - cards */}
                <motion.div
                    className="space-y-8 flex-1"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* University Card */}
                    <motion.div
                        className="bg-gray-900 bg-opacity-80 rounded-lg p-6 flex items-center gap-4 shadow-lg cursor-pointer"
                        variants={boxVariants}
                        whileHover="hover"
                    >
                        <FaUniversity className="text-cyan-400 text-4xl" />
                        <div>
                            <h3 className="text-xl font-semibold mb-1">University</h3>
                            <p>
                                Currently studying Computer Science & Engineering at{" "}
                                <span className="text-cyan-400 font-semibold">
                                    University of Barisal
                                </span>
                                .
                            </p>
                        </div>
                    </motion.div>

                    {/* Research Paper Card */}
                    <motion.div
                        className="bg-gray-900 bg-opacity-80 rounded-lg p-6 flex items-center gap-4 shadow-lg cursor-pointer"
                        variants={boxVariants}
                        whileHover="hover"
                    >
                        <FaFileAlt className="text-cyan-400 text-4xl" />
                        <div>
                            <h3 className="text-xl font-semibold mb-1">Research Paper</h3>
                            <p>
                                Authored research paper on{" "}
                                <a
                                    href="https://www.dropbox.com/scl/fi/fqlqoo5l4zjlzli5io287/THE_IMPACT_OF_ARTIFICIAL_INTELLIGENCE_ON_JOB_AUTOMATION.pdf?rlkey=4hwdl91oqseitohih7qgv888x&st=55nosv1h&dl=0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-400 font-semibold underline"
                                >
                                    THE IMPACT OF ARTIFICIAL INTELLIGENCE ON JOB AUTOMATION
                                </a>
                                .
                            </p>
                        </div>
                    </motion.div>


                    {/* Programming Journey Card */}
                    <motion.div
                        className="bg-gray-900 bg-opacity-80 rounded-lg p-6 shadow-lg cursor-pointer"
                        variants={boxVariants}
                        whileHover="hover"
                    >
                        <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                            Programming Journey
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            I started my programming journey with C and C++ during my early university
                            days. Gradually, I fell in love with web development, mastering React,
                            Node.js, and MongoDB to build full-stack applications.
                        </p>
                    </motion.div>

                    {/* Hobbies Card */}
                    <motion.div
                        className="bg-gray-900 bg-opacity-80 rounded-lg p-6 flex items-center gap-4 shadow-lg cursor-pointer"
                        variants={boxVariants}
                        whileHover="hover"
                    >
                        <FaFootballBall className="text-cyan-400 text-4xl" />
                        <FaMusic className="text-cyan-400 text-4xl" />
                        <div>
                            <h3 className="text-xl font-semibold mb-1">Hobbies & Interests</h3>
                            <p>
                                I enjoy playing football, listening to music, and sometimes jamming with
                                friends on guitar.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutMe;
