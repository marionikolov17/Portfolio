import ProjectCard from "./ProjectCard/ProjectCard";

export default function ProjectsSection() {
    return (
        <>
            <section className="w-full d-block mt-4 mb-4">
                <h1 className="text-center mt-8 text-4xl font-bold">Projects</h1>

                <div className="w-full flex flex-wrap justify-center mt-6">
                    <ProjectCard />
                </div>
            </section>
        </>
    )
}