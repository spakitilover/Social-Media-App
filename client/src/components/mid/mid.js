import React from "react";
import "./mid.css";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";
import BookmarkBorderOutlined from "@mui/icons-material/BookmarkBorderOutlined";

const Mid = () => {
  return (
    <div className="mid-c">
      <div className="m-w">
        <div className="m-box-c">
          <div className="m-box-user-info">
            <div className="box-user">
              <img
                src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
                className="box-img"
              />
              <h3 className="box-name">Tarik Kabaki .</h3>
            </div>
            <div className="fav-icon">
              <DeleteOutlineOutlined
                style={{ fontSize: "30px", cursor: "pointer" }}
                className="box-icon"
              />
            </div>
          </div>
          <div className="box-post-c"></div>
          <div className="box-details-c">
            <div className="box-details-icons">
              <FavoriteBorder
                style={{
                  fontSize: "30px",
                  cursor: "pointer",
                  marginLeft: "5px",
                }}
                className="icons-hover"
              />
              <span>50 Likes</span>
            </div>
            <div className="box-details-icons">
              <BookmarkBorderOutlined
                style={{
                  fontSize: "30px",
                  cursor: "pointer",
                  marginRight: "5px",
                }}
                className="icons-2-hover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mid;
