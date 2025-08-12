import { motion } from "framer-motion";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
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
        className="mb-10"
    >
        <h2 className="text-2xl font-bold text-center mb-6 text-white">{title}</h2>
        <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill, index) => (
                <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.15 }}
                    className="flex flex-col items-center p-5 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 cursor-pointer hover:shadow-xl transition"
                >
                    <motion.div
                        className="text-5xl mb-3 text-white"
                        variants={floatingAnimation}
                        animate="animate"
                    >
                        {skill.icon}
                    </motion.div>
                    <p className="text-white font-semibold">{skill.name}</p>
                </motion.div>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    return (
        <section className="py-16" id="skills">
            <div className="max-w-6xl mx-auto px-6">
                <h1 className="text-4xl font-bold text-center mb-6 text-white">
                    My Skills
                </h1>
                <p className="text-center mb-12 text-gray-300 max-w-2xl mx-auto text-lg">
                    I am continuously expanding my skill set, mastering new tools and
                    technologies to deliver the best digital experiences.
                </p>

                <SkillCategory
                    title="Frontend"
                    skills={[
                        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
                        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
                        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
                        { name: "React", icon: <FaReact className="text-cyan-400" /> },
                        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
                        { name: "DaisyUI", icon: <SiDaisyui className="text-purple-400" /> },
                    ]}
                />

                <SkillCategory
                    title="Backend"
                    skills={[
                        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
                        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
                        { name: "REST API", icon: <SiExpress className="text-gray-300" /> },
                        { name: "Authentication", icon: <SiFirebase className="text-yellow-500" /> },
                        { name: "JWT", icon: <SiJsonwebtokens className="text-pink-500" /> },
                    ]}
                />

                <SkillCategory
                    title="Database"
                    skills={[
                        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
                        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
                    ]}
                />

                <SkillCategory
                    title="DevOps & Tools"
                    skills={[
                        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
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
