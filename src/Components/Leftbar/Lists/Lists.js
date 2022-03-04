import React from 'react'
import Applink from '../../applink/Applink'
import './Lists.css';
import Input from '../../input/Input';
import Rightbar from '../../Rightbar/Rightbar';
import Explore_Right from '../../../ExploreRight/Explore_Right';
function Explore() {
    return (
        <div className='main_L'>
            <div className="leftbar_L">
            <Applink/>
            </div>
            <div className="middle_L">
                <div className="middle_L_second">
                    <div className="icon_text">
              <div className='image_L_main'>
                  <img src="https://cdn-icons.flaticon.com/png/512/2889/premium/2889708.png?token=exp=1642915666~hmac=e0d8571f972eb49527636f69480ce515" alt="" className='image_L' />
              </div>
               <div>
                   <h3 className='id_name' className='font_size_bold'>Lists</h3>
                   <p className='id_name'>@vikassa74826493</p>
               </div>
                </div>
                <div className="icons_L">
               <div className='image_L_main'>
                   <img src="https://cdn-icons.flaticon.com/png/512/2040/premium/2040523.png?token=exp=1642915719~hmac=18146467b351d6ac73ba3a60e024a699" alt="" className='image_L' />
               </div>
               <div className='image_L_main'>
                   <img src="https://cdn-icons-png.flaticon.com/512/512/512142.png" alt="" className='image_L' />
               </div>
                </div>
                </div>
                <h3 className='pinned_lists'>
              Pinned Lists
                </h3>
                <p className='pinned_lists_below_text'>Nothing to see here yet — pin your favorite Lists to access them quickly.</p>
                <hr />
            <div className="Explore_right_List">
                <Explore_Right/>
            </div>
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
    )
}

export default Explore
