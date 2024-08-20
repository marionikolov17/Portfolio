import { FaNode } from "react-icons/fa";
import {
  SiAngular,
  SiAxios,
  SiExpress,
  SiFirebase,
  SiKnexdotjs,
  SiMongodb,
  SiMysql,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

const iconClassName = "text-2xl me-2";

export const icons = {
  react: <SiReact className={iconClassName + " text-[#61dbfb]"} />,
  vite: <SiVite className={iconClassName + " text-[#ffc119]"} />,
  redux: <SiRedux className={iconClassName + " text-[#764abc]"} />,
  tailwind: <SiTailwindcss className={iconClassName + " text-[#06b6d4]"} />,
  axios: <SiAxios className={iconClassName + " text-[#6328d8]"} />,
  node: <FaNode className={iconClassName + " text-[#3c873a]"} />,
  express: <SiExpress className={iconClassName} />,
  typescript: <SiTypescript className={iconClassName + " text-[#007acc]"} />,
  firebase: <SiFirebase className={iconClassName + " text-[#F6820D]"} />,
  mongodb: <SiMongodb className={iconClassName + " text-[#00684a]"} />,
  angular: <SiAngular className={iconClassName + " text-[#dd1b16]"} />,
  mysql: <SiMysql className={iconClassName} />,
  knex: <SiKnexdotjs className={iconClassName + " text-[#e16426]"} />,
};
