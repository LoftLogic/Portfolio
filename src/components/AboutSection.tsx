import {cn} from "../lib/utils";
import { CircuitBoard, Code, Microscope } from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3>
                        Current third-year Computer Science student at Northeastern University, with a concentration in <i>Systems Engineering</i>
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

                {/* THREE ICONS */}
                <div className="grid grid-cols-1 gap-6">
                    
                    <div className="gradient-border p-6 card-hover"> 
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-semibold text-lg"> Programming </h4>
                                <p className="text-muted-foreground">
                                    Extremely proficient in Python, Java, C++, and JavaScript/Typescript, with a strong foundation in algorithms and data structures and object-oriented programming.
                                    Also familiar with other fullstack development tools such as Tailwind, React, Express, Django and SQL.
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
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover"> 
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <CircuitBoard className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                    <h4 className="text-semibold text-lg"> Systems </h4>
                                    <p className="text-muted-foreground">
                                        Familiar with systems programming, including operating systems, systems security, computer architecture, and low-level programming with
                                        C, Rust and ASM x86.
                                    </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
}