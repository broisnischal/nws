import "./index.scss";

const imgs = [
  {
    url: "https://res.cloudinary.com/dacp0r5b7/image/upload/v1661524006/icons/merowallpaper_dg3kzr.png",
  },
  {
    url: "https://res.cloudinary.com/dacp0r5b7/image/upload/v1662671274/icons/shoe_tqolbp.png",
  },
  {
    url: "https://res.cloudinary.com/dacp0r5b7/image/upload/v1662673192/icons/nees_tymbat.png",
  },
  {
    url: "https://www.psdstack.com/wp-content/uploads/2017/12/featured-photoshop-tutorials.jpg",
  },
];

const Recent = () => {
  return (
    <section id="recent" className="recent-div">
      <div className="center">
        <div className="title">
          <h1>Recent Works</h1>
        </div>
        <div className="section">
          <div className="spans">
            <a>Websites</a>
            <a>Designs</a>
            <a>Videos</a>
          </div>
          <div className="flex-row">
            {imgs.map((item, i) => (
              <div className="box" key={i}>
                <div
                  style={{ backgroundImage: `url(${item?.url})` }}
                  className="img-container"
                ></div>
                <div className="details">
                  <h2>Upcoming</h2>
                  <p>
                    This feature is in under development by website provider.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recent;
