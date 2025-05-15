import React from 'react'

export default function Clients() {
    return (
        <>
            <div className="breadcrumb__area breadcrumb__bg" data-background="./assets/img/Client_bg.jpg" style={{ backgroundImage: "url(./assets/img/Client_bg.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__content">
                                <h2 className="title">Our Client's</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="support__area section-pt-120 section-pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-0 order-lg-2">
                            <div className="support__img">
                                <img src="./assets/img/support_img01.jpg" alt="img" className="wow img-custom-anim-right animated" data-wow-duration="1.5s" data-wow-delay="0.2s"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="support__content">
                                <div className="section__title section__title-three mb-25">
                                    <span className="sub-title">Our team support</span>
                                    <h2 className="title">Our team is here to always support your team</h2>
                                </div>
                                <p>Each team member has been invaluable in their collaboration, support, and commitment. I express my deepest gratitude to everyone for going above and beyond. The team's professionalism, positivity, and determination have not gone unnoticed. I sincerely thank each member for making our goals a reality. The team has set a new standard of excellence with their passion, skill, and dedication. It is an honor to work alongside such talented individuals.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta__area fix">
                <div className="cta__bg" data-background="./assets/img/support_img02.jpg"></div>
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-8">
                            <div className="cta__content">
                                <h2 className="title">Ready to work with <br/> our team?</h2>
                                <div className="cta__btn">
                                    <a href="@app_path/contact/index" className="btn btn-two">Let’s build together <img src="./assets/img/icons/right_arrow.svg" alt="" className="injectable" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cta__content-right" data-aos="fade-up" data-aos-delay="600">
                                <h4 className="title">Leading Developer Of Commercial & Residential Projects</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cta__shape">
                    <img src="./assets/img/images/cta_shape.png" alt="shape" data-aos="fade-down-left" data-aos-delay="400" />
                </div>
            </section>
        </>
    )
}
