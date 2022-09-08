import "./index.scss";
import Laptop from "../../assets/imgs/laptop.png";
import Mobile from "../../assets/imgs/mobile.jpg";
import { useState } from "react";
import { useEffect } from "react";
const Plan = () => {
  const urls = [
    "https://nischal-dahal.com.np/",
    "https://neeswebservices.business.site/",
  ];
  function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
  }
  const [random, setRandom] = useState();

  useEffect(() => {
    setRandom(random_item(urls));
  }, []);

  return (
    <section id="plan" className="plan-container">
      <div className="center">
        <h1 className="title">We design your views</h1>

        <div className="bottom">
          <div className="img-box">
            <img src={Laptop} alt="" className="back" />
            <div className="content">
              <h1>We provide Responsive design.&quot;</h1>
              <br />
              <p>
                A landing page is a standalone web page created specifically for
                a marketing or advertising campaign.
              </p>
            </div>
          </div>
          <div className="img-box-2">
            <img src={Mobile} alt="" className="back" />
            <div className="content">
              <iframe
                frameBorder="0"
                marginHeight="1"
                marginWidth="1"
                name="cboxmain"
                id="cboxmain"
                seamless="seamless"
                scrolling="yes"
                allowtransparency="true"
                src={random}
                title="neeswebservices"
                height="600px"

                //   width="450px"
                //   style="border:none;"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
