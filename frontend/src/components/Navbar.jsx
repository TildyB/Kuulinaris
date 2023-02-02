import React from "react";
import { Link } from "react-router-dom";
import classes from "./MenuBar.module.css";
import SubMenu from "./SubMenu";
import DrawerMenu from "./DrawerMenu";
import { useState } from "react";

const Navbar = ({ products }) => {
  const [isOpen, setIsOpen] = useState(false);

  const productTypes = [];
  products.map((product) => {
    if (!productTypes.includes(product.category)) {
      productTypes.push(product.category);
    }
  });

  const newTypes = productTypes.map((type) => {
    const firstLetter = type.charAt(0).toUpperCase();
    const rest = type.slice(1).toLowerCase();
    return firstLetter + rest;
  });

  const openDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={classes.nav}>
      <div>
        <Link to="home">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
        <Link to="cart">Cart</Link>
        <div onClick={openDrawer}>
          <span className="material-icons-outlined">shopping_cart</span>
        </div>
      </div>
      <div className={classes.categories} style={{ position: "relative" }}>
        {newTypes.map((type, i) => (
          <Link to={type} key={i}>
            <SubMenu {...{ type }} />
          </Link>
        ))}
      </div>
      {isOpen && <DrawerMenu {...{ setIsOpen }} />}
    </nav>
  );
};

export default Navbar;
