import React from "react";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import "./profile.css";
import BookmarksOutlined from "@mui/icons-material/BookmarksOutlined";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="p-c">
        <Sidebar />
        <div className="p-w">
          <div className="p-h">
            <img
              className="p-img"
              src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
            />
            <div className="p-info">
              <h2>Tarik Kabaki</h2>
              <p>Full stack developer</p>
            </div>
          </div>
          <div className="p-d-c">
            <span className="p-span">3 posts</span>
            <span className="p-span">71 followers</span>
            <span className="p-span">100 following</span>
          </div>
          <div className="hr-cc">
            <hr className="hr-hr-hr" />
          </div>
          <div className="p-icons-c">
            <div className="p-icons-w">
              <SettingsOutlined style={{ fontSize: "35px" }} />
              <h3>Settings</h3>
            </div>
            <div className="p-icons-w">
              <BookmarksOutlined style={{ fontSize: "35px" }} />
              <h3>Save</h3>
            </div>
          </div>

          <div className="p-p-c">
            <div className="p-p-w"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
