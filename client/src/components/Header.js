import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__heading">
        <Link to="/">TagEvents</Link>
      </h1>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-list-item">
            <Link to="/eventsByTag">Events By Tag</Link>
          </li>
          <li className="header__nav-list-item">
            <Link to="/tagsByEvent">Tags By Event</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
