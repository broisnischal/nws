/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import "./index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import { Zoom } from "react-awesome-reveal";
// import { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
import { useEffect, useState } from "react";

const works = [
  {
    title: "Routine of Nepal Technology ",
    description:
      "Working as a graphic designer, content creator and writer in the page also running page as a admin and founder. ",
    img: "https://res.cloudinary.com/dacp0r5b7/image/upload/v1661265852/icons/274966827_469504344819735_9218021549513918308_n_awluvi.jpg",
    date: "aug 2020 to present",
  },
  {
    title: "Routine of Nepal Technology ",
    description:
      "Working as a graphic designer, content creator and writer in the page also running page as a admin and founder. ",
    img: "https://res.cloudinary.com/dacp0r5b7/image/upload/v1661265852/icons/274966827_469504344819735_9218021549513918308_n_awluvi.jpg",
    date: "aug 2020 to present",
  },
  {
    title: "Nepal Location",
    description: "Working as a data entry and api updater.",
    img: "https://res.cloudinary.com/dacp0r5b7/image/upload/v1661178652/icons/Screenshot_33_pkeshg.png",
    date: "jan 2022 to present",
  },
  {
    title: "FreeLogo",
    description:
      "Helped to design and get the coolest idea of logo and vector graphics.",
    img: "https://www.thesmbguide.com/images/freelogoservices-1024x512-20190808.png",
    date: "oct 2021 to present",
  },
  {
    title: "MeroNote",
    description:
      "Created the Note application using PHP for the project of friend and learned a lot of new things.",
    img: "https://res.cloudinary.com/dacp0r5b7/image/upload/v1662648078/icons/Screenshot_61_ebfqek.png",
    date: "Aug 2022",
  },
  {
    title: "Premier Class App",
    description:
      "Helped and learned to create android application and joining zoom application.",
    img: "https://res.cloudinary.com/dacp0r5b7/image/upload/v1662648077/icons/premire_epo3k6.png",
    date: "Sept 2022 ",
  },
  {
    title: "Premier Class App",
    description:
      "Helped and learned to create android application and joining zoom application.",
    img: "https://res.cloudinary.com/dacp0r5b7/image/upload/v1662648077/icons/premire_epo3k6.png",
    date: "Sept 2022 ",
  },
];

const Works = () => {
  // const swiper = useSwiper();

  const [isMobile, setIsMobile] = useState(false);
  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return window.removeEventListener("resize", handleResize);
  });

  return (
    <section id="works" className="work-container">
      <div className="center">
        <h1 className="title">
          Working with{" "}
          <div className="highlight">Experiences and Highlights</div>{" "}
        </h1>
        <Swiper
          className="swiper-div"
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={100}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
          }}
          navigation
          pagination={{ clickable: true }}
        >
          {works.map((item, index) => (
            <SwiperSlide className="swipe" key={index}>
              <div className="box">
                <h3>{item.title}</h3>
                {item.img && <img src={item.img} alt={item.title} />}
                <p>{item.description}</p>
                <h5> {item.date}</h5>
              </div>
            </SwiperSlide>
          ))}
          {/* <button onClick={() => swiper.slideNext()}>&gt;</button> */}
        </Swiper>
      </div>
    </section>
  );
};

export default Works;
