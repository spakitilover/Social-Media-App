import React from "react";
import "./leftbar.css";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import CropFree from "@mui/icons-material/CropFree";

const Leftbar = () => {
  return (
    <div className="l-c">
      <div className="l-box">
        <div className="l-infos-w">
          <div className="l-i-ww">
            <img
              className="infos-img"
              src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
            />
            <h3 style={{ marginLeft: "5px" }}>Tarik Kabaki.</h3>
          </div>

          <div className="l-i-icon">
            <CropFree
              className="add-icon"
              style={{ fontSize: "35px", cursor: "pointer" }}
            />
          </div>
        </div>
        <div className="l-tits-c">
          <h3 className="l-tits">Suggestions for you!</h3>
        </div>
        <div className="l-friends-c">
          <div className="l-f-w">
            <div className="l-f-details">
              <img
                src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
                className="l-f-img"
              />
              <h4>Iman Kabaki</h4>
            </div>
            <AddCircleOutline
              className="add-icon"
              style={{ fontSize: "35px", cursor: "pointer" }}
            />
          </div>
          <div className="l-hr-w">
            <hr className="l-hr" />
          </div>
        </div>
        <div className="l-friends-c">
          <div className="l-f-w">
            <div className="l-f-details">
              <img
                src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
                className="l-f-img"
              />
              <h4>Iman Kabaki</h4>
            </div>
            <AddCircleOutline
              className="add-icon"
              style={{ fontSize: "35px", cursor: "pointer" }}
            />
          </div>
          <div className="l-hr-w">
            <hr className="l-hr" />
          </div>
        </div>
        <div className="l-friends-c">
          <div className="l-f-w">
            <div className="l-f-details">
              <img
                src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
                className="l-f-img"
              />
              <h4>Iman Kabaki</h4>
            </div>
            <AddCircleOutline
              className="add-icon"
              style={{ fontSize: "35px", cursor: "pointer" }}
            />
          </div>
          <div className="l-hr-w">
            <hr className="l-hr" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
