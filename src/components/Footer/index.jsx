import "./index.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Quote from "../../assets/svgs/quote.svg";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { AddReaction } from "@mui/icons-material";
const sociallinks = [
  {
    name: "facebook",
    url: "https://facebook.com/techneesofficial17",
  },
  {
    name: "twitter",
    url: "https://twitter.com/neeswebservices",
  },
  {
    name: "instagram",
    url: "https://instagram.com/neeswebservices",
  },
  {
    name: "youtube",
    url: "https://www.youtube.com/channel/UCP013FdEq1ti7fz1y78v1eg",
  },
  {
    name: "telegram",
    url: "https://t.me/neeswebservices",
  },
  {
    name: "github",
    url: "https://github.com/neeswebservices",
  },
];

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
            <AddIcCallIcon /> 977-9803104764
          </span>
          <span>
            neeswebservices
            <AlternateEmailIcon />
            gmail.com
          </span>
          <span>© 2022 neeswebservices | All rights reserved.</span>
          <small style={{ display: "flex", alignItems: "center" }}>
            Made with{" "}
            <FavoriteOutlinedIcon
              style={{ fontSize: "20px", margin: "auto 7px" }}
            />{" "}
            in 8 hours by NWS Inc.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
