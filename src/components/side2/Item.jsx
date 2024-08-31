/* eslint-disable react/prop-types */

export const Item = ({ company }) => {
  return (
    <div className="company-profile" key={company.name}>
      <div>
        <img src={company.photoName} alt="selling" />
      </div>
      <div className="scalling">
        <span>
          {company.strategies}
          <i className="fa-solid fa-arrow-right"></i>
        </span>
        <div className="bymichele">
          <span> by {company.name} </span>
        </div>
      </div>
    </div>
  );
};
