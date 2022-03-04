import React,{useState} from 'react'
import Notification_data from './Notification_data'
import './Tab_N.css'
function Tab_N() {
    const [Ndata, setNdata] = useState(0)
    return (
        <div className='main_tab_N'>
       <div className="tabs_N">
        <div className="tab_N" onClick={() => setNdata(0)}>
          <h4 className='all_name' >All</h4>
        </div>
        <div className="tab_N" onClick={() => setNdata(1)}>
          <h4 className='all_name2' >Mentions</h4>
        </div>
      </div>
    <hr className='hr_N'/>
      <div className="tabs contents">
        <div className="tab-content" hidden={Ndata != 0}>
          <Notification_data/>
        </div>
        <div className="tab-content" hidden={Ndata != 1}>
          <div className="h1_p">
           <h1 className='font_size_bold'>Nothing to see here — yet</h1>
        <p>When someone mentions you, you'll find it here.</p>
          </div>
        </div>
      
     </div>
     </div>
    )
}

export default Tab_N
