import React, { useEffect, useState } from "react";
import "./Explore_Right.css";
import Button_of_follow from "../components_of_tags/button_of_follow/Button_of_follow";
function Explore_Right() {
  const[first, setfirst] = useState();
  useEffect(() => {
    var url ="http://localhost:5000";
    fetch(url).then((res)=>res.json()).then(res=>{
      setfirst(res);
    })
},[])
  return (
    <div className="exploreright">
      <h3 className="who_Follow">{first}</h3>

      <div className="follow_ids1">
      <div className="follow_ids2">
          <div className="img_id">  
        <img
          src="https://cdn-icons.flaticon.com/png/512/3001/premium/3001785.png?token=exp=1642833730~hmac=a04a75e6c4c7b592171d7bce28afde1a"
          alt=""
          className="right_id_img"
        />
        <div>
          <h4 className="id_name">nference</h4>
          <p className="id_tag">@_nference</p>
        </div>
          </div>
        <div className="btn_of_follow_E">
          <Button_of_follow />
        </div>
      </div>
      </div>
     
      <div className="follow_ids1">
      <div className="follow_ids2">
          <div className="img_id">  
        <img
          src="https://cdn-icons.flaticon.com/png/512/3001/premium/3001758.png?token=exp=1642833771~hmac=d67788bf9a3a8e7e33ac88418aac771b"
          alt=""
          className="right_id_img"
        />
        <div>
          <h4 className="id_name">nference</h4>
          <p className="id_tag">@_nference</p>
        </div>
          </div>
        <div className="btn_of_follow_E">
          <Button_of_follow />
        </div>
      </div>
      </div>
      <div className="follow_ids1">
      <div className="follow_ids2">
          <div className="img_id">  
        <img
          src="https://cdn-icons.flaticon.com/png/512/3001/premium/3001818.png?token=exp=1642833820~hmac=2fa1800df5558fbc40391a921185d536"
          alt=""
          className="right_id_img"
        />
        <div>
          <h4 className="id_name">nference</h4>
          <p className="id_tag">@_nference</p>
        </div>
          </div>
        <div className="btn_of_follow_E">
          <Button_of_follow />
        </div>
      </div>
      </div>
      <div className="follow_ids1">
      <div className="follow_ids2">
          <div className="img_id">  
        <img
          src="https://cdn-icons.flaticon.com/png/512/3001/premium/3001788.png?token=exp=1642833820~hmac=244bbd3f57a9cac4aadad0bcdd611db2"
          alt=""
          className="right_id_img"
        />
        <div>
          <h4 className="id_name">nference</h4>
          <p className="id_tag">@_nference</p>
        </div>
          </div>
        <div className="btn_of_follow_E">
          <Button_of_follow />
        </div>
      </div>
      </div>
      <div className="follow_ids1">
      <div className="follow_ids2">
          <div className="img_id">  
        <img
          src="https://cdn-icons.flaticon.com/png/512/3001/premium/3001817.png?token=exp=1642833820~hmac=092c1a45f612e75aefad2683fd06549f"
          alt=""
          className="right_id_img"
        />
        <div>
          <h4 className="id_name">nference</h4>
          <p className="id_tag">@_nference</p>
        </div>
          </div>
        <div className="btn_of_follow_E">
          <Button_of_follow />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Explore_Right;
