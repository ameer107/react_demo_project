import React from 'react';
import VG from '../assets/animate.webp';
import { AiFillGoogleCircle, AiFillYoutube, AiFillAmazonCircle, AiFillInstagram } from 'react-icons/ai';

const Home = () => {
  return (
    <>
      {/* home section 1 */}

      <div className='home' id='home'>
        <main>
          <h1>AMB.SoftSol</h1>
          <p>Find your solutions Here</p>
        </main>
      </div>

      {/* home section 2 */}

      <div className="home2">
        <img src={VG} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      {/* home section 3 */}
      <div className="home3" id='about'>
        <div>
          <h1>
            Who We Are?
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium est quibusdam iure sequi, ducimus odit eos deleniti cumque dolorum rem illum consequatur accusantium fugiat necessitatibus vel voluptas voluptatem, suscipit incidunt.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium est quibusdam iure sequi, ducimus odit eos deleniti cumque dolorum rem illum consequatur accusantium fugiat necessitatibus vel voluptas voluptatem, suscipit incidunt.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium est quibusdam iure sequi, ducimus odit eos deleniti cumque dolorum rem illum consequatur accusantium fugiat necessitatibus vel voluptas voluptatem, suscipit incidunt.
          </p>
        </div>
      </div>

      {/* home section 4 */}
      <div className="home4" id='brands'>
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home;