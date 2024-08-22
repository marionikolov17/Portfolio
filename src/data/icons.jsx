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
  react: <SiReact key={1} className={iconClassName + " text-[#61dbfb]"} />,
  vite: <SiVite key={2} className={iconClassName + " text-[#ffc119]"} />,
  redux: <SiRedux key={3} className={iconClassName + " text-[#764abc]"} />,
  tailwind: <SiTailwindcss key={4} className={iconClassName + " text-[#06b6d4]"} />,
  axios: <SiAxios key={5} className={iconClassName + " text-[#6328d8]"} />,
  node: <FaNode key={6} className={iconClassName + " text-[#3c873a]"} />,
  express: <SiExpress key={7} className={iconClassName} />,
  typescript: <SiTypescript key={8} className={iconClassName + " text-[#007acc]"} />,
  firebase: <SiFirebase key={9} className={iconClassName + " text-[#F6820D]"} />,
  mongodb: <SiMongodb key={10} className={iconClassName + " text-[#00684a]"} />,
  angular: <SiAngular key={11} className={iconClassName + " text-[#dd1b16]"} />,
  mysql: <SiMysql key={12} className={iconClassName} />,
  knex: <SiKnexdotjs key={13} className={iconClassName + " text-[#e16426]"} />,
};
