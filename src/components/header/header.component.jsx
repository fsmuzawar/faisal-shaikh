import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className="mx-auto bg-gray-100">
      <div className="container mx-auto p-1.5">
        <a href="faisal-shaikh.com" className="font-bold text-xl">
          <Logo className="h-12" />
        </a>
      </div>
    </div>
  );
};

export default Header;
