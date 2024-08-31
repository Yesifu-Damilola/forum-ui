/* eslint-disable react/prop-types */
export const PinnedItem = ({ pinnedgroup }) => {
  return (
    <div className="newest d-flex">
      <div className="icons">
        <img src={pinnedgroup.photoName} alt="icon" />
      </div>
      <div className="courses">
        <h6>{pinnedgroup.name}</h6>
        <p>{pinnedgroup.para2}</p>
      </div>
    </div>
  );
};
