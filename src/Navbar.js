import { useEffect } from 'react';
import SendEmail from './SendEmail';

import $ from 'jquery';

import { Link } from 'react-router-dom';


export default function Navbar() {
  
    // useEffect(() => {
    //     $(window).on('scroll', function () {
    //         var scroll = $(window).scrollTop();
    //         if (scroll < 245) {
    //             $("#sticky-header").removeClass("sticky-menu");
    //             $('.scroll-to-target').removeClass('open');
    //             $("#header-fixed-height").removeClass("active-height");
        
    //         } else {
    //             $("#sticky-header").addClass("sticky-menu");
    //             $('.scroll-to-target').addClass('open');
    //             $("#header-fixed-height").addClass("active-height");
    //         }
    //     });
    //   }, []);

    useEffect(() => {
        $(".menu-tigger").on("click", function () {
          $(".offCanvas__info, .offCanvas__overly").addClass("active");
          return false;
        });
      }, []);

    useEffect(() => {
        $(".menu-close, .offCanvas__overly").on("click", function () {
            $(".offCanvas__info, .offCanvas__overly").removeClass("active");
        });
    }, []);

    useEffect(() => {
        $(".demo-trigger").on("click", function () {
            $(".offCanvas__info1, .offCanvas__overly").addClass("active");
            return false;
        });
    }, []);

    useEffect(() => {
        $(".menu-close, .offCanvas__overly").on("click", function () {
            $(".offCanvas__info1, .offCanvas__overly").removeClass("active");
        });
    }, []);


    useEffect(() => {
        if ($('.tgmenu__wrap li.menu-item-has-children ul').length) {
            $('.tgmenu__wrap .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="plus-line"></span></div>');
        }
        
    }, []);
    useEffect(() => {
        if ($('.tgmobile__menu').length) {

            var mobileMenuContent = $('.tgmenu__wrap .tgmenu__main-menu').html();
            $('.tgmobile__menu .tgmobile__menu-box .tgmobile__menu-outer').append(mobileMenuContent);
        
            //Dropdown Button
            $('.tgmobile__menu li.menu-item-has-children .dropdown-btn').on('click', function () {
                $(this).toggleClass('open');
                $(this).prev('ul').slideToggle(300);
            });
            //Menu Toggle Btn
            $('.mobile-nav-toggler').on('click', function () {
                $('body').addClass('mobile-menu-visible');
            });
        
            //Menu Toggle Btn
            $('.tgmobile__menu-backdrop, .tgmobile__menu .close-btn').on('click', function () {
                $('body').removeClass('mobile-menu-visible');
            });
        };
        
    }, []);

  return (
    <>
   
        <button className="scroll__top scroll-to-target" data-target="html">
        <i className="renova-up-arrow"></i>
        </button>
 
    <header>
        
        <div id="header-fixed-height"></div>
        <div id="sticky-header" className="tg-header__area">
            <div className="container custom-container">
                <div className="row">
                    <div className="col-12">
                        <div className="tgmenu__wrap">
                            <nav className="tgmenu__nav">
                                <div className="logo">
                                    <Link to="/"><img src="assets/img/Copass_logo.png" alt="Logo"/></Link>
                                </div>
                                <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                                    <ul className="navigation">
                                        <li className="active">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li className="menu-item-has-children"><a href="#">Company</a>
                                            <ul className="sub-menu">
                                                <li><Link to="/about">About Us</Link></li>
                                                <li><Link to="/Leadership">Leadership</Link></li>
                                                <li><Link to="/Clients">Clients</Link></li>
                                                {/* <li><a >Partners</a></li> */}
                                            </ul>
                                        </li>
                                    
                                        <li className="menu-item-has-children"><a href="#">Products</a>
                                            <ul className="sub-menu">
                                                <li><Link to="/LOS">Loan Origination System (LOS)</Link></li>
                                                <li><Link to="/Cops">COPS</Link></li>
                                                <li><Link to="/EzyB">EzyB</Link></li>
                                                <li><Link to="/AppCo">AppCo</Link></li>
                                                <li><Link to="/BanqOn">BanqOn</Link></li>
                                                <li><Link to="/ReCoup">ReCoup</Link></li>
                                                <li><Link to="/CoBIZ">CoBIZ</Link></li>
                                            </ul>
                                        </li>
                                    
                                        <li>
                                            <Link to="/Career">Careers</Link>
                                            {/* <a href="Careers.html">Careers</a> */}
                                        </li>
                                        <li>
                                            <Link to="/Calculators">Calculators</Link>
                                            {/* <a href="Careers.html">Careers</a> */}
                                        </li>
                                        <li>
                                            <Link to="/Contact">Contact Us</Link>
                                            {/* <a href="contact.html">Contact Us</a> */}
                                        </li>
                                        <li className="menu-item-has-children"><a href="#">Login</a>
                                            <ul className="sub-menu">
                                                <li><a href="https://ecloud.copass.in"><img src="assets/img/ezyb.png" height="40" alt="EzyB"/></a></li>
                                                <li><a href="https://ecloud.copass.in/CIVSLogin.aspx"><img src="assets/img/cobis.png" height="40" alt="Cobiz"/></a></li>
                                                <li><a href="https://demo-los.copass.in" target="_blank"><img src="assets/img/stream.png" height="40" alt="Stream"/></a></li>

                                                <li><a href="https://recoup.copass.in" target="_blank"><img src="assets/img/Recoup_logo.png" height="40" alt="Recoup"/></a></li>
                                                <li><a href="https://demo-copsprodui.copass.in" target="_blank"><img src="assets/img/Cops_logo.png" height="40" alt="Cops"/></a></li>
                                            </ul>
                                        </li>
                                       
                                   
                                    </ul>
                                </div>
                                <div className="tgmenu__action">
                                    <ul className="list-wrap">
                                        <li className="header-btn">
                                            <a href="javascript:void(0)" className="btn border-btn demo-trigger demo_btn">Demo</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mobile-nav-toggler"><i className="tg-flaticon-menu-1"></i></div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="tgmobile__menu">
            <nav className="tgmobile__menu-box">
                <div className="close-btn"><i className="tg-flaticon-close-1"></i></div>
                <div className="nav-logo">
                    <a href="index.html"><img src="assets/img/Copass_logo.png" alt="Logo"/></a>
                </div>
                <div className="tgmobile__search">
                    <form action="#">
                        <input type="text" placeholder="Search here..."/>
                        <button><i className="fas fa-search"></i></button>
                    </form>
                </div>
                <div className="tgmobile__menu-outer">
                    {/* Here Menu Will Come Automatically Via Javascript / Same Menu as in Header */}
                </div>
                <div className="social-links">
                    <ul className="list-wrap">
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
            </nav>
        </div>
        <div className="tgmobile__menu-backdrop"></div>

        <div className="search__popup">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="search__wrapper">
                            <div className="search__close">
                                <button type="button" className="search-close-btn">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"></path>
                                        <path d="M1 1L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="search__form">
                                <form action="#">
                                    <div className="search__input">
                                        <input className="search-input-field" type="text" placeholder="Type keywords here"/>
                                        <span className="search-focus-border"></span>
                                        <button>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M19.0002 19.0002L17.2002 17.2002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="search-popup-overlay"></div>

        <div className="offCanvas__info">
            <div className="offCanvas__close-icon menu-close">
                <button><i className="far fa-window-close"></i></button>
            </div>
            <div className="offCanvas__logo mb-30">
                <a href="index.html"><img src="assets/img/Copass_logo.png" alt="Logo"/></a>
            </div>
            <div className="offCanvas__side-info mb-30">
                <div className="contact-list mb-30">
                    <h4>Office Address</h4>
                    <p>B 201-203, Sagar Tech Plaza, Sakinaka junction, Andheri Kurla Road, Andheri(E),Mumbai-400072</p>
                </div>
                <div className="contact-list mb-30">
                    <h4>Phone Number</h4>
                    <p>+91 9920 682549</p>
                    <p>+91 9619 879236</p>
                </div>
                <div className="contact-list mb-30">
                    <h4>Email Address</h4>
                    <p>support@copass.in</p>
                </div>
            </div>
            <div className="offCanvas__social-icon mt-30">
                <a href="javascript:void(0)"><i className="fab fa-facebook-f"></i></a>
                <a href="javascript:void(0)"><i className="fab fa-twitter"></i></a>
                <a href="javascript:void(0)"><i className="fab fa-google-plus-g"></i></a>
                <a href="javascript:void(0)"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
        <div className="offCanvas__overly"></div>


        <div className="offCanvas__info1">
            <div className="offCanvas__close-icon menu-close">
                <button><i className="far fa-window-close"></i></button>
            </div>
            <div className="offCanvas__logo mb-30">
                <h3>Request For Demo</h3>
            </div>
            <div className="offCanvas__side-info mb-30 contact__form">

                <SendEmail />

                {/* <div className="row">
                    <div className="col-md-6">
                        <div className="form-grp">
                            <label>First Name</label>
                            <input type="text" className="form-control" name="" placeholder="Firt Name" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-grp">
                            <label>Last Name</label>
                            <input type="text" className="form-control" name="" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-grp">
                            <label>Email</label>
                            <input type="Email" className="form-control" name="" placeholder="Name here" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-grp">
                            <label>Phone Number</label>
                            <input type="Email" className="form-control" name="" placeholder="Name here" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-grp">
                            <button type="submit" id='submitBtn' className="btn btn-two d-block">Request Sent</button>
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
        <div className="offCanvas__overly"></div>

    </header>
 
    </>
  )
}
