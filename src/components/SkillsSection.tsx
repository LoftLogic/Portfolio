import { Star, Code2, Database, GitBranch, Container, Package, FileCode2 } from "lucide-react";
import { SiHtml5, SiCss3, SiReact, SiJavascript, SiTypescript, SiTailwindcss, 
         SiNodedotjs, SiExpress, SiPython, SiDjango, SiFlask, SiSpringboot,
         SiGithub, SiDocker, SiPostman } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import { PiFileCppBold } from "react-icons/pi";
import { useTheme } from "./ThemeContext";
import { cn } from '../lib/utils'

import { act, useState } from "react";

const skills = [
    // Frontend
    {name: "HTML",  level: 4, category: "Frontend", icon: SiHtml5},
    {name: "CSS", level: 4, category: "Frontend", icon: SiCss3},
    {name: "React", level: 5, category: "Frontend", icon: SiReact},
    {name: "JavaScript", level: 5, category: "Frontend", icon: SiJavascript},
    {name: "TypeScript", level: 5, category: "Frontend", icon: SiTypescript},
    {name: "Tailwind CSS", level: 5, category: "Frontend", icon: SiTailwindcss},

    // Backend
    {name: "SQL", level: 4, category: "Backend", icon: Database},
    {name: "Node.js", level: 4, category: "Backend", icon: SiNodedotjs},
    {name: "Express", level: 4, category: "Backend", icon: SiExpress},
    {name: "Java", level: 5, category: "Backend", icon: FaJava},
    {name: "Spring Boot", level: 4, category: "Backend", icon: SiSpringboot},
    {name: "Python", level: 5, category: "Backend", icon: SiPython},
    {name: "Django", level: 4, category: "Backend", icon: SiDjango},
    {name: "Flask", level: 3, category: "Backend", icon: SiFlask},
    {name: "C++", level: 4, category: "Backend", icon: PiFileCppBold },

    // Tools
    { name: "Git/Github", level: 5, category: "Dev Tools", icon: SiGithub },
    { name: "Docker", level: 3, category: "Dev Tools", icon: SiDocker },
    { name: "Postman", level: 4, category: "Dev Tools", icon: SiPostman },
    { name: "VS Code", level: 5, category: "Dev Tools", icon: BiLogoVisualStudio },

    // // Data Science
    // { name: "Numpy"}
]


const categories = ["All", "Frontend", "Backend", "Dev Tools"]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const { isDarkMode } = useTheme(); // Get theme state

    const filteredSkills = skills.filter((skill) => 
        activeCategory === "All" || skill.category === activeCategory
    );

    const defaultTextColor = () => isDarkMode ? 'text-white' : 'text-black';
    const defaultFillColor = () => isDarkMode ? 'fill-white' : 'fill-black';
    
    const renderStars = (level: number) => {
        const stars = [];
        const isPerfectScore = level === 5;
        
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <Star 
                    key={i}
                    className={`h-5 w-5 ${
                        i <= level 
                            ? isPerfectScore 
                                ? 'fill-primary text-primary' 
                                : defaultFillColor() + " " + defaultTextColor()
                            : 'text-gray-600'
                    }`}
                />
            );
        }
        
        return stars;
    };

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills </span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button 
                        key={key} 
                        onClick={() => setActiveCategory(category)}
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}> 
                            {category} 
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-center mb-3">
                            <h3 className="font-semibold text-lg mb-4"> {skill.name} </h3>
                            <skill.icon className={`h-12 w-12 mx-auto mb-3 ${
                                skill.level === 5 ? 'text-primary' : defaultTextColor()
                            }`} />
                        </div>
                        <div className="flex gap-1 items-center justify-center">
                            {renderStars(skill.level)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}