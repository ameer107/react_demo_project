import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/Sroom.jpg'
import img2 from '../assets/laptop.jpg'

const Services = () => {
    return (
        <div className='Services'>

            <Carousel 
                autoPlay 
                infiniteLoop
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                interval={2000}
            >

                <div>
                    <img src={img1} alt="item1" />
                    <p className='legend'>Software Development</p>
                </div>
                <div>
                    <img src={img2} alt="item2" />
                    <p className='legend'>IT Solutions</p>
                </div>

            </Carousel>

        </div>
    )
}

export default Services