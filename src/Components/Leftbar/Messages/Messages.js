import React, { useState } from "react";
import Applink from "../../applink/Applink";
import Modal from "react-modal";

// import Message_props from './Message_props';
import "./Messages.css";
function Explore() {
  const [stateOptions, setStateValues] = useState(false);
  return (
    <div className="main_M">
      <div className="leftbar_m">
        <Applink />
      </div>
      <div className="middle_M">
        <div className="message_icans">
          <div className="message">
            <h3 className="font_size_bold">Messages</h3>
          </div>
          <div className="icans_M">
            <div className="img_M">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2099/2099058.png"
                alt=""
                width="18px"
                height="18px"
              />
            </div>
            <div className="img_M">
              <img
                src="https://cdn-icons.flaticon.com/png/512/542/premium/542638.png?token=exp=1642145267~hmac=369eabc9b4558944056208c43fec1d8a"
                alt=""
                width="18px"
                height="18px"
              />
            </div>
          </div>
        </div>
        <div className="Send_a_message_P_Test">

        <h1 className="font_size_bold">Send a message, get a message</h1>
        <p>
          Direct Messages are private converstions between you and other people
          on twitter. Share Tweets, media, and more!
        </p>
        </div>
        <div className="modal_blue_perent">
            <div className="button_lite_blue_Middle_parent">
          <button
            onClick={() => setStateValues(true)}
            className="button_lite_blue_Middle"
            >
            <h4 className="font_size_bold">
                Start a Conversation
                </h4> 
          </button>
              </div>
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
            </div>
          </Modal>
        </div>
      </div>

      <div className="Rightbar_Message_page1">
        <div className="Rightbar_Message_page2">
          <h1 className="font_size_bold">You don’t have a message selected</h1>
          <p>Choose one from your existing messages, or start a new one.</p>
        <div className="button_lite_blue_right_parent">
          <button
            onClick={() => setStateValues(true)}
            className="button_lite_blue_right"
            >
            <h4 className="font_size_bold">
               New Message
                </h4> 
          </button>
              </div>
        </div>
        <div className="">
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
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Explore;
