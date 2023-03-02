import React from "react";
import "./sidebar.css";
import Home from "@mui/icons-material/Home";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import AddBoxOutlined from "@mui/icons-material/AddBoxOutlined";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import Menu from "@mui/icons-material/Menu";

const Sidebar = () => {
  return (
    <div className="s-c">
      <div className="s-w">
        <ul className="s-ul">
          <li className="s-li">
            <Home
              style={{
                fontSize: "35px",
              }}
            />{" "}
            Home
          </li>
          <li className="s-li">
            <FavoriteBorder
              style={{
                fontSize: "35px",
              }}
            />{" "}
            Favorites
          </li>
          <li className="s-li">
            <AccountCircleOutlined
              style={{
                fontSize: "35px",
              }}
            />{" "}
            Profile
          </li>
          <li className="s-li">
            <AddBoxOutlined
              style={{
                fontSize: "35px",
              }}
            />{" "}
            Create
          </li>
          <li className="s-li">
            <div className="s-li-w">
              <img
                src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
                className="s-li-img"
              />
            </div>
            Tarik Kabaki.
          </li>
        </ul>
        <div className="hr-w">
          <hr className="hr" />
        </div>
        <div className="s-bottom">
          <div className="s-b-w">
            <Menu
              style={{
                fontSize: "35px",
              }}
              className="s-icon"
            />
            <h3>More</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
