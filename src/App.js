// import logo from './logo.svg';
import './App.css';
// import Navbar from '../src/Components/Navbar'
import About from '../src/Components/About'
import Popularblog from '../src/Components/Popularblog'
import Contact from '../src/Components/Contact'
import Home from '../src/Components/Home'
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Mlogo from '../src/images/Mlogo.png';

function App() {

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className='navbar-brand' to='/'><img src={Mlogo} alt='logo' /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active fs-5 mx-2 text1" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 mx-2 text1" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 mx-2 text2" to="/popularblog">Popular Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 mx-2 text2" to="/contact" >Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/popularblog' element={<Popularblog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
