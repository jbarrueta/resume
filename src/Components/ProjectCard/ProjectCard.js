export default function ProjectCard({ title, image, link }) {
  const onClick = () => (window.location = link);
  return (
    <div
      className="tc bg-light-blue dib br3 pa3 ma2 grow pointer dim bw2 shadow-5"
      style={{
        backgroundColor: "rgba(255,255,255,0.15)",
      }}
      onClick={onClick}
    >
      <img src={title} alt="Project Image" width="100px" />
      <div>
        <h2>{title ? title : "Project coming soon"}</h2>
      </div>
    </div>
  );
}
