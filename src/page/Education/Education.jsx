import React from "react";
import { motion } from "framer-motion";
import { FaSchool, FaGraduationCap, FaUniversity } from "react-icons/fa";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
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

const Education = () => {
    return (
        <section
            id="education"
            className="min-h-screen px-6 md:px-20 py-20 text-white relative z-10"
        >
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl font-extrabold mb-10 text-cyan-400 select-none">
                   My Education
                </h2>

                <p className="mb-10 max-w-xl text-gray-300 text-lg leading-relaxed">
                    My academic journey reflects my commitment to excellence and passion for
                    learning. Each step has built the foundation for my growth and development in
                    computer science and engineering.
                </p>

                <motion.div
                    className="space-y-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >

                    {/* BSc */}
                    <motion.div
                        className="bg-gray-900 bg-opacity-80 rounded-lg p-6 flex items-start gap-6 shadow-lg cursor-pointer"
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <FaUniversity className="text-cyan-400 text-5xl mt-1" />
                        <div>
                            <h3 className="text-2xl font-semibold mb-1">BSc</h3>
                            <p className="text-gray-300">
                                <span className="font-semibold">University:</span> University of Barisal, Barisal, Bangladesh
                            </p>
                            <p className="text-gray-300">
                                <span className="font-semibold">Department:</span> Computer Science & Engineering
                            </p>
                            <p className="text-gray-300">
                                <span className="font-semibold">University Duration:</span> 2022 – Present
                            </p>

                            <p className="text-cyan-400 font-semibold mt-1">CGPA: 3.43</p>
                        </div>
                    </motion.div>
                    {/* HSC */}
                    <motion.div
                        className="bg-gray-900 bg-opacity-80 rounded-lg p-6 flex items-start gap-6 shadow-lg cursor-pointer"
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <FaGraduationCap className="text-cyan-400 text-5xl mt-1" />
                        <div>
                            <h3 className="text-2xl font-semibold mb-1">HSC</h3>
                            <p className="text-gray-300">
                                <span className="font-semibold">College:</span> Milestone College, Uttara, Dhaka
                            </p>
                            <p className="text-gray-300">
                                <span className="font-semibold">Group:</span> Science
                            </p>
                            <p className="text-gray-300">
                                <span className="font-semibold">Passing Year:</span> 2020
                            </p>
                            <p className="text-cyan-400 font-semibold mt-1">Result: GPA 5.00</p>
                        </div>
                    </motion.div>

                    {/* SSC */}
                    <motion.div
                        className="bg-gray-900 bg-opacity-80 rounded-lg p-6 flex items-start gap-6 shadow-lg cursor-pointer"
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <FaSchool className="text-cyan-400 text-5xl mt-1" />
                        <div>
                            <h3 className="text-2xl font-semibold mb-1">SSC</h3>
                            <p className="text-gray-300">
                                <span className="font-semibold">School:</span> Taslima Memorial Academy, Patharghata, Barguna
                            </p>
                            <p className="text-gray-300">
                                <span className="font-semibold">Group:</span> Science
                            </p>
                            <p className="text-gray-300">
                                <span className="font-semibold">Passing Year:</span> 2018
                            </p>
                            <p className="text-cyan-400 font-semibold mt-1">Result: GPA 5.00</p>
                        </div>
                    </motion.div>

                   
                   
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
