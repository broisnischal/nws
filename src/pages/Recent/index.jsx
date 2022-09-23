import { useRef, useState } from "react";
// import { Zoom } from "reactjs-image-zoom";
import "./index.scss";
import { saveAs } from "file-saver";
import { DownloadRounded } from "@mui/icons-material";
const images = [
  "https://res.cloudinary.com/dacp0r5b7/image/upload/v1661524006/icons/merowallpaper_dg3kzr.png",

  "https://res.cloudinary.com/dacp0r5b7/image/upload/v1662673192/icons/nees_tymbat.png",

  "https://www.psdstack.com/wp-content/uploads/2017/12/featured-photoshop-tutorials.jpg",

  "https://res.cloudinary.com/dacp0r5b7/image/upload/v1663755016/works/wallpaper1_nceg92.jpg",
  "https://res.cloudinary.com/dacp0r5b7/image/upload/v1663755020/works/hello_g62rfj.jpg",

  "https://res.cloudinary.com/dacp0r5b7/image/upload/v1663755041/works/colorfulbackground_qqidjr.jpg",
  "https://res.cloudinary.com/dacp0r5b7/image/upload/v1663755037/works/neeswallpaper_fojhum.png",
  "https://res.cloudinary.com/dacp0r5b7/image/upload/v1662671274/icons/shoe_tqolbp.png",
];

const Recent = () => {
  const [choosen, setChoosen] = useState(0);
  const imgref = useRef();

  const downloadImage = (index) => {
    saveAs(images[choosen], `designs_${index}.jpg`); // Put your image url here.
  };
  return (
    <>
      <section id="recent" className="recent-div">
        <h1>Recent Works</h1>
        <div className="container">
          {/* <Zoom /> */}
          <div className="choices">
            {images.map((item, i) => (
              <div className="single" key={i}>
                <img
                  src={item}
                  alt={i}
                  loading="lazy"
                  className={
                    choosen === i ? "active projectimages" : "projectimages"
                  }
                  onClick={() => {
                    setChoosen(i);
                  }}
                />
              </div>
            ))}
          </div>
          <div className="choosen">
            <button
              className="download-choosen"
              onClick={() => downloadImage(choosen)}
            >
              <DownloadRounded />
            </button>
            <img ref={imgref} src={images[choosen]} alt="" />
          </div>

          {/* <div className="section"> */}
          {/* <div className="spans">
          <a>Websites</a>
          <a>Designs</a>
          <a>Videos</a>
        </div>
        <div className="flex-row">
          {imgs.map((item, i) => (
            <Zoom
              style={{ margin: "20px", backgroundSize: 400 }}
              key={i}
              width={100}
              imagesrc={item.url}
              maxwidth={300}
              height={300}
              size={100}
            />
          ))}
        </div> */}
          {/* </div> */}
        </div>
        <a href="#contact">Request Design</a>
      </section>
    </>
  );
};

export default Recent;
