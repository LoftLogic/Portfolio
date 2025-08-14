type Work = "Project" | "Research";

interface projects {
    id: number,
    title: string,
    description: string,
    image: string,
    tags: string[],
    demoUrl: string,
}

const projects = [
    {
        id: 0,
        title: "LLM Security Paper",
        description: "ACE, or Abstract Concrete Executer, is an expiermental LLM security framework that uses secure information flow and static analysis\
        to safeguard LLM applications from indirect prompt injections or denial of service attacks.",
        image: "tbd",
        tags: ["Research"],
        demoURL: "https://arxiv.org/abs/2504.20984"
    },
    {
        id: 1,
        title: "Shell",
        description: "A shell program that supports all basic system calls as well as sequencing, piping, and I/O redirection.",
        image: "tbd",
        tags: ["C", "Systems"],
        demoUrl: "#"
    },
    {

    }
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                {" "}
                Featured <span className="text-primary"> Projects- </span> to be Implemented
            </h2>
        </div>
    </section>
}