import React from 'react';
import { Link } from 'gatsby';

import logo from '../img/logo.svg';
import twitter from '../img/social/twitter.svg';

const Footer: React.FC = () => {
  return (
    <footer className="footer has-background-black has-text-white-ter">
      <div className="content has-text-centered">
        <img src={logo} alt="Schalunken" style={{ width: '14em', height: '10em' }} />
      </div>
      <div className="content has-text-centered has-background-black has-text-white-ter">
        <div className="container has-background-black has-text-white-ter">
          <div className="columns">
            <div className="column is-12">
              <ul className="footer-list">
                <li>
                  <Link to="/" className="navbar-item">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="navbar-item" to="/about">
                    <span>About</span>
                  </Link>
                </li>
                <li>
                  <a title="twitter" href="https://twitter.com/schalunken">
                    <img className="fas fa-lg" src={twitter} alt="Twitter" style={{ width: '1em', height: '1em' }} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
