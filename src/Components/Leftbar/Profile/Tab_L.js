import React, { useState } from "react";
import './Tab_L.css'
import Explore_Right from "../../../ExploreRight/Explore_Right";
function Tab_L() {
  const [state, setstate] = useState(0);
  return (
    <div>
      <div className="tabs">
        <div className="tab" onClick={() => setstate(0)}>
          <h4>Tweets</h4>
        </div>
        <div className="tab" onClick={() => setstate(1)}>
          <h4>Tweets&replies</h4>
        </div>
        <div className="tab" onClick={() => setstate(2)}>
          <h4>Media</h4>
        </div>
        <div className="tab" onClick={() => setstate(3)}>
          <h4>Likes</h4>
        </div>
      </div>
      <div className="tabs contents">
        <div className="tab-content" hidden={state != 0}>
        {/* <div className="Right_E_main_L"> */}
      {/* <div className="right_E"> */}
        <Explore_Right />
      {/* </div>   */}
      {/* </div> */}
        </div>
        <div className="tab-content" hidden={state != 1}>
          
        </div>
        <div className="tab-content" hidden={state != 2}>
          <div className="hover_D">
            <h3>India trends</h3>
            <h4 className="caption">#capitalcom</h4>
            <p>Trade Smart with #Capitalcom</p>
          </div>
          <div className="hover_D">
            <h3 className="caption">#SonuSoodWithCongress</h3>
            <p>
              Sonu Sood's sister Malvika joins Congress in Punjab ahead of the
              February 14 assembly polls
            </p>
          </div>
        </div>
        <div className="tab-content" hidden={state != 3}>
          <p className="hover_D">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint itaque
            ut quod perferendis in delectus sequi eos voluptate! Quaerat
            deserunt totam consectetur et dolorem sed vero eum aliquam voluptate
            aperiam?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tab_L;
