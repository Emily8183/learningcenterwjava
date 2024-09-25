import { HiOutlineLightBulb } from "react-icons/hi";
import { PiNotebookDuotone } from "react-icons/pi";
import { SiLeetcode } from "react-icons/si";

const HighlightsData = [
  {
    id: 1,
    icon: HiOutlineLightBulb,
    title: "What's New",
    description:
      "Interesting findings from my latest readings & group meet-ups",
    image: "https://picsum.photos/id/237/",
    path: "/insights",
  },

  {
    id: 2,
    icon: PiNotebookDuotone,
    title: "Project Diaries",
    description:
      "Project experiences & achievements (front-end, back-end, and SQL)",
    image: "https://picsum.photos/id/237/",
    path: "/projects",
  },

  {
    id: 3,
    icon: SiLeetcode,
    title: "#100LeetCodeChallenge",
    description:
      "Join me in practicing the UMPIRE Strategy through coding challenges",
    image: "https://picsum.photos/id/237/",
    path: "/leetcodeSolutions",
  },
];

export default HighlightsData;
