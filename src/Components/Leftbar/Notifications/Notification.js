import React from "react";
import Applink from "../../applink/Applink";
import "./Notification.css";
import N_img_data_ican from "./N_img_data_ican";
import Tab_N from "./Tab_N";
import Rightbar from "../../Rightbar/Rightbar";
import Input from "../../input/Input";
function Notification() {
  return (
    <div className="main_N">
      <div className="Applink_N">
        <Applink />
      </div>
      <div className="middle_N">
        <div className="n_ican_Name">
          <N_img_data_ican />
          <div></div>
        </div>
        <div className="tab_n">
          <Tab_N />
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

export default Notification;
