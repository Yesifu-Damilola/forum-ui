import Navbar from "./Navbar";

// eslint-disable-next-line react/prop-types
const Mainlayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      
    </>
  );
};

export default Mainlayout;
