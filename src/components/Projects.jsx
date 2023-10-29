import HtmlCssProjects from "./HtmlCssProjects";
import JavaScriptProjects from "./JavaScriptProjects";
import ReactProjects from "./ReactProjects";

function Projects() {
  return (
    <section id="projects" className="py-8">
      <HtmlCssProjects />
      <JavaScriptProjects />
      <ReactProjects />
    </section>
  );
}

export default Projects;
