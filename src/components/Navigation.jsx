import React from 'react';

const Navigation = () => {
  return (
    <nav id="menu-wrap" className="menu-back cbp-af-header">
      <div className="container">
        <div className="sixteen columns">
          <div className="logo"></div>
          <ul className="slimmenu">
            <li><a className="scroll" href="#home">home</a></li>
            <li><a className="scroll" href="#about">about</a></li>
            <li><a className="scroll" href="#work">work</a></li>
            <li><a className="scroll" href="#services">services</a></li>
            <li><a className="scroll" href="#project-registration">project registration</a></li>
            <li><a className="scroll" href="#blog">blog</a></li>
            <li><a className="scroll" href="#contact">contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
