import React from "react";
import "./Explore.css";
import Applink from "../../applink/Applink";
import Input from "../../input/Input";
import Explore_Right from "../../../ExploreRight/Explore_Right";
import Tabs from "../Lists/Tabs";
function Explore() {
  return (
    <div className="Explore">
      <div className="applinkE">
        <Applink />
      </div>
      <div className="input_main">
        <div className="input_setting">
          <div className="input">
            <Input />
          </div>
          <div className="input2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3524/3524636.png"
              alt=""
              className="setting_img"
            />
          </div>
        </div>
        <div className="tabs">
         <Tabs/>
        </div>
      </div>
      <div className="Right_E_main">
      <div className="right_E">
        <Explore_Right />
      </div>  
      </div>
    </div>
  );
}
// input:focus, textarea:focus, select:focus{
//   outline: none;
// }
export default Explore;
