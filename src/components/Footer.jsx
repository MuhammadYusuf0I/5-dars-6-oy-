import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramLine } from "react-icons/ri";
import React from "react";

function Footer() {
  return (
    <footer
      className="Footer container "
      style={{ background: "black", marginLeft: "12px",  }}
    >
      <div
        className="d-flex   "
        style={{
          marginLeft: "70px",
          paddingTop: "50px",
          marginTop: "0px",
          gap: "60px",
          color: "white",
        }}
      >
        <div
          style={{
            width: "350px",
            marginLeft: "70px",
          }}
        >
          <h4>Copyright 2020</h4>
          <p>
            Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
            facilisis lacinia ex, eget sollicitudin massa pellentesque in.
            Vivamus mattis eros at sem pulvinar tincidunt.
          </p>
        </div>
        <div style={{ width: "180px", marginRight: "30px" }}>
          <h4>Sayt sahifalari</h4>
          <div>
            <p>Bosh sahifa</p>
            <p>Xizmatlar</p>
            <p>Portfolio</p>
            <p>Jamoa</p>
            <p>Blog</p>
            <p>Kontaktlar</p>
          </div>
        </div>
        <div style={{ width: "180px" }}>
          <h4>Biz internetda</h4>
          <div>
            <div
              className="d-flex pixer-item"
              style={{ alignItems: "center", gap: "8px" }}
            >
              <FaTelegram />
              <p style={{ marginTop: "16px" }}>Telegram</p>
            </div>
            <div
              className="d-flex pixer-item"
              style={{ alignItems: "center", gap: "8px" }}
            >
              <FaFacebook />
              <p style={{ marginTop: "16px" }}>Facebook</p>
            </div>
            <div
              className="d-flex pixer-item"
              style={{ alignItems: "center", gap: "8px" }}
            >
              <RiInstagramLine />
              <p style={{ marginTop: "16px" }}>Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
