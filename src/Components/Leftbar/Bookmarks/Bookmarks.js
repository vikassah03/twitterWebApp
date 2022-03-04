import React from "react";
import Applink from "../../applink/Applink";
import Input from "../../input/Input";
import Rightbar from "../../Rightbar/Rightbar";
import "./Bookmarks.css";
function Bookmarks() {
  return (
    <div className="main_B">
      <div className="leftbar_B">
        <Applink />
      </div>
      <div className="texts_B">
        <div className="middle_B">
          <h3  className="font_size_bold">
            Bookmarks
          </h3>
          <p className="margin0_B">@vikassa74826493</p>
        </div>
        <div className="text_B">
          <h1 >
            You haven't added any Tweets to your Bookmarks yet
          </h1>
          <p>When you do, they'll show up here.</p>
        </div>
      </div>
      <div className="rightbarH">
        <div className="inputH">
          <Input />
        </div>
        <div className="rightbar_H">
          <Rightbar />
        </div>
      </div>
    </div>
  );
}

export default Bookmarks;
