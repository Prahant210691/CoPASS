import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// import video from './assets/img/home_video1.webm';

// import video from './assets/img/home_video1.webm'

// import video from './home_video1.webm';

export default function Homepage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <>
            {/* <div id="preloader">
          <div id="loader" className="loader">
              <div className="loader-container">
                  <div className="loader-icon"><img src="./assets/img/logo/preloader.svg" alt="Preloader"/></div>
              </div>
          </div>
      </div> */}
            <button className="scroll__top scroll-to-target" data-target="html">
                <i className="renova-up-arrow"></i>
            </button>

            <main className="main-area fix">

                <section className="slider__area-two">

                    <section className="home-banner mobile_display_none">
                        {/* <img src="./assets/img/home_video3.gif" className="home_video" alt="img" /> */}

                        <video width="600" autoPlay muted loop playsInline>
                            <source src="./assets/img/home_video1.webm" type="video/webm" />
                            Your browser does not support the video tag.
                        </video>

                        <div className="home_banner_txt">
                            <div className="row justify-content-start">
                                <div className="col-xl-12 col-lg-12" data-aos="fade-up" data-aos-delay="200">
                                    <h2 className="banner_txt">Empowering Businesses with Seamless Financial Solutions</h2>
                                    <p className="banner_subtxt">We reduce timeliness with software solutions</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="HomeBanner_homeBtnWrap__sofM9 visible">
                        <div className="container">
                            <ul>
                                <li>
                                    <a href="javascript:void(0)">
                                        <div className="HomeBanner_imgWrap__lFYhD">
                                            <svg viewBox="0 0 1024 1024" style={{ display: "inline-block", stroke: "currentColor", fill: "currentColor", width: "34px", height: "34px" }} >
                                                <path d="M0 124.121h1036.412v774.485h-1036.412zM989.867 170.667h-943.321v681.394h943.321z" fill="rgb(14, 59, 104)"></path>
                                                <path d="M695.079 379.439h-652.784v-46.545h652.784z" fill="rgb(14, 59, 104)"></path>
                                                <path d="M1027.848 379.439h-239.523v-46.545h239.523z" fill="rgb(14, 59, 104)"></path>
                                                <path d="M445.719 682.418h-248.025v-46.545h248.025z" fill="rgb(14, 59, 104)"></path>
                                            </svg>
                                        </div>
                                        <h6 className="h6">OCR</h6>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <div className="HomeBanner_imgWrap__lFYhD">
                                            <svg viewBox="0 0 1024 1024" style={{ display: "inline-block", stroke: "currentColor", fill: "currentColor", width: "34px", height: "34px" }}>
                                                <path d="M516.655 1009.199l-9.309-4.065c-81.314-38.179-151.386-82.515-215.134-134.332l1.894 1.491c-57.437-45.494-106.379-98.422-146.292-157.915l-1.567-2.48c-42.122-62.154-67.628-138.573-68.667-220.889l-0.003-0.264v-354.273l439.079-136.471 439.048 136.533v354.211c-1.032 82.576-26.528 158.997-69.553 222.586l0.914-1.433c-41.48 61.974-90.422 114.902-146.431 159.303l-1.429 1.093c-61.854 50.325-131.927 94.661-206.987 130.179l-6.253 2.661zM124.121 170.76v319.984c0 151.583 107.923 271.112 198.594 344.716 56.408 45.67 120.053 86.529 187.976 120.035l5.963 2.659c73.936-36.158 137.623-77.019 195.99-124.201l-1.926 1.507c90.515-73.604 198.594-193.133 198.594-344.716v-319.984l-392.657-122.042z"
                                                    fill="rgb(14, 59, 104)"></path>
                                                <path d="M461.296 646.051l-155.152-155.152 32.923-32.923 122.166 122.166 232.727-232.727 32.923 32.923z" fill="rgb(14, 59, 104)"></path>
                                            </svg>
                                        </div>
                                        <h6 className="h6">Credit Bureau Check</h6>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <div className="HomeBanner_imgWrap__lFYhD">
                                            <svg viewBox="0 0 1024 1024" style={{ display: "inline-block", stroke: "currentColor", fill: "currentColor", width: "34px", height: "34px" }}>
                                                <path d="M36.533 90.353h954.007v707.614h-954.007zM945.363 135.529h-863.654v617.261h863.654z" fill="rgb(14, 59, 104)"></path>
                                                <path d="M0 906.421h1034.33z" fill="rgb(14, 59, 104)"></path>
                                                <path d="M1034.33 929.009h-1034.33v-45.176h1034.33z" fill="rgb(14, 59, 104)"></path>
                                            </svg>
                                        </div>
                                        <h6 className="h6">Pennydrop</h6>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <div className="HomeBanner_imgWrap__lFYhD">
                                            <svg viewBox="0 0 893 1024" style={{ display: "inline-block", stroke: "currentColor", fill: "currentColor", width: "34px", height: "34px" }}>
                                                <path d="M446.398 1024l-11.601-6.954c-0.36-0.21-36.241-21.762-46.672-27.787l-329.673-188.397c-28.717-16.577-46.762-26.708-46.942-26.828l-11.511-6.445v-511.116l10.851-6.565c0.18 0 18.525-11.181 47.482-27.907l329.733-188.487c19.784-11.421 46.282-26.978 46.552-26.978l11.181-6.505 11.331 6.355c1.589 0.899 38.669 22.002 47.631 27.188l329.733 188.367c16.277 9.412 47.122 27.668 47.422 27.847l11.031 6.535v12.77s0 38.968 0 53.776v376.974c0 18.705 0 54.586 0 54.586v13.099l-11.361 6.475c-0.33 0.18-34.262 19.484-46.972 26.978l-329.733 188.487c-17.985 10.372-46.462 27.548-46.762 27.728zM44.964 741.299c8.243 4.676 20.563 11.72 35.971 20.533l329.733 188.367c7.014 4.047 24.19 14.328 35.971 21.283 10.102-5.995 24.79-14.808 35.971-21.253l329.733-188.487c8.063-4.646 24.58-14.089 35.761-20.443 0-12.17 0-29.976 0-41.546v-376.705c0-9.322 0-28.267 0-41.007-10.432-6.175-25.959-15.318-35.971-20.983l-329.733-188.367c-5.845-3.357-23.981-13.789-36.241-20.683l-35.581 20.623-329.733 188.487c-15.378 8.993-27.668 16.127-35.791 20.983z"
                                                    fill="rgb(14, 59, 104)"></path>
                                                <path d="M446.458 534.377c-0.016 0-0.036 0-0.055 0-4.129 0-7.997-1.113-11.323-3.055l0.107 0.058-411.267-237.917c-6.771-3.964-11.246-11.201-11.246-19.484 0-12.427 10.074-22.502 22.502-22.502 4.144 0 8.027 1.12 11.362 3.075l-0.106-0.057 400.026 231.442 399.996-231.382c3.229-1.897 7.111-3.018 11.256-3.018 12.427 0 22.502 10.074 22.502 22.502 0 8.283-4.475 15.521-11.14 19.427l-0.106 0.057-411.267 237.827c-3.223 1.899-7.1 3.022-11.239 3.028l-0.001 0z"
                                                    fill="rgb(14, 59, 104)"></path>
                                                <path d="M446.518 1008.682c-12.416 0-22.482-10.065-22.482-22.482v0-474.845c0-12.416 10.065-22.482 22.482-22.482s22.482 10.065 22.482 22.482v0 474.845c0 12.416-10.065 22.482-22.482 22.482v0z"
                                                    fill="rgb(14, 59, 104)"></path>
                                                <path d="M333.839 705.688c-0 0-0.001 0-0.001 0-3.97 0-7.7-1.033-10.933-2.846l0.113 0.058-72.271-39.748c-13.939-8.063-22.722-12.979-22.812-13.039l-11.481-6.445v-117.565c0-12.416 10.065-22.482 22.482-22.482s22.482 10.065 22.482 22.482v0 91.366l11.601 6.655 71.672 39.388c6.99 3.904 11.639 11.256 11.639 19.694 0 12.416-10.065 22.482-22.482 22.482-0.003 0-0.006-0-0.008-0l0 0z"
                                                    fill="rgb(14, 59, 104)"></path>
                                                <path d="M559.107 706.168c-0.019 0-0.041 0-0.063 0-12.416 0-22.482-10.065-22.482-22.482 0-8.46 4.673-15.829 11.579-19.666l0.115-0.059 75.539-41.486 11.601-6.655v-96.971c0-12.416 10.065-22.482 22.482-22.482s22.482 10.065 22.482 22.482v0 123.23l-11.481 6.445s-8.993 4.976-22.812 13.039l-0.42 0.24-75.719 41.606c-3.107 1.736-6.817 2.758-10.766 2.758-0.020 0-0.039-0-0.059-0l0.003 0z"
                                                    fill="rgb(14, 59, 104)"></path>
                                                <path d="M349.876 351.765c-12.401-0.020-22.447-10.078-22.447-22.482 0-8.288 4.485-15.528 11.159-19.427l0.107-0.058 73.53-41.966 33.873-19.664 11.241 6.415s18.945 10.791 23.381 13.339l73.261 41.966c7.399 3.783 12.377 11.351 12.377 20.083 0 12.416-10.065 22.482-22.482 22.482-4.533 0-8.752-1.341-12.283-3.649l0.086 0.053-85.341-48.8-11.75 6.804-73.62 41.966c-3.186 1.847-7.009 2.938-11.087 2.938-0.001 0-0.003-0-0.004-0l0 0z"
                                                    fill="rgb(14, 59, 104)"></path>
                                            </svg>
                                        </div>
                                        <h6 className="h6">E-Signature</h6>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="page-section bg-snow-white why-kanda-section">
                    <div className="page-section__block">
                        <h2 className="d-lg-none landing-header landing-header--decoration-lime-green text-uppercase">Why CoPASS?</h2>
                        <div className="why-kanda js-why-kanda">
                            <figure className="why-kanda__envelop why-kanda__envelop--active">
                                <div className="why-kanda__item tile">
                                    <div className="tile__inner">
                                        <div className="tile__content" data-bs-toggle="popover" data-bs-container="body" data-bs-trigger="hover" data-bs-content='Data is secured  compliance with regulations, with multi factor authentication  to ensure privacy'>
                                            <div className="tile__plus"><span className="sr-only">+</span></div>
                                            <div className="tile__icon">
                                                <img src="./assets/img/Proven_Track_Record.png" width="84" height="84" alt="Data Security" className="lazyloaded" data-ll-status="loaded" />
                                            </div>
                                            <div className="tile__body"><div className="tile__title">Data Security</div></div>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            <figure className="why-kanda__envelop why-kanda__envelop--active">
                                <div className="why-kanda__item tile">
                                    <div className="tile__inner">
                                        <div className="tile__content" data-bs-toggle="popover" data-bs-container="body" data-bs-trigger="hover" data-bs-content='We commit ourselves meticulously to meeting the turnaround time of every job without compromising quality parameters. Stringent monitoring and measurement standards within the operations enable us to achieve 100% on time delivery every time.'>
                                            <div className="tile__plus"><span className="sr-only">+</span></div>
                                            <div className="tile__icon">
                                                <img src="./assets/img/OnTime_Deliverables.png" width="84" height="84" alt="Quick Turn around Time" className="lazyloaded" data-ll-status="loaded" />
                                            </div>
                                            <div className="tile__body">
                                                <div className="tile__title">
                                                    Quick Turn around Time
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            <div className="why-kanda__br"></div>
                            <figure className="why-kanda__envelop why-kanda__envelop--active">
                                <div className="why-kanda__item tile">
                                    <div className="tile__inner">
                                        <div className="tile__content" data-bs-toggle="popover" data-bs-container="body" data-bs-trigger="hover" data-bs-content='Our automated products enable you to expand microfinance operations efficiently, reaching more clients without increasing costs.'>
                                            <div className="tile__plus"><span className="sr-only">+</span></div>
                                            <div className="tile__icon">
                                                <img src="./assets/img/Scalability.png" width="84" height="84" alt="Scalability" className="lazyloaded" data-ll-status="loaded" />
                                            </div>
                                            <div className="tile__body"><div className="tile__title">Scalability</div></div>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            <figure className="why-kanda__envelop why-kanda__envelop--active why_kanda_txt">
                                <div className="why-kanda__item tile">
                                    <div className="tile__inner">
                                        <div className="tile__content align-items-center justify-content-center bg-white">
                                            <h2 className="landing-header landing-header--light landing-header--decoration-lime-green landing-header--decoration-small text-uppercase">
                                                Why&nbsp;<br /> <br />
                                            </h2>
                                            <img src="./assets/img/Copass_logo.png" style={{ width: "70%" }} alt="logo img" />
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            <figure className="why-kanda__envelop">
                                <div className="why-kanda__item tile">
                                    <div className="tile__inner">
                                        <div className="tile__content" data-bs-toggle="popover" data-bs-container="body" data-bs-trigger="hover" data-bs-content='We strongly believe that quality does not emerge in a one stage process; our following quality assurance mechanisms make us commit to 99.95% accuracy in all our deliverables.'>
                                            <div className="tile__plus"><span className="sr-only">+</span></div>
                                            <div className="tile__icon">
                                                <img src="./assets/img/Quality_Assurance_Process.png" width="84" height="84" alt="Fully automated" className="lazyloaded" data-ll-status="loaded" />
                                            </div>
                                            <div className="tile__body"><div className="tile__title">Fully automated</div></div>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            <div className="why-kanda__br"></div>
                            <figure className="why-kanda__envelop why-kanda__envelop--active">
                                <div className="why-kanda__item tile">
                                    <div className="tile__inner">
                                        <div className="tile__content" data-bs-toggle="popover" data-bs-container="body" data-bs-trigger="hover" data-bs-content='Streamlining operations, reducing costs, enhancing outreach, and improving loan quality for sustainable profitability'>
                                            <div className="tile__plus"><span className="sr-only">+</span></div>
                                            <div className="tile__icon">
                                                <img src="./assets/img/Operational_Ability.png" width="84" height="84" alt="Operational Ability" className="lazyloaded" data-ll-status="loaded" />
                                            </div>
                                            <div className="tile__body"><div className="tile__title">Profitability</div></div>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            <figure className="why-kanda__envelop why-kanda__envelop--active">
                                <div className="why-kanda__item tile">
                                    <div className="tile__inner">
                                        <div className="tile__content" data-bs-toggle="popover" data-bs-container="body" data-bs-trigger="hover" data-bs-content='A skilled team of technology experts and MFI and banking veterans ensures we stay aligned with industry trends and continuously upgrade our software to meet evolving needs.'>
                                            <div className="tile__plus"><span className="sr-only">+</span></div>
                                            <div className="tile__icon">
                                                <img src="./assets/img/Domain_Expertise.png" width="84" height="84" alt="Domain Expertise" className="lazyloaded" data-ll-status="loaded" />
                                            </div>
                                            <div className="tile__body"><div className="tile__title">Domain Expertise</div></div>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                        </div>
                    </div>
                </section>

                <div className="about-area default-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 info-content">
                                <h1>Top Professionals for Turning Your Business Idea into Custom Software Solutions</h1>
                                <p>
                                    We are CoPASS Technologies, a pioneering digital product and software development company with a team of  150+ expert software developers, QA engineers, project managers, and business experts dedicated to crafting bespoke software products, applications, and operational systems for SMEs & enterprises. With 4+ years of expertise and a track record of successfully delivering 1000+ web, app, and software projects, we have established efficient processes that ensure the right results, on time, and within budget.
                                </p>
                                <div className="slider__btn mt-5">
                                    <a href="@app_path/home/aboutus" className="btn">Explore More <img src="./assets/img/icons/right_arrow.svg" alt="right arrow" className="injectable" /></a>
                                </div>
                            </div>

                            <div className="col-md-6 right-content services">
                                <div className="content-box">
                                    <div className="row">
                                        <div className="center">
                                            <div className="col-lg-6 col-sm-6 equal-height">
                                                <div className="item">
                                                    <i className="flaticon-carpet-2"></i>
                                                    <h4>Modern Tools</h4>
                                                    <p>
                                                        Web development also happens to be one of the most rapidly changing industries
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-6 equal-height">
                                                <div className="item">
                                                    <i className="flaticon-cleaning-service"></i>
                                                    <h4>Expert Engineers</h4>
                                                    <p>
                                                        We have highly experienced & skilled professionals to build your product.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-6 equal-height">
                                                <div className="item">
                                                    <i className="flaticon-thumbs-up"></i>
                                                    <h4>Advanced technology</h4>
                                                    <p>
                                                        A web developer should write efficient, well-designed, and testable code that adheres to best practices.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-6 equal-height">
                                                <div className="item">
                                                    <i className="flaticon-best-price-2"></i>
                                                    <h4>Cost efficiencies</h4>
                                                    <p>
                                                        All our projects are delivered on time while maintaining a commitment to excellence in quality.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="row gutter-24">
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="counter__item-three">
                                    <div className="counter__content-three">
                                        <i className="renova-rocket"></i>
                                        <div>
                                            <h3 className="count"><span className="odometer" data-count="4">4+</span></h3>
                                            <p>Years in Business</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="counter__item-three">
                                    <div className="counter__content-three">
                                        <i className="renova-user-rating"></i>
                                        <div>
                                            <h3 className="count"><span className="odometer" data-count="500+">500+</span>+</h3>
                                            <p>Awesome Clients</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="counter__item-three">
                                    <div className="counter__content-three">
                                        <i className="renova-construction"></i>
                                        <div>
                                            <h3 className="count"><span className="odometer" data-count="100">100</span>+</h3>
                                            <p>Professionals</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="counter__item-three">
                                    <div className="counter__content-three">
                                        <i className="renova-group"></i>
                                        <div>
                                            <h3 className="count"><span className="odometer" data-count="15">15</span>+</h3>
                                            <p>Trusted Partners</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <section>
                    <div className="autoScroll_slider">
                        <div className="slide-track">
                            <div className="slide">
                                <img src="./assets/img/Partners/1_1.png" height="100" width="250" alt="img" />
                            </div>
                            <div className="slide">
                                <img src="./assets/img/Partners/2_1.png" height="100" width="250" alt="img" />
                            </div>
                            <div className="slide">
                                <img src="./assets/img/Partners/3_1.png" height="100" width="250" alt="img" />
                            </div>
                            <div className="slide">
                                <img src="./assets/img/Partners/4_1.png" height="100" width="250" alt="img" />
                            </div>
                            <div className="slide">
                                <img src="./assets/img/Partners/5_1.png" height="100" width="250" alt="img" />
                            </div>
                            <div className="slide">
                                <img src="./assets/img/Partners/6_1.png" height="100" width="250" alt="img" />
                            </div>
                            <div className="slide">
                                <img src="./assets/img/Partners/7_1.png" height="100" width="250" alt="img" />
                            </div>
                            <div className="slide">
                                <img src="./assets/img/Partners/1_1.png" height="100" width="250" alt="img" />
                            </div>
                            <div className="slide">
                                <img src="./assets/img/Partners/2_1.png" height="100" width="250" alt="img" />
                            </div>
                            <div className="slide">
                                <img src="./assets/img/Partners/3_1.png" height="100" width="250" alt="img" />
                            </div>
                            <div className="slide">
                                <img src="./assets/img/Partners/4_1.png" height="100" width="250" alt="img" />
                            </div>
                            <div className="slide">
                                <img src="./assets/img/Partners/5_1.png" height="100" width="250" alt="img" />
                            </div>
                            <div className="slide">
                                <img src="./assets/img/Partners/6_1.png" height="100" width="250" alt="img" />
                            </div>
                            <div className="slide">
                                <img src="./assets/img/Partners/7_1.png" height="100" width="250" alt="img" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="home-service">
                    <div className="container">
                        <div className="row home-serbg" style={{ alignItems: "center" }}>
                            <div className="col-lg-6 col-md-6 mb-3">
                                <div className="animation-service">
                                    <span className="animation_s_1"></span>
                                    <span className="animation_s_2"></span>
                                    <span className="animation_s_3"></span>
                                </div>
                                <div className="service-head">
                                    <h2>Our Products</h2>
                                    <p>At CoPASS, we take pride in offering a curated selection of high-quality products designed to enrich your lifestyle. Each item in our collection reflects our commitment to craftsmanship, innovation, and customer satisfaction.</p>
                                    <p>From elegant designs to cutting-edge functionality, our products are crafted to meet the diverse needs of modern living. Whether you're looking for something stylish, sustainable, or smart—our range has something for everyone.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 side-service">
                                <div className="row">
                                    <div className="col-6 mb-3">
                                        <Link to="/LOS">
                                            <div className="serv-box">
                                                <div className="serv-box_h1">
                                                    <img className="image" src="./assets/img/stream_svg.svg" alt="LOS Stream Image" title="" />
                                                    <p>Personalized path to smooth Loan Onboarding</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="col-6 mb-3">
                                        <Link to="/Cops">
                                            <div className="serv-box">
                                                <div className="serv-box_h2">
                                                    <img className="image" src="./assets/img/Cops_svg.svg" alt="Cops Image" title="" />
                                                    <p>Customer Onboarding Process Simplified</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <Link to="/EzyB">
                                            <div className="serv-box">
                                                <div className="serv-box_h3">
                                                    <img className="image" src="./assets/img/Ezyb_svg.svg" alt="Ezyb Image" title="" />
                                                    <p>Manage all type of Loans, Deposits & Shares Real Time Transactions</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <Link to="/AppCo">
                                            <div className="serv-box">
                                                <div className="serv-box_h4">
                                                    <img className="image" src="./assets/img/Appco_svg.svg" alt="appco Image" title="" />
                                                    <p>Transforming Collection Management On the GO</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <Link to="/BanqOn">
                                            <div className="serv-box">
                                                <div className="serv-box_h5">
                                                    <img className="image" src="./assets/img/BanqOn_svg.svg" alt="Banqon Image" title="" />
                                                    <p>Financial Transactions on Your Fingure Tip</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="business-today">
                    <div className="container">
                        <div className="business-today-sec">
                            <div className="row align-items-center">
                                <div className="col-md-7 col-lg-7 col-xs-12 col-sm-12">
                                    <h2>Transform Your Business Today</h2>
                                    <p>Fill a form for a demo.</p>
                                    <div>
                                        <Link to="/" className="theme-btn business-btn popbtn demo-trigger">Get Started</Link>
                                    </div>
                                </div>
                                <div className="col-md-5 col-lg-5 col-xs-12 col-sm-12">
                                    <img width="100%" src="./assets/img/your-business-today.png" alt="business img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>



        </>


    )
}

