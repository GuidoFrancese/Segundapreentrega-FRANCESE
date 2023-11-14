import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import logo from "../../assets/logo.jpg";

export const NavBar = () => {
  return (
    <nav className="d-flex justify-content-around mt-2">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <img src={logo} alt="Logo de la tienda" height="70" className="d-inline-block align-top" />
        <h4 style={{ fontSize: "15px" }}>StephenShop</h4>
      </Link>
      <div>
        <Link to={"/"}>
          <button className="btn btn-outline-dark mx-2">Inicio</button>
        </Link>
        <Link to={"/category/calzados"}>
          <button className="btn btn-outline-dark mx-2">Calzados</button>
        </Link>
        <Link to={"/category/ropa"}>
          <button className="btn btn-outline-dark mx-2">Ropa</button>
        </Link>
        <Link to={"/category/accesorios"}>
          <button className="btn btn-outline-dark mx-2">Accesorios</button>
        </Link>
      </div>
      <CartWidget />
    </nav>
  );
};