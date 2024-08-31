import Herosection from "../../components/side1/Herosection";
import Mainlayout from "../../components/layout/Mainlayout";
import Main from "../../components/maincomponent/Main";
import Side2 from "../../components/side2/Side2";
import "./home.css";

const HomePage = () => {
  return (
    <Mainlayout>
      <section className="wrapper">
        <Herosection />
        <Main />
        <Side2 />
      </section>
    </Mainlayout>
  );
};

export default HomePage;
