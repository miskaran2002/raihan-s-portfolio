import React from "react";
import { motion } from "framer-motion";
import { FaSchool, FaGraduationCap, FaUniversity } from "react-icons/fa";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.4,
        },
    },
};

const cardVariants = {
    hiddenLeft: { opacity: 0, x: -80 },
    hiddenRight: { opacity: 0, x: 80 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

const Education = () => {
    return (
        <section
            id="education"
            className="min-h-screen px-6 md:px-20 py-20 text-white relative z-10"
        >
            <div className="max-w-5xl mx-auto">
                <h2 className="text-5xl font-extrabold mb-16 text-cyan-400 text-center select-none">
                    My Education
                </h2>

                <motion.div
                    className="relative"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* vertical line */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-cyan-500/40 rounded-full"></div>

                    {/* BSc */}
                    <motion.div
                        className="mb-16 flex items-center w-full"
                        variants={cardVariants}
                        initial="hiddenLeft"
                        animate="visible"
                    >
                        <div className="w-1/2 pr-8 text-right hidden md:block">
                            <h3 className="text-2xl font-semibold text-cyan-400">BSc</h3>
                            <p className="text-gray-300">
                                <span className="font-semibold">University:</span> University of
                                Barisal
                            </p>
                            <p className="text-gray-300">
                                <span className="font-semibold">Department:</span> CSE
                            </p>
                            <p className="text-gray-300">2022 – Present</p>
                            <p className="text-cyan-400 font-semibold">CGPA: 3.43</p>
                        </div>

                        {/* middle icon */}
                        <div className="w-12 h-12 flex items-center justify-center bg-cyan-500 text-white rounded-full shadow-lg mx-auto relative z-10">
                            <FaUniversity size={24} />
                        </div>

                        <div className="w-1/2 pl-8 md:hidden block">
                            {/* for small screens card on right */}
                            <h3 className="text-2xl font-semibold text-cyan-400">BSc</h3>
                            <p className="text-gray-300">
                                <span className="font-semibold">University:</span> University of
                                Barisal
                            </p>
                            <p className="text-gray-300">
                                <span className="font-semibold">Department:</span> CSE
                            </p>
                            <p className="text-gray-300">2022 – Present</p>
                            <p className="text-cyan-400 font-semibold">CGPA: 3.43</p>
                        </div>
                    </motion.div>

                    {/* HSC */}
                    <motion.div
                        className="mb-16 flex items-center w-full flex-row-reverse"
                        variants={cardVariants}
                        initial="hiddenRight"
                        animate="visible"
                    >
                        <div className="w-1/2 pl-8 text-left hidden md:block">
                            <h3 className="text-2xl font-semibold text-cyan-400">HSC</h3>
                            <p className="text-gray-300">
                                <span className="font-semibold">College:</span> Milestone
                                College, Dhaka
                            </p>
                            <p className="text-gray-300">
                                <span className="font-semibold">Group:</span> Science
                            </p>
                            <p className="text-gray-300">Passing Year: 2020</p>
                            <p className="text-cyan-400 font-semibold">Result: GPA 5.00</p>
                        </div>

                        {/* middle icon */}
                        <div className="w-12 h-12 flex items-center justify-center bg-cyan-500 text-white rounded-full shadow-lg mx-auto relative z-10">
                            <FaGraduationCap size={24} />
                        </div>

                        <div className="w-1/2 pr-8 md:hidden block text-right">
                            {/* small screens */}
                            <h3 className="text-2xl font-semibold text-cyan-400">HSC</h3>
                            <p className="text-gray-300">
                                <span className="font-semibold">College:</span> Milestone
                                College, Dhaka
                            </p>
                            <p className="text-gray-300">
                                <span className="font-semibold">Group:</span> Science
                            </p>
                            <p className="text-gray-300">Passing Year: 2020</p>
                            <p className="text-cyan-400 font-semibold">Result: GPA 5.00</p>
                        </div>
                    </motion.div>

                    {/* SSC */}
                    <motion.div
                        className="mb-16 flex items-center w-full"
                        variants={cardVariants}
                        initial="hiddenLeft"
                        animate="visible"
                    >
                        <div className="w-1/2 pr-8 text-right hidden md:block">
                            <h3 className="text-2xl font-semibold text-cyan-400">SSC</h3>
                            <p className="text-gray-300">
                                <span className="font-semibold">School:</span> Taslima Memorial
                                Academy
                            </p>
                            <p className="text-gray-300">
                                <span className="font-semibold">Group:</span> Science
                            </p>
                            <p className="text-gray-300">Passing Year: 2018</p>
                            <p className="text-cyan-400 font-semibold">Result: GPA 5.00</p>
                        </div>

                        {/* middle icon */}
                        <div className="w-12 h-12 flex items-center justify-center bg-cyan-500 text-white rounded-full shadow-lg mx-auto relative z-10">
                            <FaSchool size={24} />
                        </div>

                        <div className="w-1/2 pl-8 md:hidden block">
                            {/* small screens */}
                            <h3 className="text-2xl font-semibold text-cyan-400">SSC</h3>
                            <p className="text-gray-300">
                                <span className="font-semibold">School:</span> Taslima Memorial
                                Academy
                            </p>
                            <p className="text-gray-300">
                                <span className="font-semibold">Group:</span> Science
                            </p>
                            <p className="text-gray-300">Passing Year: 2018</p>
                            <p className="text-cyan-400 font-semibold">Result: GPA 5.00</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
