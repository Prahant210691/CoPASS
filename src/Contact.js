import React from 'react'

export default function Contact() {
    return (
        <>
            <div className="breadcrumb__area breadcrumb__bg" data-background="./assets/img/contact_bg.jpg" style={{backgroundImage: "url(./assets/img/contact_bg.jpg)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__content">
                                <h2 className="title">Contact Us</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section-py-120 contactUs_page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 order-md-1">
                            <div className="project-in-mind mb-30">
                                <div className="title_div">
                                    <h2 className="section-heading">Get In Touch <br/>With Us!</h2>
                                </div>

                                <p>Upgrade your IT team. Contact one of the best IT staffing companies.</p>

                                <div>
                                    <div className="contact_content">
                                        <figure>
                                            <img src="./assets/img/location.png" height="51" width="51" />
                                        </figure>
                                        <div className="contact_data">
                                            <h4>Office Address</h4>
                                            <p>B 201-203, Sagar Tech Plaza ,Sakinaka Junction, Andheri Kurla Road, Andheri - 400072</p>
                                        </div>
                                    </div>

                                    <div className="contact_content">
                                        <figure>
                                            <img src="./assets/img/contact-mail.png" height="51" width="51" />
                                        </figure>
                                        <div className="contact_data">
                                            <h4>Contact Us</h4>
                                            <p>+91 7710048275, +91 8879701070, +91 8045549495 <br/>sales@copass.in</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-7 order-md-2 mb-30">
                            <section className="contact__area">
                                <div className="container-fluid">
                                    <div className="row gutter-24">

                                        <div className="col-lg-12">
                                            <div className="contact-map">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d280.2150079931044!2d72.886549818229!3d19.102885336198604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c93bcafefb9b%3A0xdbcdda6bb2ace253!2sCoPASS%20Technology%20%26%20Services%20Private%20Limited!5e0!3m2!1sen!2sin!4v1718774174677!5m2!1sen!2sin" width="600" height="450" style={{border: "10px solid #fff", boxShadow: "0 1px 6px 0 rgba(32,33,36,0.28)"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
