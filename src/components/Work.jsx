import React from 'react';

const Work = () => {
  const projects = [
    { id: 1, category: 'photography web-design', img: 'images/gallery/1.jpg', title: 'All The Time', link: 'project2.html' },
    { id: 2, category: 'illustration1 motion-graphics', img: 'images/gallery/2.jpg', title: 'Golden Eagle', link: 'project1.html' },
    { id: 3, category: 'motion-graphics photography', img: 'images/gallery/3.jpg', title: 'All The Time', link: 'project3.html' },
    { id: 4, category: 'web-design illustration1', img: 'images/gallery/4.jpg', title: 'Fixed Mag', link: 'project4.html' },
    { id: 5, category: 'photography web-design', img: 'images/gallery/5.jpg', title: 'La Catería', link: 'project2.html' },
    { id: 6, category: 'illustration1 motion-graphics', img: 'images/gallery/6.jpg', title: '5th Anniversary Set', link: 'project1.html' },
    { id: 7, category: 'motion-graphics photography', img: 'images/gallery/7.jpg', title: 'La Catería', link: 'project3.html' },
    { id: 8, category: 'web-design illustration1', img: 'images/gallery/8.jpg', title: 'Dan Fink', link: 'project4.html' }
  ];

  return (
    <div id="work">
      <div className="container">
        <div className="sixteen columns" data-scrollreveal="enter top and move 150px over 1s">
          <div className="section-top">
            <div className="line-dark"></div>
            <h1>our work</h1>
            <div className="subtext-top">Continuously creating daring digital solutions</div>
            <div className="line-dark1"></div>
          </div>
        </div>
      </div>
      <div className="clear"></div>
      <div className="portfolio"></div>
      <div className="expander-wrap relative">
        <div id="expander-wrap">
          <p className="cls-btn"><button className="close" onClick={() => console.log('Close')}>X</button></p>
          <div className="expander-inner"></div>
        </div>
      </div>
      <div className="clear"></div>
      <div className="container">
        <div className="sixteen columns">
          <div id="portfolio-filter">
            <ul id="filter">
              <li><button className="current" data-filter="*" onClick={(e) => e.preventDefault()}>Show all</button></li>
              <li><button data-filter=".photography" onClick={(e) => e.preventDefault()}>photography</button></li>
              <li><button data-filter=".illustration1" onClick={(e) => e.preventDefault()}>videography</button></li>
            </ul>
          </div>
        </div>
      </div>
      <ul className="portfolio-wrap">
        {projects.map(project => (
          <li key={project.id} className={`portfolio-box ${project.category}`}>
            <a className="expander" href={project.link}>
              <img src={project.img} alt={project.title} />
              <div className="mask"></div>
              <div className="line-folio"></div>
              <div className="line-folio1"></div>
              <h4>{project.title}</h4>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Work;
