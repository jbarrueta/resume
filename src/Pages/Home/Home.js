import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import "./Home.css";

export default function Home() {
  const projects = [{}, {}, {}, {}];
  return (
    <>
      <div className="Home tc mh4 mt5 pa2 white-80">
        <h2 className=" pa2">Bio</h2>
        <p className=" f4 tl ph4 pb4">
          Detail-oriented Web Developer with experience developing web sites
          using HTML, CSS, JQuery, React, Node JS, Django, PHP and JavaScript.
          Built various web applications with responsive front ends and restful
          API for the back end. Responding to challenges by designing and
          developing solutions and building web applications aligned to
          customer's services. Translating solutions into code and working
          across many different APIs, third-party integrations and databases.
        </p>
      </div>
      <div className="br3 ba bw3 white b--white-20 ma4 mt5 shadow-3 flex flex-column">
        <h2 className="tc">Projects</h2>
        <div
          style={{
            overflowY: "auto",
            display: "flex",
            flexWrap: "wrap",
            flexGrow: 1,
            justifyContent: "center",
            paddingTop: "40px",
          }}
        >
          {projects.map((project, i) => {
            return (
              <ProjectCard
                key={i}
                title={project.title}
                image={project.image}
                link={project.link}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
