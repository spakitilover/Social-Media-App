import React from "react";
import "./navbar.css";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import SearchOutlined from "@mui/icons-material/SearchOutlined";

const Navbar = () => {
  return (
    <div className="n-c">
      <div className="n-w">
        <div className="n-title-w">
          <h1 className="n-h1">Kabaki Insta</h1>
        </div>
        <div className="n-icons-w">
          <div className="n-icons">
            <SearchOutlined style={{ fontSize: "33px", color: "black" }} />
            <AccountCircleOutlined
              style={{ fontSize: "33px", color: "black" }}
              className="n-icon"
            />
            <FavoriteBorder style={{ fontSize: "33px", color: "black" }} />

            <div className="n-profile">
              <img
                src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
                className="n-p-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
