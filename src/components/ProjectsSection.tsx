type Work = "Project" | "Research" | "Club";

const tagLimit = 6;

interface project {
    id: number,
    title: string,
    description: string,
    display: any,
    tags: string[],
    techs: string[],
    demoUrl: string,
    date: string,
    type: Work,
}

const projects: project[] = [
    {
        id: 1,
        title: "LLM Security Paper",
        description: "ACE, or Abstract Concrete Executer, is an expiermental LLM security framework that uses secure information flow and static analysis\
        to safeguard LLM applications from indirect prompt injections or denial of service attacks.",
        display: <embed src="https://arxiv.org/pdf/2504.20984" 
                type="application/pdf" 
                width="100%" 
                height="600px" />,
        tags: ["Research", "Security", "Artificial Intelligence", "Collabrative"],
        techs: ["Python", "Langchain", "Linux", "Conda"],
        demoUrl: "https://arxiv.org/abs/2504.20984",
        date: "Jan 2025 - June 2025",
        type: "Research"
    },
    {
        id: 2,
        title: "Shell",
        description: "A shell program that supports all basic system calls as well as sequencing, piping, and I/O redirection.",
        display: "tbd",
        tags: ["Systems", "Solo"],
        techs: ["C", "C++", "NCurses"],
        demoUrl: "#",
        date: "May 2025 - Aug 2025",
        type: "Project"
    },
    {
        id: 3,
        title: "Sustainability Exhibit",
        description: "A childhood sustainability game that utilizes 3D-printed electronics, arduino, and an HTML Webpage",
        display: "tbd",
        tags: ["Hardware", "Systems", "Collab"],
        techs: ["C++", "Arduino", "JavaScript", "HTML/CSS"],
        demoUrl: "#",
        date: "March 2024 - May 2024",
        type: "Project"
    }
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                {" "}
                My <span className="text-primary"> Works- </span> to be Implemented
            </h2>
        </div>
    </section>
}