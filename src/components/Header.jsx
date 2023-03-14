import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="App-header">
      <h1>NC Games</h1>
      <nav>
        <ul>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
