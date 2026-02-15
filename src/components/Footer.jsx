import React from 'react';

const Footer = () => {
  return (
    <div id="footer">
      <a className="scroll" href="#home">
        <div className="back-top">&#xf102;</div>
      </a>
      <div className="container">
        <div className="sixteen columns">
          <p>Made with<i className="icon-footer">&#xf004;</i>and<i className="icon-footer">&#xf0f4;</i>in serbia</p>
          <div className="social-bottom">
            <ul className="list-social1">
              <li className="icon-soc1">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">&#xf099;</a>
              </li>
              <li className="icon-soc1">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">&#xf09a;</a>
              </li>
              <li className="icon-soc1">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">&#xf09b;</a>
              </li>
              <li className="icon-soc1">
                <a href="https://google.com" target="_blank" rel="noopener noreferrer">&#xf0d5;</a>
              </li>
            </ul>
          </div>
          <p><small>Template: One Click by ig design</small></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
