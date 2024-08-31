import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid nav-div">
          <Link className="navbar-brand " to="#">
            <img src="src/assets/Logo1.png" alt="logo1" />
            <h3 className="knowledge"> Knowledgechain </h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  <img src="src/assets/home1.png" alt="home1" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <img src="src/assets/calendar.png" alt="calendar" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <img src="src/assets/Group (1).png" alt="group1" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <img src="src/assets/Podcasts.png" alt="podcasts" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <img src="src/assets/Interviews.png" alt="Interviews" />
                </Link>
              </li>
              <div className="search-box">
                <input type="text" placeholder="Type here to search..." />
                <span className="search-icon">
                  <i className="fa fa-search"></i>
                </span>
              </div>

              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <img src="src/assets/Message1.png" alt="Message" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <img src="src/assets/Notification1.png" alt="Notification1" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <img src="src/assets/Profile Image.png" alt="profile" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <h6 className="matlab">ENGR.Matlab</h6>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <i className="fa-solid fa-caret-down"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
