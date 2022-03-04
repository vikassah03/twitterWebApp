import React from "react";
import Applink from "../../applink/Applink";
import "./Profile.css";
import Tab_L from "./Tab_L";
import Input from "../../input/Input";
import Rightbar from "../../Rightbar/Rightbar";
    function Profile() {
  return (
    <div className="main_P">
      <div className="leftbar_p">
        <Applink />
      </div>
      <div className="middlebar_P">
        <div className="middlebar_top_content">
            <div className='image_L_main'>

            <img
              src="https://cdn-icons.flaticon.com/png/512/2889/premium/2889708.png?token=exp=1642167219~hmac=28f85616037caee0aeeba644c8f31916"
              alt=""
              className="image_L"
              />
              </div>
          <div className="myname">
            <h3 className='margin0_B'>vikas sah</h3>
            <p className="margin0_B">0 tweets</p>
          </div>
        </div>
        <div className="Editprofile">

        </div>
        <div className="imgName_ican">
            <img src="https://cdn-icons.flaticon.com/png/512/5818/premium/5818147.png?token=exp=1642421325~hmac=ae9217024cc8bc7495c83dcf787f5cda" alt="" width="100px" height="100px" className="img_p_logo" />
            <button className="Edit_profile_btn">Edit profile</button>
        </div>
        <div className="more_text_P">
            <h3 className="margin_0" className='font_size_bold'>Vikas Sah</h3>
            <p className="margin_0">@Vikassa74826493</p>
            <p className="margin_3">Joined November 2021</p>
            <div className="P_texts">
            <p  className="margin_0">10 Following</p>
            <p  className="margin_0">0 Followers</p>
            </div>
        </div>
        <Tab_L/>
      </div>
      <div className="rightbarH">
            <div className="inputH">
            <Input/>
            </div>
            <div className='rightbar_H'>
            <Rightbar/>
            </div>
          </div>
    </div>
  );
}

export default Profile;
