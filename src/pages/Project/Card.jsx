import "./card.scss";

const Card = ({ title = "default title", img, url, desc }) => {
  return (
    <div className="project-card">
      <div className="img">
        <a href={url} target="_blank" rel="noreferrer">
          <img src={img} className="home-img" alt={title} />
        </a>
      </div>
      <div className="box">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
