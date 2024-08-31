import "./Side2.css";
import selling from "../../assets/selling.png";
import james from "../../assets/james.png";
import marten from "../../assets/marten.png";
import jubed from "../../assets/jubed.png";
import jesse from "../../assets/jesse.png";
import allen from "../../assets/allen.png";
import { Item } from "./Item";

const podCompanys = [
  {
    products: "podcasts",
    photoName: selling,
    strategies: " Selling a Business and Scaling Another Amidst Tragedy.",
    name: "by Michele Hansen",
  },
  {
    photoName: james,
    strategies: "Mental health as a founder and the importance of community...",
    name: "by James McKinven",
  },
  {
    
    photoName: marten,
    strategies: "Growing to $8.5k MRR in 1 year - Marie Martens, Tally.so",
    name: "by Mahfuzul Nabil",
  },
  {
    photoName: jubed,
    strategies:
      "Mental Health and Bootstrapping in 2022 with Rob Walling of TinySe",
    name: "by Dr. Jubed",
  },
  {
    photoName: jesse,
    strategies:
      "Money, Happiness, and Productivity as a Solo Founder with Pieter Levels",
    name: "by Jesse Hanley",
  },
  {
    photoName: allen,
    strategies: "Mental health as a founder and the importance of community",
    name: "by Courtland Allen",
  },
];

const Side21 = () => {
  return (
    <div className="company-business">
      <div className="business">
        <h4>
          Podcasts <i className="fa-solid fa-arrow-right"> </i>
        </h4>

        {podCompanys.map((company) => (
          <Item company={company} key={company.name} />
        ))}
      </div>
    </div>
  );
};

export default Side21;
