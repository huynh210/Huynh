
import './App.css';
import Menu from './Menu';
import Home from './Home';
import SanPhamXemNhieu from './SanPhamXemNhieu';
import ChiTiet from './ChiTiet';
import GioiThieu from './GioiThieu';
import NotFound from './NotFound';
import SPTrongLoai from './SPTrongLoai';
import TimKiem from './TimKiem';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import ShowCart from './ShowCart';
import ThanhToan from './ThanhToan';

var sotin = 10


function App() {
  return (
    <BrowserRouter basename="/">
    <div className="container">
      <header class="p-3 mb-3 border-bottom">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
          {/* <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg> */}
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#!" class="nav-link px-2 link-secondary">Overview</a></li>
          <li><a href="#!" class="nav-link px-2 link-dark">Inventory</a></li>
          <li><a href="#!" class="nav-link px-2 link-dark">Customers</a></li>
          <li><a href="#!" class="nav-link px-2 link-dark">Products</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control" placeholder="Search..." aria-label="Search"></input>
        </form>

        <div class="dropdown text-end">
          <a href="#!" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle"></img>
          </a>
          <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
            <li><a class="dropdown-item" href="#!">New project...</a></li>
            <li><a class="dropdown-item" href="#!">Settings</a></li>
            <li><a class="dropdown-item" href="#!">Profile</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#!">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
      <nav><Menu/></nav>
      
      <main class = "d-flex">
      <article className='col-md-9'> 
        <Routes>
          <Route path="/" exact element = {<Home/>}></Route>
          <Route path="/gioithieu" element = {<GioiThieu/>}></Route>
          <Route path="/sp/:id" element = {<ChiTiet/>}></Route>
          <Route path="/loai/:id_loai" element = {<SPTrongLoai/>}></Route>
          <Route path="/timkiem/" element = {<TimKiem/>}></Route>
          <Route path="/showcart/" element = {<ShowCart/>}></Route>
          <Route path="/thanhtoan/" element={<ThanhToan/>} />
          <Route element = {<NotFound/>}></Route>
        </Routes>
      </article>
      <aside className='col-md-3'> <SanPhamXemNhieu sotin ={sotin}/> </aside>
      </main>
      <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div class="col mb-3">
      <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32"></svg>
      </a>
      <p class="text-body-secondary">© 2024</p>
    </div>

    <div class="col mb-3">

    </div>

    <div class="col mb-3">
      <h5>Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#!" class="nav-link p-0 text-body-secondary">Home</a></li>
        <li class="nav-item mb-2"><a href="#!" class="nav-link p-0 text-body-secondary">Features</a></li>
        <li class="nav-item mb-2"><a href="#!" class="nav-link p-0 text-body-secondary">Pricing</a></li>
        <li class="nav-item mb-2"><a href="#!" class="nav-link p-0 text-body-secondary">FAQs</a></li>
        <li class="nav-item mb-2"><a href="#!" class="nav-link p-0 text-body-secondary">About</a></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h5>Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#!" class="nav-link p-0 text-body-secondary">Home</a></li>
        <li class="nav-item mb-2"><a href="#!" class="nav-link p-0 text-body-secondary">Features</a></li>
        <li class="nav-item mb-2"><a href="#!" class="nav-link p-0 text-body-secondary">Pricing</a></li>
        <li class="nav-item mb-2"><a href="#!" class="nav-link p-0 text-body-secondary">FAQs</a></li>
        <li class="nav-item mb-2"><a href="#!" class="nav-link p-0 text-body-secondary">About</a></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h5>Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#!" class="nav-link p-0 text-body-secondary">Home</a></li>
        <li class="nav-item mb-2"><a href="#!" class="nav-link p-0 text-body-secondary">Features</a></li>
        <li class="nav-item mb-2"><a href="#!" class="nav-link p-0 text-body-secondary">Pricing</a></li>
        <li class="nav-item mb-2"><a href="#!" class="nav-link p-0 text-body-secondary">FAQs</a></li>
        <li class="nav-item mb-2"><a href="#!" class="nav-link p-0 text-body-secondary">About</a></li>
      </ul>
    </div>
  </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
