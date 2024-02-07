import React from 'react'
import './contact.css'
import { FaPhone } from "react-icons/fa6";
const Contactus = () => {
  return (
    <>
     <section className='contact mt-5'>
  <div className="container">
   <div className="text-center">
   <h1 style={{color:"#f3c242"}}>Get In Touch</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit error aliquid excepturi <br />omnis earum. Itaque animi ipsum eius at suscipit.</p>
   </div>
   <div className="row mt-5">
    <div className="col-md-6">
        <div className="leftBox">
            <div className="">
                <h2> Contact Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit error aliquid excepturi omnis earum. Itaque animi ipsum eius at suscipit.</p>
            </div>
            <div className="contactDetails mt-5">
             <div className='d-flex mt-3'>
             <span className="icon"><p><FaPhone /></p></span>
             <div className="number">+9136264526</div>
             </div>
             <div className='d-flex mt-3'>
             <span className="icon"><p><FaPhone /></p></span>
             <div className="number">xyz@gmail.com</div>
             </div>
             <div className='d-flex mt-3'>
             <span className="icon"><p><FaPhone /></p></span>
             <div className="number">653 hazratganj ,Lucknow</div>
             </div>
            </div>
        </div>
    </div>
    <div className="col-md-6">
        <div className="rightBox">
            <form action="">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder='Enter your name' />
                    <input type="Email" className="form-control" placeholder='Enter Email Address' />
                    <textarea class="form-control mt-4" id="exampleFormControlTextarea1" rows="3" placeholder='Enter your Address'></textarea>
                    <button className='contactBtn'>send message</button>
                </div>
            </form>
        </div>
    </div>
   </div>
  </div>
     </section>
    </>
  )
}

export default Contactus