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
            <div className="s-ww">
              <Home
                style={{
                  fontSize: "35px",
                  marginRight: "5px",
                  marginLeft: "10px",
                }}
              />{" "}
              Home
            </div>
          </li>
          <li className="s-li">
            <div className="s-ww">
              <FavoriteBorder
                style={{
                  fontSize: "35px",
                  marginRight: "5px",
                  marginLeft: "10px",
                }}
              />{" "}
              Favorites
            </div>
          </li>
          <li className="s-li">
            <div className="s-ww">
              <AccountCircleOutlined
                style={{
                  fontSize: "35px",
                  marginRight: "5px",
                  marginLeft: "10px",
                }}
              />{" "}
              Profile
            </div>
          </li>
          <li className="s-li">
            <div className="s-ww">
              <AddBoxOutlined
                style={{
                  fontSize: "35px",
                  marginRight: "5px",
                  marginLeft: "10px",
                }}
              />{" "}
              Create
            </div>
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
