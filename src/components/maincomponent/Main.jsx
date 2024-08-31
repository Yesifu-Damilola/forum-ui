import "./Main.css";
import btc1 from "../../assets/btc1.png";
import Love from "../../assets/Love.png";
import LoveRed from "../../assets/LoveRed.png";
import Avatars from "../../assets/Avatars.png";
import Avatars2 from "../../assets/Avatars2.png";
import Avatars3 from "../../assets/Avatars3.png";
import Avatars4 from "../../assets/Avatars4.png";
import graph2 from "../../assets/graph2.png";
import dashboard from "../../assets/dashboard.png";
import michel4 from "../../assets/michel4.png";
import { MainItem } from "./MainItem";

  const bitCoins = [
    {
      photoName: btc1,
      course: "Blockchain developer best practices on innovationchain",
      photoName2: Love,
      cyrtocurrency: "finance",
      currency: "bitcoin",
      dollar: "cryto",
      photoName3: Avatars,
      name: "Pavel Gvay .",
      days: "3 weeks ago",
      Comment1: "651,324 Views",
      comment2: "36,6545 Likes",
      comment3: "56 comments",
    },
    {
      photoName: graph2,
      course:
        " The 4-step SEO framework that led to a 1000% increase in traffic. Let’s talk about blogging and SEO... ",
      photoName2: LoveRed,
      cyrtocurrency: "seo",
      currency: "blogging",
      dollar: "traffic",
      photoName3: Avatars2,
      name: "AR Jakir . ",
      days: "3 weeks ago",
      Comment1: "244,564 Views",
      comment2: "10,920 Likes",
      comment3: "184 comments",
    },
    {
      photoName: dashboard,
      course:
        "OnePay - Online Payment Processing Web App - Download from uihut.com",
      photoName2: LoveRed,
      cyrtocurrency: "payment",
      currency: "webapp",
      dollar: "uikit",
      photoName3: Avatars3,
      name: "Mansurul Haque .",
      days: "1 weeks ago",
      Comment1: "601,066 Views",
      comment2: "24,753 Likes",
      comment3: "209 comments",
    },
    {
      photoName: michel4,
      course:
        " Designing User Interfaces - how I sold 1800 copies in a few months by Michal Malewicz",
      photoName2: LoveRed,
      cyrtocurrency: "design",
      currency: "user iterface",
      dollar: "designing",
      photoName3: Avatars4,
      name: "Michal Malewicz . ",
      days: "2 weeks ago",
      Comment1: "964,258 Views",
      comment2: "64,755 Likes",
      comment3: "44 comments",
    },
  ];

  const Main = () => {
    return (
      <main>
        <div className="abatar-post">
          <div className="abatar">
            <img src="src/assets/Abatars.png" alt="abatars" />
          </div>
          <div className="share-mind">
            <input
              type="text"
              placeholder="Let’s share what going on your mind..."
            />
          </div>
          <div className="create-post">
            <button className="create-btn">Create Post</button>
          </div>
        </div>

        <section>
          {bitCoins.map((data1) => (
            <MainItem data1={data1} key={data1.name} />
          ))}
        </section>
      </main>
    );
  };

export default Main;
