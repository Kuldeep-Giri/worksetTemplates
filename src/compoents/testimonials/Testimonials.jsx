import React from 'react'
import './testi.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Row, Col } from "react-bootstrap"
const Testimonials = () => {
    const testimonials = [
        {
          id: 1,
          image:"images/john.JPG",
          quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          author: "John Doe",
          company: "Company A"
        },
        {
          id: 2,
          image:"images/john.JPG",
          quote: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          author: "Jane Smith",
          company: "Company B"
        },
        {
          id: 3,
          image:"images/john.JPG",
          quote: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          author: "Mark Wood",
          company: "Company B"
        },
      ];

      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      autoplaySpeed: 5000
      };

      const chunkArray = (array, size) => {
        const chunkedArray = [];
        for (let i = 0; i < array.length; i += size) {
          chunkedArray.push(array.slice(i, i + size));
        }
        return chunkedArray;
      };
    
      // Chunk the items array into pairs of two
      const chunkedItems = chunkArray(testimonials, 2);
    

  return (
    <>

<div className='container mt-5 mb-4'>
<h1 className='text-center'>Reviews From Real Clients</h1>
      <div className='row mt-5'>
        <div className='col'>
          <Slider {...settings}>
            {chunkedItems.map((pair, index) => (
              <div key={index}>
                <Row>
                  {pair.map((item) => (
                    <div className='col' key={item.id}>
                      <div className='first_testmonial_box'>
                      <img src={item.image} alt={item.author} />
                      <h3>{item.author}</h3>
                      <p>{item.company}</p>
                      <p>{item.quote}</p>
                      </div>
                    </div>
                  ))}
                </Row>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>

    <section className='testimonial2 mt-5'>
   <div className="container">
    <h1 className='text-center'>Reviews From Real Clients</h1>
    <div className="client mt-5">
      <div className="row">
        {
          testimonials.map((t)=>{
            return(
              <div className="col-sm-4">
          <div className="clientBox">
            <div className="text">
              <p>{t.quote}</p>
            </div>
            <div className="clientDetails">
              <img src={t.image} alt="" />
              <div className="name">
                <h6>{t.author}</h6>
                <p>{t.company}</p>
              </div>
            </div>
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

export default Testimonials