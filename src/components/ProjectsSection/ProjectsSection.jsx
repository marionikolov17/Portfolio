/* eslint-disable react/prop-types */
import ProjectCard from "./ProjectCard/ProjectCard";
import { projects } from "./../../data/projects";

export default function ProjectsSection({ handleClickNotification }) {
  return (
    <>
      <section id="projects" className="w-full d-block mt-12 lg:mt-4 mb-4">
        <h1 className="text-center mt-8 text-4xl font-bold">Projects</h1>

        <div className="w-full flex flex-wrap justify-center mt-6 relative">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} handleClickNotification={handleClickNotification} />
          ))}
        </div>
      </section>
    </>
  );
}
