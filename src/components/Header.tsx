import React from "react";
import "../App.css";
import logo from "../assets/images/logo.svg";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
