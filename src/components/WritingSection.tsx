import book from '../assets/BIBFirstPart.pdf'

export const WritingSection = () => {
    return <section id="resume" className="py-24 px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary"> Creative Writing </span>
        </h2>
        <p>
            This is a high fantasy sci-fi novel I have been working on, still work in progress.
        </p>
        <div>
            <embed src={book}
                type="application/pdf"
                width="50%"
                height="1000px"
                className="mx-auto my-30 opacity-95"/>
        </div>
    </section>
}