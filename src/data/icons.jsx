import { FaNode } from "react-icons/fa";
import {
  SiAngular,
  SiAxios,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

const iconClassName = "text-2xl me-2";

export const icons = {
  react: <SiReact className={iconClassName} />,
  vite: <SiVite className={iconClassName} />,
  redux: <SiRedux className={iconClassName} />,
  tailwind: <SiTailwindcss className={iconClassName} />,
  axios: <SiAxios className={iconClassName} />,
  node: <FaNode className={iconClassName} />,
  express: <SiExpress className={iconClassName} />,
  typescript: <SiTypescript className={iconClassName} />,
  firebase: <SiFirebase className={iconClassName} />,
  mongodb: <SiMongodb className={iconClassName} />,
  angular: <SiAngular className={iconClassName} />,
};
