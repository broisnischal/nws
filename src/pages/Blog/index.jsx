// import { Parallax } from "react-scroll-parallax";
import "./index.scss";

const Blog = () => {
  return (
    <section id="blog" className="blog-container">
      {/* <Parallax translateX={3}> */}
      <h1 className="title">
        My{" "}
        <a
          rel="noreferrer"
          target={"_blank"}
          href="https://blogs.nischal-dahal.com.np"
        >
          Blogs
        </a>{" "}
        🚀
      </h1>
      {/* </Parallax> */}
    </section>
  );
};

export default Blog;
