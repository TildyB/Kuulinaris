import { Link } from "react-router-dom";
import classes from "./MenuBar.module.css";
import SubMenu from "./SubMenu";

const Navbar = ({ products }) => {
  const productTypes = [];

  products.map((product) => {
    if (!productTypes.includes(product.type)) {
      productTypes.push(product.type);
    }
  });
  const newTypes = productTypes.map((type) => {
    const firstLetter = type.charAt(0).toUpperCase();
    const rest = type.slice(1).toLowerCase();
    return firstLetter + rest;
  });

  return (
    <nav className={classes.nav}>
      <div>
        <Link to="home">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
      </div>
      <div className={classes.categories} style={{ position: "relative" }}>
        {newTypes.map((type) => (
          <Link to={type}>
            <SubMenu {...{ type }} />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
