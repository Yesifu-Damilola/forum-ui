/* eslint-disable no-undef */
import "./Side1.css";
import Icon1 from "../../assets/Icon1.png";
import Icon2 from "../../assets/Icon2.png";
import Icon3 from "../../assets/Icon3.png";
import Icon4 from "../../assets/Icon4.png";
import Icon5 from "../../assets/Icon5.png";
import Icon6 from "../../assets/Icon6.png";
import { PopulartagsItem } from "./PopulartagsItem";

const platForms = [
  {
    photoName: Icon1,
    name: "#javascript",
    text: "82,645 Posted by this tag",
  },
  {
    photoName: Icon2,
    name: "#bitcoin",
    text: "65,523 Posted • Trending",
  },
  {
    photoName: Icon3,
    name: "#design",
    text: "51,354 • Trending in Bangladesh",
  },
  {
    photoName: Icon4,
    name: "#innovation",
    text: "48,029 Posted by this tag",
  },
  {
    photoName: Icon5,
    name: "#tutorial",
    text: "51,354 • Trending in Bangladesh",
  },
  {
    photoName: Icon6,
    name: "#busieness",
    text: "82,645 Posted by this tag",
  },
];

const Populartags = () => {
  return (
    <div className="popular-tag">
      <h4>Popular Tags</h4>
      {platForms.map((newest) => (
        <PopulartagsItem newest={newest} key={newest.name} />
      ))}

      {/* <div className="newest d-flex">
        <div className="icons">
          <img src="src/assets/Icon (2).png" alt="Icon2" />
        </div>
        <div className="courses">
          <h6>#bitcoin</h6>
          <p>65,523 Posted • Trending</p>
        </div>
      </div>
      <div className="newest d-flex">
        <div className="icons">
          <img src="src/assets/Icon (3).png" alt="icon3" />
        </div>
        <div className="courses">
          <h6>#design</h6>
          <p>51,354 • Trending in Bangladesh</p>
        </div>
      </div>
      <div className="newest d-flex">
        <div className="icons">
          <img src="src/assets/Icon (4).png" alt="icon4" />
        </div>
        <div className="courses">
          <h6>#innovation</h6>
          <p>48,029 Posted by this tag</p>
        </div>
      </div>
      <div className="newest d-flex">
        <div className="icons">
          <img src="src/assets/Icon (5).png" alt="icon5" />
        </div>
        <div className="courses">
          <h6>#tutorial</h6>
          <p>51,354 • Trending in Bangladesh</p>
        </div>
      </div>
      <div className="newest d-flex">
        <div className="icons">
          <img src={Icon6} alt="icon6" />
        </div>
        <div className="courses">
          <h6>#busieness</h6>
          <p>82,645 Posted by this tag</p>
        </div>
      </div> */}
    </div>
  );
};

export default Populartags;
