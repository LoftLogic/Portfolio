
type Department = "Computer Science" | "Data Science" | "Cybersecurity" | "Mathematics";
type Level = "Undergraduate" | "Graduate";

interface Course {
    title: string;
    description: string;
    inProgress: boolean;
    subject: Department;
    level: Level;
    skills?: string[];
    grade?: string;
}

const descriptions = {
    "Object Oriented Design": "A Java course that covers the principles of object-oriented programming and design philosophy.\
        Covers concepts such as encapsulation, inheritance, polymorphism, and design patterns such as Composition, Observer, Strategy, etc.\
        Emphasizes writing clean, maintainable, and scalable code, as well as thorough and vigourous testing using JUnit.",
    "Data Structures and Algorithms": "A comprehensive course on fundamental data structures (arrays, linked lists, stacks, queues, trees, graphs) and algorithms (sorting, searching, graph traversal)",
    "Computer Systems": "C and Assembly course that explores low-level programming, memory management, and operating systems.",
    "Foundations in Distributed Systems": "A graduate level course on the deployment and foundations of distributed systems",
    "Introduction to Databases": "Covers how to create and query databases using SQL while preserving ACID principles, as well as noSQL datbases such as MongoDB.",
    "Foundations in Cybersecurity": "Covers the fundamentals of cybersecurity, including cryptography, hashing, bash scripting, and password cracking.",
    "Foundations in Data Science": "Introduction to linear algebra, web scraping, API usage, and python scripting with libraries such as Pandas, Numpy, Matplotlib, and Seaborn, as well as basic Artificial Intelligence and Machine Learning concepts.",
    "Calculus I & II": "Covers limits, derivatives, integrals, and series with applications to real-world problems such as calculating volumes.",
    "Cornerstones in Engineering": "Focuses on the engineering design process, including problem identification, brainstorming, prototyping, testing, and iteration. Involves hands-on projects that included CAD design, electronics wiring, and C++ programming."
};

const courses: Array<Course> = [
    { title: "Foundations in Distributed Systems", description: descriptions["Foundations in Distributed Systems"], inProgress: true, subject: "Computer Science", level: "Graduate", skills: ["Docker", "Go", "C"] },
    { title: "Data Structures and Algorithms", description: descriptions["Data Structures and Algorithms"], inProgress: true, subject: "Computer Science", level: "Undergraduate"},
    { title: "Computer Systems", description: descriptions["Computer Systems"], inProgress: false, subject: "Computer Science", level:             "Undergraduate", skills: ["C", "Assembly"], grade: "A" },
    { title: "Object Oriented Design", description: descriptions["Object Oriented Design"], inProgress: false, subject: "Computer Science", level: "Undergraduate", skills: ["Java", "JUnit"], grade: "B+" },
    { title: "Introduction to Databases", description: descriptions["Introduction to Databases"], inProgress: false, subject: "Computer Science",
    level: "Undergraduate", skills: ["SQL", "MongoDB"], grade: "A-" },
    { title: "Foundations in Cybersecurity", description: descriptions["Foundations in Cybersecurity"], inProgress: false, subject: "Cybersecurity", level: "Undergraduate", skills: ["Bash", "Cryptography", "Password Cracking", "Cross-Site Scripting"], grade: "A" },
    { title: "Foundations in Data Science", description: descriptions["Foundations in Data Science"], inProgress: false, subject: "Data Science",
    level: "Undergraduate", skills: ["Python", "Pandas", "Numpy", "Matplotlib", "Seaborn", ], grade: "A" },
    { title: "Calculus I & II", description: descriptions["Calculus I & II"], inProgress: false, subject: "Mathematics", level: "Undergraduate",
    skills: ["Derivatives", "Integrals", "Series"], grade: "A"
    },
    { title: "Cornerstones in Engineering", description: descriptions["Cornerstones in Engineering"], inProgress: false, subject: "Computer Science", level: "Undergraduate", skills: ["CAD", "Arduino", "C++"], grade: "A" }
];



export const CoursesSection = () => {
    return <section id="courses" className="py-24 px-4 relative bg-secondary/30">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary"> Coursework </span>
        </h2>

        <div className="flex flex-wrap">
            {courses.map((courses, key) =>(
                <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                    <h2 className="font-semibold text-lg mb-4"> 
                        {courses.title}
                    </h2>
                </div>
            ))}    
        </div>

    </section>

};