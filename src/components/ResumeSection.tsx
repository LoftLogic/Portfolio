
export const ResumeSection = () => {
    return <section id="resume" className="py-24 px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            See my <span className="text-primary"> Resume </span>
        </h2>
        <div>
            <embed src="public\assets\EvanLiResume.pdf"
                type="application/pdf"
                width="50%"
                height="1000px"
                className="mx-auto my-30 opacity-95"/>
        </div>
    </section>
}