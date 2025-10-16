import "./css/Navbar.css";
import CartWidget from "./CartWidget"


const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="nav-link" href="">Venta de Vehículos 0km</a>
      <a className="nav-link" href="">Los más vistos</a>
      <a className="nav-link" href="">Elegí tu plan</a>
      <a className="nav-link" href="">Más vendidos</a>
       <img className="logo" src="/logo.png" alt="Logo 0KM Autos" className="nav-logo" />
 <CartWidget/>
    </nav>
  );
};

export default Navbar;
