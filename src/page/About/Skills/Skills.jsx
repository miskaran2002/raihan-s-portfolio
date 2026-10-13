import React from "react";
import { motion } from "framer-motion";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaTerminal,
    FaDna,
    FaMicrochip,
    FaBrain,
    FaCode
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiDaisyui,
    SiExpress,
    SiMongodb,
    SiFirebase,
    SiJsonwebtokens,
    SiVercel,
    SiRender,
    SiNetlify,
    SiTypescript,
    SiNextdotjs,
    SiPrisma,
    SiPostgresql,
    SiStripe,
    SiCplusplus,
    SiOpengl,
    SiLinux,
    SiPython
} from "react-icons/si";

// Animation variants
const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const floatingAnimation = {
    animate: {
        y: [0, -8, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
        },
    },
};

const SkillCategory = ({ title, skills }) => (
    <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-12"
    >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-cyan-400 tracking-wide">
            {title}
        </h2>
        <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
            {skills.map((skill, index) => (
                <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center p-4 sm:p-5 bg-gray-900/80 backdrop-blur-md rounded-xl shadow-lg border border-gray-800/80 hover:border-cyan-500/50 cursor-pointer transition duration-300 w-28 sm:w-36 text-center"
                >
                    <motion.div
                        className="text-4xl sm:text-5xl mb-3"
                        variants={floatingAnimation}
                        animate="animate"
                    >
                        {skill.icon}
                    </motion.div>
                    <p className="text-white font-semibold text-xs sm:text-sm">{skill.name}</p>
                </motion.div>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    return (
        <section className="py-16 md:py-24 relative z-10 text-white" id="skills">
            <div className="max-w-6xl mx-auto px-6">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 text-cyan-400">
                    My Technical Expertise
                </h1>
                <p className="text-center mb-14 text-gray-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                    A comprehensive overview of my technical stack across full-stack web engineering, database architecture, academic computer science core, and bioinformatics research.
                </p>

                {/* 1. Frontend Skills */}
                <SkillCategory
                    title="Frontend Engineering"
                    skills={[
                        { name: "React", icon: <FaReact className="text-cyan-400" /> },
                        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
                        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
                        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
                        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
                        { name: "DaisyUI", icon: <SiDaisyui className="text-purple-400" /> },
                        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
                        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
                    ]}
                />

                {/* 2. Backend & API */}
                <SkillCategory
                    title="Backend & Server Architecture"
                    skills={[
                        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
                        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
                        { name: "Prisma ORM", icon: <SiPrisma className="text-teal-400" /> },
                        { name: "REST API", icon: <FaCode className="text-cyan-300" /> },
                        { name: "Stripe Payment", icon: <SiStripe className="text-indigo-400" /> },
                        { name: "JWT Auth", icon: <SiJsonwebtokens className="text-pink-500" /> },
                    ]}
                />

                {/* 3. Database Systems */}
                <SkillCategory
                    title="Database Architecture"
                    skills={[
                        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
                        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
                        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
                    ]}
                />

                {/* 4. Academic & Research (Bioinformatics & ML) */}
                <SkillCategory
                    title="Bioinformatics & Research"
                    skills={[
                        { name: "Consensus NMF", icon: <FaBrain className="text-purple-400" /> },
                        { name: "Single-Cell RNA-Seq", icon: <FaDna className="text-pink-400" /> },
                        { name: "Matrix Factorization", icon: <FaCode className="text-yellow-300" /> },
                        { name: "Python", icon: <SiPython className="text-blue-400" /> },
                    ]}
                />

                {/* 5. CS Core & Systems */}
                <SkillCategory
                    title="Computer Science Core & Systems"
                    skills={[
                        { name: "C / C++", icon: <SiCplusplus className="text-blue-600" /> },
                        { name: "Compiler Design", icon: <FaCode className="text-cyan-300" /> },
                        { name: "OpenGL Graphics", icon: <SiOpengl className="text-red-500" /> },
                        { name: "Shell Scripting", icon: <FaTerminal className="text-green-400" /> },
                        { name: "8086 Assembly", icon: <FaMicrochip className="text-amber-400" /> },
                        { name: "Automata Theory", icon: <FaBrain className="text-cyan-400" /> },
                    ]}
                />

                {/* 6. DevOps & Cloud Tools */}
                <SkillCategory
                    title="DevOps & Deployment Tools"
                    skills={[
                        { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-500" /> },
                        { name: "Linux OS", icon: <SiLinux className="text-yellow-300" /> },
                        { name: "Vercel", icon: <SiVercel className="text-white" /> },
                        { name: "Render", icon: <SiRender className="text-purple-500" /> },
                        { name: "Netlify", icon: <SiNetlify className="text-green-400" /> },
                    ]}
                />
            </div>
        </section>
    );
};

export default Skills;