import "./index.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
// import CopyrightIcon from "@mui/icons-material/Copyright";
import Quote from "../../assets/svgs/quote.svg";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
// import { AddReaction } from "@mui/icons-material";
// const sociallinks = [
//   {
//     name: "facebook",
//     url: "https://facebook.com/techneesofficial17",
//   },
//   {
//     name: "twitter",
//     url: "https://twitter.com/neeswebservices",
//   },
//   {
//     name: "instagram",
//     url: "https://instagram.com/neeswebservices",
//   },
//   {
//     name: "youtube",
//     url: "https://www.youtube.com/channel/UCP013FdEq1ti7fz1y78v1eg",
//   },
//   {
//     name: "telegram",
//     url: "https://t.me/neeswebservices",
//   },
//   {
//     name: "github",
//     url: "https://github.com/neeswebservices",
//   },
// ];

const Footer = () => {
  return (
    <footer id="footer" className="footer-container">
      <div className="flex-bottom">
        <div className="top">
          <img src={Quote} alt="" />
          <p>
            Consistency is key to Victory.{" "}
            <FormatQuoteIcon className="m-icon" />
          </p>
        </div>
        <div className="socials">
          <div className="single">
            <a
              href="https://www.youtube.com/channel/UCP013FdEq1ti7fz1y78v1eg"
              rel="noreferrer"
              target="_blank"
            >
              <YouTubeIcon className="social-icon" />
            </a>
          </div>
          <div className="single">
            <a
              href="https://github.com/neeswebservices"
              rel="noreferrer"
              target="_blank"
            >
              <GitHubIcon className="social-icon" />
            </a>
          </div>
          <div className="single">
            <a
              href="https://facebook.com/102.nees.418"
              rel="noreferrer"
              target="_blank"
            >
              <FacebookRoundedIcon className="social-icon" />
            </a>
          </div>
          <div className="single">
            <a
              href="https://instagram.com/neeswebservices"
              rel="noreferrer"
              target="_blank"
            >
              <InstagramIcon className="social-icon" />
            </a>
          </div>
          <div className="single">
            <a
              href="https://t.me/neeswebservices"
              rel="noreferrer"
              target="_blank"
            >
              <TelegramIcon className="social-icon" />
            </a>
          </div>
          <div className="single">
            <a
              href="https://twitter.com/neeswebservices"
              rel="noreferrer"
              target="_blank"
            >
              <TwitterIcon className="social-icon" />
            </a>
          </div>
        </div>
        <div className="bottom-footer">
          <span>
            <a
              className="contact-href"
              target="_blank"
              rel="noreferrer"
              href="tel:+9779803104764"
            >
              <AddIcCallIcon />
              9779803104764{" "}
            </a>
          </span>
          <span>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:info@nischal-dahal.com.np"
              className="contact-href"
            >
              info
              <AlternateEmailIcon />
              nischal-dahal.com.np
            </a>
          </span>
          <a
            href="https://www.google.com/search?q=neeswebservices"
            className="mapbtn"
            target="_blank"
            rel="noreferrer"
          >
            Find on Google
          </a>
          <span>© 2022 neeswebservices | All right reserved.</span>
          <small style={{ display: "flex", alignItems: "center" }}>
            Made with{" "}
            <FavoriteOutlinedIcon
              style={{ fontSize: "20px", margin: "auto 7px" }}
            />{" "}
            in 8 hours by NWS Inc.
          </small>
          <a
            style={{ marginTop: "10px" }}
            onClick={(e) => {
              e.preventDefault();
            }}
            href="//www.dmca.com/Protection/Status.aspx?ID=82bf1abe-26d7-4897-aa06-ed39b9ee761b"
            title="DMCA.com Protection Status"
            className="dmca-badge"
          >
            {" "}
            <img
              src="https://images.dmca.com/Badges/dmca-badge-w100-5x1-01.png?ID=82bf1abe-26d7-4897-aa06-ed39b9ee761b"
              alt="DMCA.com Protection Status"
            />
          </a>{" "}
          <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js">
            {" "}
          </script>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
