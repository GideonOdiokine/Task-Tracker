import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright &copy; {date}</p>
      <Link to="/about">About </Link> 
    </footer>
  );
};

export default Footer;
