import {cn} from "../lib/utils";
import { Code, Microscope, Binary } from "lucide-react";
import { FaUser } from "react-icons/fa";
import portrait from '../assets/portrait.png'


export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="my-4">
                        <img src={portrait} className="py-7 rounded-2xl"/>
                        <h3 className="italic my-0"> A super flattering picture of me</h3>
                    </div>


                    <h3>
                        Current third-year <i>Computer Science</i> student at Northeastern University, with a concentration in <i>Systems Engineering</i>
                    </h3>
                    <p className="text-muted-foreground">
                        {" "}
                        With a passion for innovation and a curiosity for research and armed with proficiencies in Python, Java, C++, and JavaScript,
                         I am eager to use my skills to tackle complex challenges and contribute to impactful projects.
                    </p>

                    <p className="text-muted-foreground">
                        {" "}
                        {/** NOTE: This is cap */}
                        I am interested in machine learning, research and development, and low-level programming.
                        Particularly, I am fascinated my exploring the applications of artificial intelligence in systems, including
                        robotics, cybersecurity, and computer graphics.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a className="cosmic-button" href="#contact">
                            {" "}
                            Contact Me
                        </a>

                        <a href="#resume" className={cn("px-6 py-2 rounded-full border border-primary",
                        "text-primary hover:bg-primary/10 transition-colors duration-300")}>
                            {" "}
                            See my Resume
                        </a>
                    </div>
                </div>

                {/* FOUR ICONS */}
                <div className="grid grid-cols-1 gap-6">
                    
                    <div className="gradient-border p-6 card-hover"> 
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Binary className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-semibold text-lg"> Programming </h4>
                                <p className="text-muted-foreground">
                                    Extremely well versed in core programming fundamentals, including using complex data structures, algorithms, object oriented programming, parallel programming, 
                                    as well as both centralized and distributed systems programming.
                                    Specifically very skilled with Python, C++, Java, and JavaScript/TypeScript, as well as other languages such as C, Rust, Matlab, and Racket.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover"> 
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Microscope className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-semibold text-lg"> Research </h4>
                                <p className="text-muted-foreground">
                                    Former full-time researcher at Northeastern University's Privacy and Security Lab, where I studied
                                    the security of LLM systems. First Author of an LLM security paper submitted to NDSS titled
                                    <i> ACE: A Security Architecture for LLM-Integrated App Systems </i>.
                                    Previously worked on a project for AI startup <i> MatrixOrigin </i> on creating a text to SQL LLM platform.
                                    Currently working on a paper that exposes vulnerabilities in existing agentic systems.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover"> 
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                    <h4 className="text-semibold text-lg"> Software Development </h4>
                                    <p className="text-muted-foreground">
                                        Skilled in basic software development, including web/front-end design with TailwindCSS, React.js, and TypeScript,
                                        API design with Express, Spring or Django, and database design with both SQL and NoSQl.
                                        Also familiar with developer tools such as most popular IDEs (IntelliJ, Visual Studio Code, Visual Studio, Arduino, etc) including AI integrated IDEs such as Cursor,
                                        as well as GitHub, Postman, and Docker.
                                        Developed software for courses, clubs, hackathons and in personal passion projects.
                                    </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover"> 
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <FaUser className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                    <h4 className="text-semibold text-lg"> Student Organizations </h4>
                                    <p className="text-muted-foreground">
                                        Active member in student clubs, including  Forge, a product development club that is currently working on
                                        a social location review and sharing app, as well as Rev, a selective (~25% acceptance) entreapreanurship
                                        club that fosters the growth of AI startups.
                                    </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
}