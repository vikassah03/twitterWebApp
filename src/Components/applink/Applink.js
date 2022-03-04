import React ,{useState} from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import Middlebar_main from "../../Middlebar_main/Middlebar_main";
import './Applink.css';
function Applink() {
  const [stateOptions, setStateValues] = useState(false);
  return (
<div className="leftbar">
      <div className="twitter_ican">
        <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="" className="T_ican" />
      </div>
      <Link to="/" className="link_d_None">
        <div className="lft_icans_txt">
        <img src="https://cdn-icons-png.flaticon.com/512/1946/1946436.png" alt="" className="images" />
        <p id="Lft_text" className="font_size_bold">Home</p>
        </div>
      </Link>
      <Link to="/Explore" className="link_d_None">
        <div className="lft_icans_txt">
        <img src="https://cdn-icons.flaticon.com/png/512/3423/premium/3423288.png?token=exp=1642600136~hmac=a7ff0913e5f606c95587689f56a76266" alt="" className="images" />
        <p id="Lft_text" className="font_size_bold">Explore</p>
        </div>
      </Link>
      <Link to="/Notification" className="link_d_None">
        <div className="lft_icans_txt">
        <img src="https://cdn-icons.flaticon.com/png/512/2529/premium/2529521.png?token=exp=1642600183~hmac=5eabd82c865e0447659ff37a55e991c7" alt="" className="images" />
        <p id="Lft_text" className="font_size_bold">Notification</p>
        </div>
      </Link>
      <Link to="/Messages" className="link_d_None">
        <div className="lft_icans_txt">
        <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="" className="images" />
        <p id="Lft_text" className="font_size_bold">Messages</p>
        </div>
      </Link>
      <Link to="/Bookmarks" className="link_d_None">
        <div className="lft_icans_txt">
        <img src="https://cdn-icons-png.flaticon.com/512/786/786251.png" alt="" className="images" />
        <p id="Lft_text" className="font_size_bold">Bookmarks</p>
        </div>
      </Link>
      <Link to="/Lists" className="link_d_None">
        <div className="lft_icans_txt">
          <img src="https://cdn-icons-png.flaticon.com/512/570/570171.png" alt="" className="images" />
        <p id="Lft_text" className="font_size_bold">Lists</p>
        </div>
      </Link>
      <Link to="/Profile" className="link_d_None">
        <div className="lft_icans_txt">
        <img src="https://cdn-icons-png.flaticon.com/512/709/709579.png" alt="" className="images" />
        <p id="Lft_text" className="font_size_bold">Profile</p>
        </div>
      </Link>
      <Link to="/More" className="link_d_None">
        <div className="lft_icans_txt">
       <img src="https://cdn-icons-png.flaticon.com/512/570/570223.png" alt="" className="images" />
        <p id="Lft_text" className="font_size_bold">More</p>
        </div>
      </Link>
      <div className="modal_blue_perent">
      <button onClick={() => setStateValues(true)} className="button_lite_blue"><h4>Tweet</h4></button>
      <Modal isOpen={stateOptions} className="modal_child_blue_btn">
        <div>
          <div className="img_modal_b">
            <img
              src="https://cdn-icons.flaticon.com/png/512/3856/premium/3856213.png?token=exp=1642870336~hmac=a51e2c37ae78c7caf16d5db4496a9888"
              alt=""
              width="25px"
              height="25px"
              onClick={() => setStateValues(false)}
            />
          </div>
          <Middlebar_main/>
        </div>
      </Modal>
    </div> 
</div>
  );
}

export default Applink;
