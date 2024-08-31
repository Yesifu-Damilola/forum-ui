/* eslint-disable react/prop-types */
export const PopulartagsItem = ({ newest }) => {
  return (
    <div className="newest d-flex">
      <div className="icons">
        <img src={newest.photoName} alt="icon1" />
      </div>
      <div className="courses">
        <h6>{newest.name}</h6>
        <p>{newest.text}</p>
      </div>
    </div>
  );
};
