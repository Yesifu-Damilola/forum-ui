import "./Side2.css";
import Side21 from "./Side21";

const Side2 = () => {
  return (
    <aside>
      <div className="company">
        <h4 className="meet-up">
          Meetups <i className="fa-solid fa-arrow-right"> </i>
        </h4>
        <div className="company-profile">
          <div className="feb-7">
            <p> FEB </p>
            <div>
              <img src="src/assets/7.png" alt="seven7" />
            </div>
          </div>
          <div className="crunchbase">
            <span>UIHUT - Crunchbase Company Profile...</span>
            <div className="uihut-profile">
              <div className="uihut-sylhet">
                <div>
                  <img src="src/assets/uihut.png" alt="uihut" />
                </div>
                <div>
                  <span> UIHUT • Sylhet, Bangladesh </span>
                </div>
              </div>
              <div className="jobs">
                <span>Remote</span>
                <span className="part-time">Part-time</span>
                <span>Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="company-profile">
          <div className="feb-7">
            <p> FEB </p>
            <div>
              <img src="src/assets/3.png" alt="three3" />
            </div>
          </div>
          <div className="crunchbase">
            <span>Design Meetups USA | Dribbble</span>
            <div className="uihut-profile">
              <div className="uihut-sylhet">
                <div>
                  <img src="src/assets/dribbble.png" alt="dribbble" />
                </div>
                <div>
                  <span> Dribbble • Austin, Texas, USA </span>
                </div>
              </div>
              <div className="jobs">
                <span>Remote</span>
                <span className="part-time">Part-time</span>
              </div>
            </div>
          </div>
        </div>

        <div className="company-profile">
          <div className="feb-7">
            <p> FEB </p>
            <div>
              <img src="src/assets/5.png" alt="five5" />
            </div>
          </div>
          <div className="crunchbase">
            <span>Meetup Brand Identity Design - Beha...</span>
            <div className="uihut-profile">
              <div className="uihut-sylhet">
                <div>
                  <img src="src/assets/behance.png" alt="behance" />
                </div>
                <div>
                  <span> Behance • Sab jose, Califonia, USA </span>
                </div>
              </div>
              <div className="jobs">
                <span>Full Time</span>
                <span className="part-time">Contract</span>
                <span>Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Side21 />
    </aside>
  );
};

export default Side2;
