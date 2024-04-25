import Logo from "../assets/logo.svg";
import "./Header.css";
import React from "react";

function Header() {
  return (
    <>
      <nav className="navbar shadow p-3 mb-5 bg-body-tertiary rounded  ">
        <div className="container-fluid px-5">
          <div className="logo">
            <img
              src={Logo}
              alt="Logo"
              className="d-inline-block align-text-top"
            />
          </div>
          <div className=" pixer-nav d-flex gap-5 ">
            <a className="" href="#">
              Bosh sahifa
            </a>
            <a href="#">Xizmatlar</a>
            <a href="#">Portfolio</a>
            <a href="#">Jamoa</a>
            <a href="#">Blog</a>
            <a href="#">Kontaktlar</a>
            <button
              type="button"
              className="btn btn-info"
              style={{ color: "white" }}
            >
              +998 90 921 37 11
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
