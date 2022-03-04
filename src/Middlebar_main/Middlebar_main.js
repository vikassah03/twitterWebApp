import React from "react";
import "./Middlebar_main.css";
function Middlebar_main() {
  return (
    <div>
      <div className="h_ican">
        <h4 id="Name_H">Home</h4>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2913/2913136.png"
          alt=""
          className="image"
        />
      </div>
      <div className="img_input">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3600/3600967.png"
          alt=""
          className="image_V"
        />
        <input type="text" placeholder="What's happing?" className="input_whats_happing" />
      </div>
      <div className="icans_button">
        <div className="icans_main">
          <img
            src="https://cdn-icons.flaticon.com/png/512/3394/premium/3394388.png?token=exp=1641215857~hmac=002f9a7f8c7aa9a5823394a90399e3f8"
            alt=""
            className="icans"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/5982/5982100.png"
            alt=""
            className="icans"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/1475/1475056.png"
            alt=""
            className="icans"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/742/742751.png"
            alt=""
            className="icans"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/584/584649.png"
            alt=""
            className="icans"
          />
        </div>
        <div className="button_main">
          <button className="button1"><h4 id="home_btn">Tweet </h4></button>
        </div>
      </div>
    </div>
  );
}

export default Middlebar_main;
