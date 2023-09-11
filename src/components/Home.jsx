import React from "react"
import BannerImage from "../assets/home-banner-image.png"

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">Nombre Modelo</h1>
          <p className="primary-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            doloribus eum nemo sunt ab provident quod blanditiis rem, dolor eos
            iusto vitae ipsum, esse nisi. Repellat harum veritatis explicabo
            eius autem, repudiandae unde nisi quia maxime temporibus cumque,
            officia accusamus.
          </p>
          <button className="secondary-button">Evaluar</button>
        </div>
        <div className="home-bannerImage-container">
          <img src={BannerImage} alt="" />
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
