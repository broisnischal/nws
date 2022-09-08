import "./index.scss";
// import Gamedev from "../../assets/imgs/icons/gamedev.png";
// import Modling from "../../assets/imgs/icons/3dmodling.png";
// import Digital from "../../assets/imgs/icons/digital.png";
import { Fade } from "react-awesome-reveal";

const service = [
  {
    title: "Web Development",
    desc: "	It includes creating the website that includes simple to advanced topics.",
    imgsrc:
      "https://res.cloudinary.com/dacp0r5b7/image/upload/v1661100536/icons/webdev_j0gy6u.png",
    startingprice: 500,
  },

  {
    title: "Android Development",
    desc: "	It includes creating simple mobile application that is worthy for small organizations.",
    imgsrc:
      "https://res.cloudinary.com/dacp0r5b7/image/upload/v1661100535/icons/android_qponxl.png",
    startingprice: 5000,
  },
  {
    title: "3D modelling",
    desc: "	It referst to creating the 3d models that is required for your any project ie; game development, etcs.",
    imgsrc:
      "https://res.cloudinary.com/dacp0r5b7/image/upload/v1661100535/icons/3dmodling_lqlr5j.png",
    startingprice: 1500,
  },
  {
    title: "Content Writing",
    desc: "This include writing the blog , article and content for your ideas and the project that you have been going through.",
    imgsrc:
      "https://res.cloudinary.com/dacp0r5b7/image/upload/v1661100537/icons/content_ibq8xm.png",
    startingprice: 100,
  },
  {
    title: "Video Editing",
    desc: "Video Editing is the process of managing footages and making them pleasant to watch.",
    imgsrc:
      "https://res.cloudinary.com/dacp0r5b7/image/upload/v1661100536/icons/video_rnalqo.png",
    startingprice: 400,
  },
  {
    title: "Graphic Designing",
    desc: "It is the process to connect to paths in the body that includes ideas, skills and research.",
    imgsrc:
      "https://res.cloudinary.com/dacp0r5b7/image/upload/v1661100536/icons/illustration_prmjv5.png",
    startingprice: 300,
  },
  {
    title: "Digital Marketing",
    desc: "It simply means promotion of your brands getting potentials and creating Advertisements.",
    imgsrc:
      "https://res.cloudinary.com/dacp0r5b7/image/upload/v1661100537/icons/digital_udjxqb.png",
    startingprice: 1000,
  },
  {
    title: "Illustration",
    desc: "It refers to creating of Logo, vector icons, svgs, and wallpapers and much more.",
    imgsrc:
      "https://res.cloudinary.com/dacp0r5b7/image/upload/v1661100537/icons/content_ibq8xm.png",
    startingprice: 200,
  },
  {
    title: "Game Development",
    desc: "It includes creating Game of your ideas for PC, mobile and any platforms.",
    imgsrc:
      "https://res.cloudinary.com/dacp0r5b7/image/upload/v1661100535/icons/gamedev_icon_rrxxsc.png",
    startingprice: 9999,
  },
];

const Service = () => {
  return (
    <section id="services" className="service-container">
      <div className="title">
        <h2 style={{ color: "white" }}>
          <span className="tag">&lt;services&gt;</span> What i Provide?
          <span className="tag">&lt;/services&gt;</span>
        </h2>
      </div>
      <div className="service-container">
        {service.map((item, index) => (
          <Fade key={index} triggerOnce delay={index * 50}>
            <div className="service">
              <div className="img">
                <img src={item.imgsrc} loading="lazy" alt={item.title} />
              </div>
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.desc} </p>
                <h4>
                  Starts from{" "}
                  <span className="price">Rs.{item.startingprice}</span>
                </h4>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default Service;
