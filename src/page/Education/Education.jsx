import React from "react";
import { motion } from "framer-motion";
import { FaSchool, FaGraduationCap, FaUniversity, FaMedal, FaStar } from "react-icons/fa";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const cardVariants = {
    hiddenLeft: { opacity: 0, x: -60 },
    hiddenRight: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const Education = () => {
    // Education Data Array for easier management and cleaner code
    const educationData = [
        {
            title: "B.Sc. in Computer Science & Engineering",
            institution: "University of Barishal",
            department: "CSE",
            duration: "2022 – Present",
            result: "Current CGPA: 3.57",
            icon: <FaUniversity size={24} />,
            side: "left",
            highlight: "3rd Year 2nd Semester: CGPA 3.57/4.00 (A+ in Simulation & Modelling)"
        },
        {
            title: "Higher Secondary Certificate (HSC)",
            institution: "Milestone College, Dhaka",
            department: "Science",
            duration: "Passing Year: 2020",
            result: "Result: GPA 5.00",
            icon: <FaGraduationCap size={24} />,
            side: "right",
            highlight: "Achieved maximum GPA in all science subjects."
        },
        {
            title: "Secondary School Certificate (SSC)",
            institution: "Taslima Memorial Academy",
            department: "Science",
            duration: "Passing Year: 2018",
            result: "Result: GPA 5.00",
            icon: <FaSchool size={24} />,
            side: "left",
            highlight: "Consistently maintained top-tier academic performance."
        },
        {
            title: "Junior School Certificate (JSC)",
            institution: "Taslima Memorial Academy",
            department: "General",
            duration: "Passing Year: 2015",
            result: "Result: GPA 5.00",
            icon: <FaMedal size={24} />,
            side: "right",
            highlight: "Awarded Junior School Scholarship for outstanding results."
        },
        {
            title: "Primary School Certificate (PSC)",
            institution: "Local Primary School", // You can update the exact school name here
            department: "General",
            duration: "Passing Year: 2012",
            result: "Result: GPA 5.00",
            icon: <FaStar size={24} />,
            side: "left",
            highlight: "Awarded Primary School Scholarship, starting the journey of academic excellence."
        }
    ];

    return (
        <section
            id="education"
            className="min-h-screen px-4 sm:px-6 md:px-20 py-20 text-white relative z-10"
        >
            <div className="max-w-5xl mx-auto">
                <motion.h2 
                    className="text-4xl sm:text-5xl font-extrabold mb-8 text-cyan-400 text-center select-none"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    My Educational Journey
                </motion.h2>
                
                {/* Intro Paragraph */}
                <motion.p
                    className="text-center text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    From primary school classrooms to the world of algorithms and code, my educational journey has been a consistent pursuit of excellence. Maintaining top grades throughout every public examination has laid a strong foundation for my continuous growth and problem-solving mindset.
                </motion.p>

                <motion.div
                    className="relative"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {/* Vertical line (Timeline) */}
                    <div className="absolute top-0 left-4 md:left-1/2 md:-translate-x-1/2 w-1 h-full bg-cyan-900 rounded-full">
                        {/* Animated progress line over the background line */}
                        <motion.div 
                            className="w-full bg-cyan-400 rounded-full"
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </div>

                    {/* Mapping through education data to generate timeline items */}
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            className={`mb-12 flex flex-col md:flex-row items-start md:items-center w-full relative ${
                                edu.side === "right" ? "md:flex-row-reverse" : ""
                            }`}
                            variants={cardVariants}
                            initial={edu.side === "left" ? "hiddenLeft" : "hiddenRight"}
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {/* Desktop Layout - Content Area */}
                            <div className={`hidden md:block w-1/2 ${edu.side === "left" ? "pr-12 text-right" : "pl-12 text-left"}`}>
                                <div className="bg-gray-900/60 p-6 rounded-2xl border border-gray-800 hover:border-cyan-500/40 transition-colors shadow-lg hover:shadow-cyan-900/20">
                                    <h3 className="text-xl lg:text-2xl font-bold text-cyan-400 mb-2">{edu.title}</h3>
                                    <p className="text-white font-semibold text-base mb-1">{edu.institution}</p>
                                    <div className="text-gray-400 text-sm space-y-1 mb-3">
                                        <p><span className="text-gray-300">Group/Dept:</span> {edu.department}</p>
                                        <p>{edu.duration}</p>
                                    </div>
                                    <p className="inline-block px-3 py-1 bg-cyan-950/80 text-cyan-300 rounded-full text-sm font-bold border border-cyan-800 mb-2">{edu.result}</p>
                                    <p className="text-xs text-gray-400 italic mt-2">"{edu.highlight}"</p>
                                </div>
                            </div>

                            {/* Middle Icon Container */}
                            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-9 h-9 md:w-12 md:h-12 flex items-center justify-center bg-gray-900 border-4 border-cyan-500 text-cyan-400 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)] z-10">
                                <div className="scale-75 md:scale-100">
                                    {edu.icon}
                                </div>
                            </div>

                            {/* Mobile Layout - Content Area */}
                            <div className="md:hidden w-full pl-12 sm:pl-16">
                                <div className="bg-gray-900/80 p-5 rounded-xl border border-gray-800 hover:border-cyan-500/40 transition-colors shadow-lg">
                                    <h3 className="text-lg font-bold text-cyan-400 mb-1">{edu.title}</h3>
                                    <p className="text-white font-medium text-sm mb-2">{edu.institution}</p>
                                    <div className="text-gray-400 text-xs space-y-1 mb-3">
                                        <p>{edu.department} | {edu.duration}</p>
                                    </div>
                                    <p className="inline-block px-2.5 py-1 bg-cyan-950/80 text-cyan-300 rounded-full text-xs font-bold border border-cyan-800">{edu.result}</p>
                                    {edu.highlight && <p className="text-xs text-gray-400 italic mt-3">"{edu.highlight}"</p>}
                                </div>
                            </div>
                            
                            {/* Empty div for spacing on desktop */}
                            <div className="hidden md:block w-1/2"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Education;