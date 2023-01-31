import { Link } from "react-router-dom";
import classes from "./MenuBar.module.css";
import SubMenu from "./SubMenu";

const Navbar = ({ products }) => {
  const productTypes = [];
  products.map((product) => {
    if (!productTypes.includes(product.category)) {
      productTypes.push(product.category);
    }
  });
  
  const newTypes = productTypes.map((type) => {
    console.log(type);
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
        {newTypes.map((type, i) => (
          <Link to={type} key={i}>
            <SubMenu {...{ type }} />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
