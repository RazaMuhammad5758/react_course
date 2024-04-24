import React from 'react'
import './Third.css'

const Third = () => {
  return (
    <div>
        <div className="container-main-3">
            <h1>PREVIOUS DIAGNOSIS</h1>
            <div className="three-pics">
                <div className="pic-1">
                    <img src="/public/Pics/1.jpg" alt="pic-1" />
                    <p>A month ago</p>
                 </div>
                <div className="pic-2">
                    <img src="/public/Pics/2.jpg" alt="pic-1" />
                    <p>2 weeks before</p>
                 </div>
                <div className="pic-3">
                    <img src="/public/Pics/3.jpg" alt="pic-1" />
                    <p>2 months ago</p>
                 </div>
            </div>
        </div>
      
    </div>
  )
}

export default Third
