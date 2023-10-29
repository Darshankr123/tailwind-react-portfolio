import { nanoid } from "nanoid";
import teaStation from "./htmlCssProjects/teaStation.png";
import backroads from "./htmlCssProjects/backrods-tour.png";
import HtmlCssProjects from "./components/HtmlCssProjects";

const htmlCssProjects = [
  {
    id: nanoid(),
    image: teaStation,
    name: "tea station",
    url: "https://have-a-cup-of-tea.netlify.app/",
  },
  {
    id: nanoid(),
    image: backroads,
    name: "back roads tour",
    url: "https://backroads-tours-website.netlify.app/",
  },
];

export default htmlCssProjects;
