import React from 'react'
import Slider from '../common/Slider'
// import MyLogo from '../imgs/black_log.png'
import homeData from '../json/homeData'

const Home = () => {
  return (
    <>
      {/* Cover Image */}
      <div className="container-img">
        <div className="banner" style={{ 
          backgroundImage: "url(https://plus.unsplash.com/premium_photo-1673481599651-5bcb9f683505?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGNsb3RoaW5nfGVufDB8fDB8fHww)",
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat'
        }}>
          <div className="banner-text text-center">
            {/* Logo */}
            <span>
              <h1>
                <strong><img src="/imgs/black_log.png" style={{}} alt="logo" /></strong>
              </h1>
            </span>
            {/* Slogan */}
            <span>
              <h6 className="mt-sm-4 mb-4 white-text wow fadeInDown slogan" data-wow-delay="0.4s">
                Elevate Your Style, Embrace Your Confidence.
              </h6>
            </span>
          </div>
        </div>
      </div>
      {/* End Cover Image */}
      
      {/* Home Page - Part 2: Featured Products */}
      <h3 className="text-center mb-4">&mdash; Featured Products &mdash;</h3>
      {/* Slider Component for Featured Products */}
      <Slider sliderData={homeData} />
      {/* End Home Page - Part 2 */}
    </>
  )
}

export default Home;