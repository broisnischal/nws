import Counter from "../../components/Counter";
import "./index.scss";
import { useInView } from "react-intersection-observer";
import CoffeeIcon from "@mui/icons-material/Coffee";
import GroupIcon from "@mui/icons-material/Group";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
const items = [
  {
    title: "Website",
    number: 61,
    icon: <WebAssetIcon />,
  },
  {
    title: "App",
    number: 3,
    icon: <AppShortcutIcon />,
  },
  {
    title: "Game",
    number: 4,
    icon: <SportsEsportsIcon />,
  },
  {
    title: "Designs",
    number: 101,
    icon: <DesignServicesIcon />,
  },
  {
    title: "Coffees",
    number: 41,
    icon: <CoffeeIcon />,
  },
  {
    title: "Clients",
    number: 7,
    icon: <GroupIcon />,
  },
  {
    title: "Googles",
    number: 103,
    icon: <ScreenSearchDesktopIcon />,
  },
  {
    title: "3D Models",
    number: 12,
    icon: <ViewInArIcon />,
  },
];

const Views = () => {
  const { ref, inView } = useInView({
    threshold: 1,
  });
  return (
    <section id="views" className="views-container">
      <div className="center">
        <div className="content">
          <div className="title">
            <h1 className={inView ? "bganimate" : ""} ref={ref}>
              What i have done?
            </h1>
          </div>
          <div className="flex-wrapper">
            {items.map((item, index) => (
              <div className="items" key={index}>
                <div className="icon-div">{item.icon}</div>
                <div className="count-div">
                  <Counter end={item.number} start={item?.start} />
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Views;
