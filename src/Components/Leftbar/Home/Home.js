import React from 'react'
import './Home.css';
import Applink from '../../applink/Applink';
import Middlebar from '../../middlebar/Middlebar';
import Rightbar from '../../Rightbar/Rightbar';
import Input from '../../input/Input';
function Home() {
    return (
    <>
        <div className="home">
          <div className='applink'>
            <Applink/>
          </div>
          <div className="middlebarH">
            <Middlebar/>
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
    </>
    )
}

export default Home
