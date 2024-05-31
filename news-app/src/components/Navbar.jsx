import { useState } from 'react';

const Navbar = ({ setCategory, setSearchQuery }) => {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    setSearchQuery(search);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-5">News App</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("technology")}>Technology</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("science")}>Science</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("health")}>Health</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("business")}>Business</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("sports")}>Sports</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("entertainment")}>Entertainment</div>
            </li>
          </ul>
          <form className="d-flex ms-auto" role="search" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button className="btn btn-outline-success" type="button" onClick={handleSearch}>Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;