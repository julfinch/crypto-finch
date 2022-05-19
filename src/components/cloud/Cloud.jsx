import React from 'react'
import './CloudStyles.css'
import cloudBg from "../../assets/cloud-bg.png"

const Cloud = () => {
  return (
    <div className='cloud'  style={{backgroundImage: `url("${cloudBg}")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
        <div className="container">
            <div className="content">
                <h2><span>Cloud</span> Security</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eveniet esse sed deserunt, similique libero deleniti et delectus amet cum, blanditiis tempore reprehenderit molestias ducimus, alias ad enim? Ad, dolorem.</p>
                
                <div>
                    <button>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cloud