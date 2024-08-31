import Newest from "./Newest";
import Pinnedgroup from "./Pinnedgroup";
import Populartags from "./Populartags";
import "./Side1.css";

const Herosection = () => {
  return (
    <div>
      <Newest />
      <Populartags />
      <Pinnedgroup />
    </div>
  );
};

export default Herosection;
