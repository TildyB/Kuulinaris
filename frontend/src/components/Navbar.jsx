import React from "react";
import { Link } from "react-router-dom";
import classes from "./MenuBar.module.css";
import SubMenu from "./SubMenu";
import DrawerMenu from "./DrawerMenu";
import { useState } from "react";

const Navbar = ({ products }) => {
  const [isOpen, setIsOpen] = useState(false);

  const productCategory = [];
  products.map((product) => {
    if (!productCategory.includes(product.category)) {
      productCategory.push(product.category);
    }
  });

  const newCategory = productCategory.map((type) => {
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
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
        <Link to="cart">Cart</Link>
        <div onClick={openDrawer}>
          <span className="material-symbols-outlined">shopping_cart</span>
        </div>
      </div>
      <div className={classes.categories} style={{ position: "relative" }}>
        {newCategory.map((category, i) => (
          <Link to={category} key={i}>
            <SubMenu {...{ category, products }} />
          </Link>
        ))}
      </div>
      {isOpen && <DrawerMenu {...{ setIsOpen }} />}
    </nav>
  );
};

export default Navbar;
