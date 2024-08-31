import "./Side1.css";
import Icon7 from "../../assets/Icon7.png";
import Icon8 from "../../assets/Icon8.png";
import Icon9 from "../../assets/Icon9.png";
import Icon10 from "../../assets/Icon10.png";
import Icon11 from "../../assets/Icon11.png";
import { PinnedItem } from "./PinnedItem";

const subject = [
  {
    photoName: Icon7,
    name: "#javascript",
    para2: "82,645 Posted by this tag",
  },
  {
    photoName: Icon8,
    name: "#bitcoin",
    para2: "65,523 Posted • Trending",
  },
  {
    photoName: Icon9,
    name: "#design",
    para2: "51,354 • Trending in Bangladesh",
  },
  {
    photoName: Icon10,
    name: "#blogging",
    para2: "48,029 Posted by this tag",
  },
  {
    photoName: Icon11,
    name: "#tutorial",
    para2: "51,354 • Trending in Bangladesh",
  },
];

const Pinnedgroup = () => {
  return (
    <div className="pinnedgroup">
      <h4>
        Pinned Group <i className="fa-solid fa-arrow-right"></i>
      </h4>
      {subject.map((pinnedgroup) => (
        <PinnedItem pinnedgroup={pinnedgroup} key={pinnedgroup.name} />
      ))}
    </div>
  );
};

export default Pinnedgroup;
