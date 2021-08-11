import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className="container mx-auto">
      <a href="faisal-shaikh.com" className="font-bold text-xl text-indigo-600">
        <Logo className="h-16" />
      </a>
    </div>
  );
};

export default Header;
