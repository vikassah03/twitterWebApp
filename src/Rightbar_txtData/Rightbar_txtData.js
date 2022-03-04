import React from 'react'
import './Rightbar_txtData.css'
function Rightbar_txtData() {
    return (
        <div className='Right_txt_data'>
            <h3 className='font_size_bold'>What's happening</h3>
            <div>

                <div className='news2'>
                <p className='news_id_name'>india national news .Live</p>
                <div className=''>
                   <h4 className="news_tweet_R" >
                        SC allows resumption of NEET PG 2021 counselling as per existion quota
                       </h4>
                       <div>
                           <h4 className="news_tweet_R">Treading with <span className='trending'>#neetpg2021counselling</span></h4>
                       </div>
                </div>
                </div>
                <div className='news2'>
                    <p className='news_id_name'>Entertainment .Treading</p>
                    <h4 className="news_tweet_R">#PushpaOnPrimeFromToday</h4>
                    <p className='news_id_name'>3,613 Tweets</p>
                </div>
                <div className='news2'>
                    <p className='news_id_name'>Entertainment · Trending</p>
                    <h4 className="news_tweet_R">#DrivingLicence</h4>
                    <p className='news_id_name'> <span className='trending'> Trending with #EmraanHashmi, #AkshayKumar</span></p>
                </div>
            </div>
        </div>
    )
}

export default Rightbar_txtData
