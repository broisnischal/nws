import Card from "./Card";
import "./index.scss";
import { Fade, Slide } from "react-awesome-reveal";
const projects = [
  {
    title: "Nepal Air Index",
    url: "http://neesnepalapi.eu5.net/",
    img: "https://res.cloudinary.com/dacp0r5b7/image/upload/v1661178652/icons/Screenshot_33_pkeshg.png",
    desc: "A project to display the air pollution index of all over the cities and district of Nepal.",
  },
  {
    title: "QR code Generator",
    url: "https://neeswebservices.github.io/js-qrcode/",
    img: "https://creativeplasticcards.com.au/wp-content/uploads/2020/04/QR-Code.png",
    desc: "It creates the qr code as that you provide the input the input to it and you can share.",
  },
  {
    title: "Bat obfuscator",
    url: "https://neeswebservices.github.io/bat-obfuscator/",
    img: "",
    desc: "It is the project for obfuscatoring your bat code so no one can read with clean eyes.",
  },
  {
    title: "Your Clipboard",
    url: "https://github.com/neeswebservices/yourownclipboard/releases/tag/neesbinclip",
    img: "https://www.dignited.com/wp-content/uploads/2020/03/Windows-10-Clipboard-History-featured-image-1024x576.jpg",
    desc: "This is the desktop application available for window which is use as clipboard.",
  },
  {
    title: "Nepal Location | API",
    url: "https://nepallocation.herokuapp.com/",
    img: "https://res.cloudinary.com/dacp0r5b7/image/upload/v1661177865/icons/Screenshot_31_sxjlye.png",
    desc: "API to get the data of district/province of Nepal with best speed possible.",
  },
  {
    title: "Premier Class Zoom APP",
    url: "https://premierroutineapi.herokuapp.com/",
    img: "https://res.cloudinary.com/dacp0r5b7/image/upload/v1661178220/icons/Screenshot_32_wdzn0i.png",
    desc: "Premier college application to join the zoom online meeting for the class.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="project-container">
      <div className="center">
        <div className="title">
          <h1>Minor Projects</h1>
        </div>
        <div className="content">
          {projects.map((item, index) => (
            <Slide
              key={index}
              direction="up"
              delay={index * 50}
              damping={30}
              triggerOnce
            >
              <Fade delay={index * 70}>
                <Card
                  url={item?.url}
                  title={item?.title}
                  img={
                    item?.img ||
                    "https://res.cloudinary.com/dacp0r5b7/image/upload/v1661176203/icons/Image_not_available_z4yqnp.png"
                  }
                  desc={item?.desc}
                />
              </Fade>
            </Slide>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
