import React from 'react'
import { FaEnvelopesBulk } from "react-icons/fa6";
import { BsChevronDoubleRight } from "react-icons/bs";
import './services.css'
import useToggle from '../../configurations/useToggle';
const Services = () => {
  const work = [{
    id:1,
    image:"images/Capture.JPG",
    title:"Web Developmet",
    desc:"  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos quibusdam laboriosam officia, provident aperiam molestiae sapiente praesentium rerum explicabo velit quasi. Impedit dolore reiciendis, veritatis, eum laboriosam tempore exercitationem corrupti nam qui eaque laborum hic minima, nesciunt doloremque porro dolorem?"
  },
  {
  id:2,
  image:"images/Capture.JPG",
  title:"E-commerce Multi-vendor App UX",
  desc:"  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos quibusdam laboriosam officia, provident aperiam molestiae sapiente praesentium rerum explicabo velit quasi. Impedit dolore reiciendis, veritatis, eum laboriosam tempore exercitationem corrupti nam qui eaque laborum hic minima, nesciunt doloremque porro dolorem?"
},
{
  id:3,
  image:"images/Capture.JPG",
  title:"Android App development",
  desc:"  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos quibusdam laboriosam officia, provident aperiam molestiae sapiente praesentium rerum explicabo velit quasi. Impedit dolore reiciendis, veritatis, eum laboriosam tempore exercitationem corrupti nam qui eaque laborum hic minima, nesciunt doloremque porro dolorem?"
}
]
const {serviceSec1,serviceSec2} = useToggle()

  return (
    <>
    <section className={serviceSec1 === true ?"services" : "sectionHide"}>
      <div className="container">
        <div className="text">
         <h1 className="text-center mt-5">Services</h1>
         <div className="row mt-5">
            <div className="col-md-6 mt-2"><h1>High-impact services to help your business</h1></div>
            <div className="col-md-6"> <p>obcaecati! Voluptates velit ratione consequuntur excepturi quibusdam veritatis corrupti similique facere quas soluta labore quis ipsa nostrum vitae molestias, eveniet doloremque laudantium laborum corporis nihil reprehenderit facilis nam praesentium. Quod facilis temporibus optio. A quas distinctio harum alias, reiciendis tenetur, est sed porro non quisquam adipisci, vel cumque odio autem? Culpa veritatis.</p></div>
         </div>
        </div>
        <div className="section-item">
         <div className="row mt-5 mb-5">
            <div className="col-md-4 mt-2">
                <div className="box">
                   <div className="p-3">
                   <div className="icon"><FaEnvelopesBulk /></div>
                    <div className="heading"><h2>Digital Marketing</h2></div>
                    <div className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptas eius doloribus non ipsa, eum quos cum odit.</div>
                    <div className="services-button">
                        <button>Read More <BsChevronDoubleRight /></button>
                    </div>
                   </div>
                </div>
            </div>
            <div className="col-md-4 mt-2">
                <div className="box">
                   <div className="p-3">
                   <div className="icon"><FaEnvelopesBulk /></div>
                    <div className="heading"><h2>Digital Marketing</h2></div>
                    <div className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptas eius doloribus non ipsa, eum quos cum odit.</div>
                    <div className="services-button">
                        <button>Read More <BsChevronDoubleRight /></button>
                    </div>
                   </div>
                </div>
            </div>
            <div className="col-md-4 mt-2">
                <div className="box">
                   <div className="p-3">
                   <div className="icon"><FaEnvelopesBulk /></div>
                    <div className="heading"><h2>Digital Marketing</h2></div>
                    <div className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptas eius doloribus non ipsa, eum quos cum odit.</div>
                    <div className="services-button">
                        <button>Read More <BsChevronDoubleRight /></button>
                    </div>
                   </div>
                </div>
            </div>
         </div>
        </div>
      </div>
    </section>
    {/* service2 */}
    <section className={serviceSec2 === true ?"services1" : "sectionHide"}>
    <div className="mainLand m-2">
    <div className="container">
   <div className="hedingbox">
   <h2 className='text-center'>Work </h2>
   </div>
        <div className="row">
       
       {
        work.map(({image,title,desc,id})=>{
          return(
            <div className="  col-sm-4  Pborder" key={id}>
              <div className="wid" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" >
       <figure>
            <img src={image} style={{width:"20%",margin:"10px"}} className='img-fluid p-1 mt-2' alt="" />
        </figure>
        <h3>{title}</h3>
         <p >{desc.substring(0,100)}...</p>
         </div>       
</div>
          )
        })
       }
      
       
        </div>
 
    </div>
  </div>
    </section>
    </>
  )
}

export default Services