import "./Side1.css";
import NewestIcon from "../../assets/NewestIcon.png";
import PopularIcon from "../../assets/PopularIcon.png";
import Follow from "../../assets/Follow.png";
import { NewestItem } from "./NewestItem";

const NewRecents = [
  {
    photoName: NewestIcon,
    name: "Newest and Recent",
    para1: "Find the latest update",
  },
  {
    photoName: PopularIcon,
    name: "Popular of the day",
    para1: "Shots featured today by curators",
    backgroundColor: "popular",
  },
  {
    photoName: Follow,
    name: "Following",
    name2: 24,
    para1: "Explore from your favorite person",
  },
];

const Newest = () => {
  return (
    <div className="newestrecent">
      <div className="newestrecent-div">
        {NewRecents.map((newestrecent) => (
          <NewestItem newestrecent={newestrecent} key={newestrecent.name} />
        ))}
      </div>
    </div>
  );
};

export default Newest;
