/* eslint-disable jsx-a11y/alt-text */
import "./index.scss";
import Rocket from "../../assets/imgs/rocket.png";
import { useInView, InView } from "react-intersection-observer";
import { useState, useRef, useEffect } from "react";
import Finger from "../../assets/svgs/finger.svg";
// import "reactjs-popup/dist/index.css";
// import Popup from "reactjs-popup";
import emailjs from "@emailjs/browser";
import ReactJsAlert from "reactjs-alert";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup as Mappopup,
} from "react-leaflet";

const Contact = () => {
  // const position = [51.505, -0.09];
  const [tookoff, setTookOff] = useState(false);
  const [loading, setLoading] = useState(false);
  const formref = useRef();
  // const alertref = useRef();
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [status, setStatus] = useState(false);
  const [type, setType] = useState("success");
  const [title, setTitle] = useState("This is a alert");

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ayffwnl",
        "template_vsgq6f9",
        formref.current,
        "SUwRzXhu2XrS58b-c"
      )
      .then(
        (result) => {
          formref.current.reset();
          setStatus(true);
          setType("success");
          setTitle("Sucessfully sent message!!");
          setLoading(false);
        },
        (error) => {
          setStatus(true);
          setType("error");
          setTitle("Failed to send message !!");
          setLoading(false);
        }
      );
  };

  useEffect(() => {
    setTimeout(() => {
      if (inView === true) {
        setTookOff(true);
      }
    }, [2000]);
  }, [inView]);
  return (
    <section id="contact" className="contact-container">
      <div className="top">
        <div className="left">
          <h4>
            Start a <span className="focus">project</span>{" "}
          </h4>
        </div>
        <div className="center">
          <p>
            Interested in working <span className="focus">together</span> ? We
            should queue up a time to chat. I’ll buy the coffee.
          </p>
        </div>
        <div className="right">
          <a href="#services">
            <button>
              <img src={Finger} width="50px" /> Let's Do this
            </button>
          </a>
        </div>
      </div>
      {!tookoff && (
        <InView triggerOnce delay={300}>
          <div
            ref={ref}
            className={inView ? "rocket animate-rocket" : "rocket"}
          >
            <img src={Rocket} className="rocketself" />
          </div>
        </InView>
      )}
      <div className="box-center">
        <h1>Contact Me</h1>
        <div className="box">
          <div className="left">
            <form ref={formref} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name">Enter your Name</label>
                <input
                  type="name"
                  id="name"
                  name="name"
                  maxLength={32}
                  placeholder="Sneha"
                  required
                  className="input-box"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Enter your email</label>
                <input
                  type="email"
                  id="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
                  name="email"
                  placeholder="example@gmail.com"
                  required
                  className="input-box"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Your subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="subject?"
                  required
                  className="input-box"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  type="message"
                  id="message"
                  placeholder="what do you wnat to say?"
                  required
                  className="input-box"
                />
              </div>
              <div className="form-group submit">
                {loading ? (
                  <input type="submit" value="Loading..." />
                ) : (
                  <input type="submit" value="Send Mail" />
                )}
              </div>
            </form>
          </div>
          <ReactJsAlert
            status={status} // true or false
            type={type} // success, warning, error, info
            title={title}
            Close={() => setStatus(false)}
          />
          <div className="map-container">
            <h1 className="find-title">
              Find us{" "}
              <div className="highlight">&lt;Kathmandu,Koteshwor&gt;</div>
            </h1>
            <MapContainer
              center={[27.6756, 85.3459]}
              zoom={14}
              scrollWheelZoom={false}
              minZoom={6}
              dragging={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker
                icon={
                  new Icon({
                    iconUrl: markerIconPng,
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                  })
                }
                position={[27.6756, 85.3459]}
              >
                <Mappopup>
                  neeswebserives | He is <span className="focus">dreaming</span>{" "}
                  somwhere here. Don't disturb him, but you can schedule coffee
                  with him.
                </Mappopup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
