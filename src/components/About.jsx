import React from 'react';

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="sixteen columns" data-scrollreveal="enter top and move 150px over 1s">
          <div className="section-top">
            <div className="line-dark"></div>
            <h1>about us</h1>
            <div className="subtext-top">where every cut ignites a story</div>
            <div className="line-dark1"></div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="sixteen columns" data-scrollreveal="enter bottom and move 150px over 1s">
          <div className="about-top">
            <div className="biger-text">
              <span className="padding-left-text-top">If</span> post-production tasks are piling up and your in-house team is stretched thin, we offer the perfect support to help you deliver high-quality videos on time.
            </div>
          </div>
        </div>
        <div className="sixteen columns">
          <div className="separ"></div>
        </div>
        <div className="sixteen columns" data-scrollreveal="enter top and move 150px over 1s">
          <div className="subsection-top">
            <div className="subline-dark"></div>
            <h3>WE LOVE WHAT WE DO</h3>
            <div className="subline-dark1"></div>
          </div>
        </div>
        <div className="eight columns" data-scrollreveal="center">
          <div className="team-info1">
            <h5>trusted services</h5>
            <div className="team-subtext2"></div>
            <p>Experience high-quality video editing that reflects your studio's unique style. Our reliable team ensures exceptional results and offers unlimited revisions until you're fully satisfied, guaranteeing excellence in every frame.</p>
          </div>
        </div>
        <div className="eight columns" data-scrollreveal="center">
          <div className="team-info1">
            <h5>Affordable solutions</h5>
            <div className="social-team1"></div>
            <p>Affordable solutions that expand with you. Our model is structured to support your growth, whether you engage us for a single project or a full-time partnership, our setup evolves with your business needs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
