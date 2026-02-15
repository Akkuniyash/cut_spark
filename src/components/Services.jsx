import React from 'react';

const Services = () => {
  return (
    <div id="services">
      <div className="container">
        <div className="sixteen columns" data-scrollreveal="enter top and move 150px over 1s">
          <div className="section-top">
            <div className="line-dark"></div>
            <h1>services</h1>
            <div className="subtext-top">Simplicity, attention to detail...</div>
            <div className="line-dark1"></div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="sixteen columns">
          <div className="separ"></div>
        </div>
        <div className="sixteen columns" data-scrollreveal="enter top and move 150px over 1s">
          <div className="subsection-top">
            <div className="subline-dark"></div>
            <h3>efficient affordable pricing models</h3>
            <div className="subline-dark1"></div>
          </div>
        </div>
        <div className="clear"></div>
        <div className="one-third column" data-scrollreveal="enter left and move 450px over 3s">
          <div className="pricing">
            <div className="background-left"></div>
            <div className="plan-icon">&#xf02b;</div>
            <h5>$9.99 / <span>STANDARD</span></h5>
            <p><strong>24/7</strong> TECH SUPPORT</p>
            <p><strong>15</strong> PROJECTS</p>
            <p><strong>5GB</strong> STORAGE</p>
            <p>UNLIMITED USERS</p>
            <div className="cl-effect-12"><button onClick={() => console.log('Standard plan selected')}>select plan</button></div>
          </div>
        </div>
        <div className="one-third column" data-scrollreveal="enter bottom and move 150px over 1s">
          <div className="pricing featured">
            <div className="background-center"></div>
            <div className="plan-icon">&#xf02c;</div>
            <h5>$16.99 / <span>GOLD</span></h5>
            <p><strong>24/7</strong> TECH SUPPORT</p>
            <p><strong>25</strong> PROJECTS</p>
            <p><strong>15GB</strong> STORAGE</p>
            <p>UNLIMITED USERS</p>
            <div className="cl-effect-12"><button onClick={() => console.log('Gold plan selected')}>select plan</button></div>
          </div>
        </div>
        <div className="one-third column" data-scrollreveal="enter right and move 450px over 2s">
          <div className="pricing">
            <div className="background-right"></div>
            <div className="plan-icon">&#xf02e;</div>
            <h5>$34.99 / <span>PREMIUM</span></h5>
            <p><strong>24/7</strong> TECH SUPPORT</p>
            <p><strong>100</strong> PROJECTS</p>
            <p><strong>50GB</strong> STORAGE</p>
            <p>UNLIMITED USERS</p>
            <div className="cl-effect-12"><button onClick={() => console.log('Premium plan selected')}>select plan</button></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
