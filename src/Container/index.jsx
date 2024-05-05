import { Link } from "react-router-dom";
import logo from '../Components/Images/logosmall.png';

function NavBar({ handleTab }) {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      {/* <img src={logo} alt="logo" height={'50px'} width={'50px'} style={{marginLeft:'10px'}}/> */}
      <Link className="navbar-brand" to="/"><span style={{fontSize:'20px', fontWeight:"xxx-large"}}>Tajinder</span></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center " id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item" style={{fontSize:'20px', fontWeight:"bolder"}}>
            <Link className="nav-link" onClick={() => handleTab('home')}>Home</Link>
          </li>
          <li className="nav-item" style={{fontSize:'20px', fontWeight:"bolder"}}>
            <Link className="nav-link" onClick={() => handleTab('works')}>Works</Link>
          </li>
          <li className="nav-item" style={{fontSize:'20px', fontWeight:"bolder"}}>
            <Link className="nav-link" onClick={() => handleTab('about')}>About</Link>
          </li>
          <li className="nav-item" style={{fontSize:'20px', fontWeight:"bolder"}}>
            <Link className="nav-link" onClick={() => handleTab('projects')}>Projects</Link>
          </li>
          <li className="nav-item" style={{fontSize:'20px', fontWeight:"bolder"}}>
            <Link className="nav-link" onClick={() => handleTab('services')}>Services</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
