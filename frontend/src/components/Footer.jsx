import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      <Link to="contact">Contact</Link>
      <Link to="cart">Cart</Link>
      <p>Copyright 2023</p>
      <p>Contact</p>
    </footer>
  );
};

export default Footer;
