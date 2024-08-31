/* eslint-disable react/prop-types */

export const MainItem = ({ data1 }) => {
  return (
    <div className="data1">
      <div className="btc" key={data1.name}>
        <img src={data1.photoName} alt="btc" />
      </div>
      <div className="block-data">
        <div className="blockchain">
          <div className="developer-love">
            <div className="course">
              <h4>{data1.course}</h4>
            </div>
            <div>
              <img src={data1.photoName2} alt="love" />
            </div>
          </div>

          <div className="coin-money">
            <span className="coin">{data1.cyrtocurrency}</span>
            <span className="coin btc-coin">{data1.currency}</span>
            <span className="coin">{data1.dollar}</span>
          </div>
          <div className="pavel-profile">
            <div className="avatar1">
              <img src={data1.photoName3} alt="avatar" />
            </div>
            <div className="pavel-ago">
              <span className="pavel-gvay">{data1.name}</span>
              <span className="weekago">{data1.days}</span>
            </div>
            <div className="comment-sections">
              <span className="view-comment">{data1.Comment1}</span>
              <span className="view-comment">{data1.comment2}</span>
              <span className="view-comment">{data1.comment3}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
