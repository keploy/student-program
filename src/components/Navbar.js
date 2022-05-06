import React from 'react';
import Keploy from '../assets/images/Keploy.png';
import Github from '../assets/images/github.png';
import Linkedin from '../assets/images/linkedin.svg';
import Slack from '../assets/images/slack.svg';
import Youtube from '../assets/images/youtube.svg';
import './Navbar.css'; 

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbar-light  ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={Keploy} className="keployLogo" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item d-flex align-items-center justify-content-center">
                              <li className="nav-item d-flex align-items-center">
                              <a className="nav-link" aria-current="page" target="_blank" href="https://join.slack.com/t/keploy/shared_invite/zt-12rfbvc01-o54cOG0X1G6eVJTuI_orSA">
                                  <img src={Slack} className="navbarLogo" alt="" />
                              </a>
                              </li>
                              <li className="nav-item d-flex align-items-center">
                              <a className="nav-link" target="_blank" href="https://www.youtube.com/channel/UC6OTg7F4o0WkmNtSoob34lg">
                                  <img src={Youtube} className="navbarLogo" alt="" style={{width:"28px"}}/>
                              </a>
                              </li> 
                              <li className="nav-item d-flex align-items-center">
                              <a className="nav-link" target="_blank" href="https://www.linkedin.com/company/keploy">
                                  <img src={Linkedin} className="navbarLogo" alt="" />
                              </a>
                              </li>
                            </li>

                            <li className="nav-item">
                              <a className="nav-link" target="_blank" href="https://github.com/keploy/keploy">
                                  <button className="glow-on-hover" type="button">
                                  <img src={Github} className="navbarLogo" alt="" />
                                  <span className="star-us">STAR US</span> ON GITHUB</button>
                              </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>  
            {/* <div>
  <Navbar
    color="faded"
    light
  >
    <NavbarBrand
      className="me-auto"
      href="/"
    >
      reactstrap
    </NavbarBrand>
    <NavbarToggler
      className="me-2"
      onClick={function noRefCheck(){}}
    />
    <Collapse navbar>
      <Nav navbar>
        <NavItem>
          <NavLink href="/components/">
            Components
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            GitHub
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
</div> */}
        </>

    );
};

export default Navbar;