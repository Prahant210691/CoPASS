import React from 'react'

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer className="footer__area">
        <div className="container">
            <div className="footer__top">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                        <div className="footer__widget">
                            <div className="footer__logo">
                                <a href="index.html"><img src="assets/img/Copass_logo_white.png" alt="logo"/></a>
                            </div>
                            <div className="footer__content">
                                <p>CoPASS Technology & Services Private Limited is Information Technology company providing service since 25+ years & is incorporated under the Companies Act, 1956 as private limited.</p>
                            </div>
                            <div className="footer__social">
                                <ul className="list-wrap">
                                    <li><a href="https://www.facebook.com/profile.php?id=100063806154324" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/73217717/admin/inbox/" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="https://www.instagram.com/copass_technologies/" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-4 col-md-3 col-sm-4 col-6">
                        <div className="footer__widget">
                            <h4 className="footer__widget-title">Useful Links</h4>
                            <div className="footer__widget-link">
                                <ul className="list-wrap">
                                    <li>
                                        <Link to="/About"><i className="renova-right-arrow"></i><span>About Us</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/Leadership"><i className="renova-right-arrow"></i><span>Leadership</span></Link>
                                    </li>
                                    {/* <li>
                                        <Link to="/EzyB"></Link>
                                        <a href="Partners.html"><i className="renova-right-arrow"></i><span>Our Partners</span></a>
                                    </li> */}
                                    <li>
                                        <Link to="/Contact"><i className="renova-right-arrow"></i><span>Contact Us</span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-3 col-sm-6 col-6 col-6">
                        <div className="footer__widget">
                            <h4 className="footer__widget-title">Our Products</h4>
                            <div className="footer__widget-link">
                                <ul className="list-wrap">
                                    <li>
                                        <Link to="/LOS"><i className="renova-right-arrow"></i><span>LOS</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/Cops"><i className="renova-right-arrow"></i><span>COPS</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/Ezyb"><i className="renova-right-arrow"></i><span>EzyB</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/Appco"><i className="renova-right-arrow"></i><span>AppCo</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/Banqon"><i className="renova-right-arrow"></i><span>BanqOn</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/Recoup"><i className="renova-right-arrow"></i><span>ReCoup</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/Cobiz"><i className="renova-right-arrow"></i><span>CoBIS</span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-xl-4 col-lg-4 col-md-8">
                        <div className="footer__widget">
                            <h4 className="footer__widget-title">CONTACT US</h4>
                            <div className="footer__newsletter">
                                <p>CoPASS Solutions Limited<br/>B 201-203, Sagar Tech Plaza, Sakinaka junction, <br/>Andheri Kurla Road, Andheri(E), Mumbai - 400072<br/>Maharashtra, India.</p>

                                <ul>
                                    <li> <span> Mon - Sat :  </span>
                                      <div className="pull-right"> 6.00 am - 10.00 pm </div>
                                    </li>
                                    <li> <span> Sun : </span>
                                      <div className="pull-right closed"> Closed </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <div className="copyright-text">
                            <p>© 2024 CoPASS. All Rights Reserved</p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="footer__bottom-menu">
                            <ul className="list-wrap">
                                <li><a href="TermsAndConditions.html">Terms and Conditions</a></li>
                                <li><a href="PrivacyPolicy.html">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}
