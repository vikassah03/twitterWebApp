import React, { useState } from "react";
import "./Tabs.css";
import Covid_19 from "../Explore/Covid-19/Covid_19";
function Tabs() {
  const [state, setstate] = useState(0);
  return (
    <div>
      <div className="tabs">
        <div className="tab_E1" onClick={() => setstate(0)}>
          <h4 className="tabs_Explore_name">For you</h4>
        </div>
        <div className="tab_E2" onClick={() => setstate(1)}>
          <h4 className="tabs_Explore_name">COVID-19</h4>
        </div>
        <div className="tab_E3" onClick={() => setstate(2)}>
          <h4 className="tabs_Explore_name">Trending</h4>
        </div>
        <div className="tab_E4" onClick={() => setstate(3)}>
          <h4 className="tabs_Explore_name">News</h4>
        </div>
        <div className="tab_E5" onClick={() => setstate(4)}>
          <h4 className="tabs_Explore_name">Sports</h4>
        </div>
        <div className="tab_E6" onClick={() => setstate(5)}>
          <h4 className="tabs_Explore_name">Entertainment</h4>
        </div>
      </div>
      <div className="tabs contents">
        <div className="tab-content" hidden={state != 0}>
          <Covid_19 />
        </div>
        <div className="tab-content" hidden={state != 1}>
          <img
            src="https://bsmedia.business-standard.com/_media/bs/img/article/2021-10/25/full/1635136273-1472.jpg"
            alt=""
            className="for_u_image"
          />
          <p>
            
            Sint itaque ut quod perferendis in delectus sequi eos voluptate!
            Quaerat deserunt totam consectetur et dolorem sed vero eum aliquam
            voluptate aperiam?
          </p>
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

        <div className="tab-content" hidden={state != 4}>
          <p className="hover_D">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint itaque
            ut quod perferendis in delectus sequi eos voluptate! Quaerat
            deserunt totam consectetur et dolorem sed vero eum aliquam voluptate
            aperiam?
          </p>
        </div>
        <div className="tab-content" hidden={state != 5}>
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

export default Tabs;
