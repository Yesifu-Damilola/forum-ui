/* eslint-disable react/prop-types */

export const NewestItem = ({ newestrecent }) => {
  return (
    <div className={` newestrecent ${newestrecent.backgroundColor}`}>
      <div className="newest d-flex">
        <div className="newest-pic">
          <img src={newestrecent.photoName} alt="newest-pic" />
        </div>
        <div className="phase1">
          <h6>
            {newestrecent.name}
            {newestrecent.name2 && (
              <span className="hrs">{newestrecent.name2}</span>
            )}
          </h6>
          <p>{newestrecent.para1}</p>
        </div>
      </div>
    </div>
  );
};
