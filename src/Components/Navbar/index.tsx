
const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-success" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          React Apex Charts
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="/pizza-charts"
              >
                Pizza-Chart
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="/column-charts"
              >
                Column-Chart
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="/financial-charts"
              >
                Financial-Chart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;