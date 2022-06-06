import "./Header.css";
function Header() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <div>
            <div className="logo">
              <span className="fa fa-github"></span>
              <p id="logo" className="title-header">
                Github Search
              </p>
            </div>
          </div>

          <div className="nav">
            <ul className="navbar-nav">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/About">About</a>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
