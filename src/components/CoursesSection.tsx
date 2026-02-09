import { 
  Code, 
  Binary, 
  Cpu, 
  Network, 
  Database,   
  Shield, 
  BarChart4, 
  Sigma, 
  Wrench 
} from "lucide-react";
import type {JSX} from "react";

type Department = "Computer Science" | "Data Science" | "Cybersecurity" | "Mathematics" | "General Engineering";
type Level = "Undergraduate" | "Graduate";

interface Course {
    title: string;
    description: string;
    inProgress: boolean;
    subject: Department;
    level: Level;
    skills?: string[];
    grade?: string;
    courseNum: string;
    courseIcon: JSX.Element
}

const descriptions = {
    "CS3500": "A Java course that covers the principles of object-oriented programming and design philosophy. Covers concepts such as encapsulation, inheritance, polymorphism, and design patterns such as Composition, Observer, Strategy, etc. Emphasizes writing clean, maintainable, and scalable code, as well as thorough and vigourous testing using JUnit.",
    "CS3000": "A comprehensive course on fundamental data structures (arrays, linked lists, stacks, queues, trees, graphs) and algorithms (sorting, searching, graph traversal). Heavy emphasis on asymptotic behavior analysis as well as writing and analyzing pseudocode.",
    "CS3650": "C and Assembly course that explores low-level programming, memory management, and operating systems. Covers file systems, virtual memory, interface between assembly and high level languages, parallel programming, and I/O control.",
    "CS7610": "Core principles distributed systems, focusing on failure models, consensus, replication, synchronization, and fault tolerance, connecting theory to practice by studying real-world systems (GFS, HDFS, Spanner, and Spark) and modern applications such as blockchains, and distributed machine learning. Projects involve C, C++, Rust, and Docker.",
    "CS3200": "Covers how to create and query databases using SQL while preserving ACID principles, as well as noSQL datbases such as MongoDB. Emphasizes writing complex SQL queries, designing databases with complex relationships, and boolean algebra",
    "CY2550": "Introduces fundamental security concepts including cryptography (Asymmetric and Symmetric), hashing, bash scripting, proper password storage, as well as basic penetration methods, such as password cracking, SQL injections, and Cross-Site Scripting.",
    "DS3000": "Introduction to linear algebra, web scraping, API usage, and python scripting with libraries such as Pandas, Numpy, Matplotlib, and Seaborn, as well as basic Artificial Intelligence and Machine Learning concepts.",
    "MATH1365": "Covers limits, derivatives, integrals, and series with applications to real-world problems such as calculating volumes.",
    "GE1501": "Focuses on the engineering design process, including problem identification, brainstorming, prototyping, testing, and iteration. Involves hands-on projects that included CAD design, electronics wiring, and C++ programming."
};

const courseIcons = {
  "CS3500": <Code className="w-10 h-10" />,
  "CS3000": <Binary className="w-10 h-10" />,
  "CS3650": <Cpu className="w-10 h-10" />,
  "CS7610": <Network className="w-10 h-10" />,
  "CS3200": <Database className="w-10 h-10" />,
  "CY2550": <Shield className="w-10 h-10" />,
  "DS3000": <BarChart4 className="w-10 h-10" />,
  "MATH1365": <Sigma className="w-10 h-10" />,
  "GE1501": <Wrench className="w-10 h-10" />,
};

const courses: Array<Course> = [
    { title: "Foundations in Distributed Systems", description: descriptions["CS7610"], inProgress: true, subject: "Computer Science", level: "Graduate", skills: ["Docker", "Go", "C"], courseNum: "CS7610", courseIcon: courseIcons["CS7610"] },
    { title: "Data Structures and Algorithms", description: descriptions["CS3000"], inProgress: true, subject: "Computer Science", level: "Undergraduate", courseNum: "CS3000", courseIcon: courseIcons["CS3000"]},
    { title: "Computer Systems", description: descriptions["CS3650"], inProgress: false, subject: "Computer Science", level: "Undergraduate", skills: ["C", "Assembly"], grade: "A", courseNum: "CS3650", courseIcon: courseIcons["CS3650"] },
    { title: "Foundations in Cybersecurity", description: descriptions["CY2550"], inProgress: false, subject: "Cybersecurity", level: "Undergraduate", skills: ["Bash", "Cryptography", "Password Cracking", "Cross-Site Scripting"], grade: "A", courseNum: "CY2550", courseIcon: courseIcons["CY2550"]},
    { title: "Object Oriented Design", description: descriptions["CS3500"], inProgress: false, subject: "Computer Science", level: "Undergraduate", skills: ["Java", "JUnit"], grade: "B+", courseNum: "CS3500", courseIcon: courseIcons["CS3500"] },
    { title: "Introduction to Databases", description: descriptions["CS3200"], inProgress: false, subject: "Computer Science", level: "Undergraduate", skills: ["SQL", "MongoDB"], grade: "A-", courseNum: "CS3200", courseIcon: courseIcons["CS3200"] },
    { title: "Foundations in Data Science", description: descriptions["DS3000"], inProgress: false, subject: "Data Science", level: "Undergraduate", skills: ["Python", "Pandas", "Numpy", "Matplotlib", "Seaborn", ], grade: "A", courseNum: "DS3000", courseIcon: courseIcons["DS3000"] },
    { title: "Calculus I & II", description: descriptions["MATH1365"], inProgress: false, subject: "Mathematics", level: "Undergraduate", skills: ["Derivatives", "Integrals", "Series"], grade: "A", courseNum: "MATH1365", courseIcon: courseIcons["MATH1365"]},
    { title: "Cornerstones in Engineering", description: descriptions["GE1501"], inProgress: false, subject: "General Engineering", level: "Undergraduate", skills: ["CAD", "Arduino", "C++"], grade: "A", courseNum: "GE1501", courseIcon: courseIcons["GE1501"] }
];

export const CoursesSection = () => {
    return (
        <section id="coursework" className="py-24 px-4 relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Coursework</span> at <span className="text-primary">Northeastern University</span>
            </h2>
            <p className="text-xl md:text-2xl font-bold mb-12 text-center">
                B.S  in <span className="text-primary">  Computer Science</span> with a concentration in  
                <span className="text-primary"> Systems</span>
            </p>

            {/* <a className="cosmic-button" href="#">
                            {" "}
                            See my trancsript
            </a> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {courses.map((course, key) => (
                    <div key={key} className="bg-card rounded-lg shadow-xs card-hover flex flex-col">
                        {/* Top Header Row */}
                        <div className="flex justify-between items-center px-6 py-3 border-b border-border">
                            <span className="text-sm font-medium text-muted-foreground">
                                {course.subject}
                            </span>
                            <span className="text-sm font-bold text-primary">
                                {course.courseNum}
                            </span>
                        </div>

                        {/* Middle Content */}
                        <div className="flex gap-4 p-6 flex-grow">
                            <div className="flex-shrink-0">
                                <div className="p-3 rounded-full bg-primary/10 text-primary">
                                    {course.courseIcon}
                                </div>
                            </div>
                            <div className="flex-grow">
                                <h3 className="font-semibold text-lg mb-1">
                                    {course.title}
                                </h3>
                                <p className="text-xs text-primary mb-2 font-medium">
                                    {course.level}
                                </p>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {course.description}
                                </p>
                            </div>
                        </div>

                        {/* Bottom Footer */}
                        <div className="px-6 py-3 border-t border-border bg-secondary/20 rounded-b-lg">
                            {course.inProgress ? (
                                <span className="text-sm font-medium text-primary">
                                    In Progress
                                </span>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-muted-foreground">Final Grade:</span>
                                    <span className="text-sm font-bold text-primary">
                                        {course.grade}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};