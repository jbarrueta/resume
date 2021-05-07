import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import "./Home.css";
import walkaroundImg from "../../assets/walkaround.png";
import wegoImg1 from "../../assets/wegoImage1.png";
import wegoImg2 from "../../assets/wegoImage2.png";
import fleetManagerImg from "../../assets/fleetManager.png";
import recognitionImg from "../../assets/recognition.png";

export default function Home() {
  const projectHandler = (projectSubdomain) => {
    window.open(`https://${projectSubdomain}.jorgebarrueta.me`, "_blank");
  };

  const projects = [
    {
      title: "Walkaround Inspection",
      description:
        "Web solution for transportation companies. Allowing mechanics to perform and keep track of walkaround inspections performed on their fleet of trucks.",
      onClickHandler: () => projectHandler("walkaround"),
      image: walkaroundImg,
      gif: walkaroundImg,
    },
    {
      title: "WeGo Platform",
      description:
        "Multi-cloud extensible platform that provides transportation as a service, allowing users to request and track orders delivered by an autonomous vehicle concept.",
      onClickHandler: () => projectHandler("demand"),
      image: wegoImg1,
      gif: wegoImg2,
    },
    {
      title: "WeGo Fleet Management",
      description:
        "Paired with the WeGo client platform, Fleet Management handles the supply side of the platform. Allows a company fleet manager to register and update fleets and autonomous vehicles.",
      onClickHandler: () => projectHandler("supply"),
      image: fleetManagerImg,
      gif: fleetManagerImg,
    },
    {
      title: "Face Recognition",
      description:
        "Simple react application used to recognize faces from images entered onto the application. Makes use of a third party called Clarifai.",
      onClickHandler: () => projectHandler("recognition"),
      image: recognitionImg,
      gif: recognitionImg,
    },
  ];
  return (
    <>
      <div className="Home tc mh4 mt5 pa2 white-80">
        <h2 className=" pa2">Bio</h2>
        <p className=" f4 tl ph4 pb4">
          I am a senior student at St. Edward's University studying computer
          science. I have experience developing web applications using HTML,
          CSS, JQuery, React, Node JS, Django, PHP and JavaScript. I have built
          various web applications with responsive front-ends and restful API's
          for the back-end. Responding to challenges by designing and developing
          solutions and building web applications aligned to customer's
          services. Translating solutions into code and working across many
          different APIs, third-party integrations and databases.
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
                description={project.description}
                image={project.image}
                gif={project.gif}
                onClickHandler={project.onClickHandler}
                className="ma2"
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
