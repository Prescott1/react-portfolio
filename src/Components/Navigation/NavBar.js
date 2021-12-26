import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="container">
        <input type="checkbox" id="drop-down-cbox" />
        <label for="drop-down-cbox">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <a href="#" className="site-logo">JP</a>

        <ul className="main-nav small-caps">
          <li>
            <a href="#home-link">Home</a>
          </li>
          <li>
            <a href="#about-link">About</a>
          </li>
          <li>
            <a href="#footer-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
