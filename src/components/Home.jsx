import React from 'react';

const Home = () => {
  return (
    <div id="home">
      <div className="line"></div>
      <div className="home-big-text">cut spark</div>
      <div className="home-small-text">where every cut ignites a story</div>
      <div className="line1"></div>
      <video autoPlay loop muted poster="images/1.jpg" id="video_background">
        <source src="videos/HP Video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Home;
