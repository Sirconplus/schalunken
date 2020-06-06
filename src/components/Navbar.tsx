import React from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import icon from '../img/beer-icon.svg';

class Navbar extends React.Component<any, { active: boolean; navBarActiveClass: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ''
    };
  }

  toggleHamburger = (): void => {
    // toggle the active boolean in the state
    const { active } = this.state;
    if (active) {
      this.setState({
        active: !active,
        navBarActiveClass: ''
      });
    } else {
      this.setState({
        active: !active,
        navBarActiveClass: 'is-active'
      });
    }
  };

  render(): JSX.Element {
    const { navBarActiveClass } = this.state;
    return (
      <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={icon} alt="Schalunken" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <button
              type="button"
              className={`navbar-burger burger ${navBarActiveClass}`}
              data-target="navMenu"
              onClick={this.toggleHamburger}
              onKeyDown={(e) => {
                if (e.keyCode !== 13) return;
                this.toggleHamburger();
              }}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div id="navMenu" className={`navbar-menu ${navBarActiveClass}`}>
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/Sirconplus/schalunken"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
