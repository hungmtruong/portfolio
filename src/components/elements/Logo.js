import React from "react";
import { Link } from "react-router-dom";

function Logo({ logoSource }) {
  

  return (
    <div className="site-logo">
      <Link to="/">
        <img src="/images/logo.svg" alt="Hung" />
      </Link>
    </div>
  );
}

export default Logo;
