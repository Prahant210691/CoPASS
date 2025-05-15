import React from 'react'

export default function Recoup() {
    return (
        <>
            <div className="breadcrumb__area breadcrumb__bg" data-background="./assets/img/RecoveryManagement_bg1.jpg" style={{backgroundImage: "url(./assets/img/RecoveryManagement_bg1.jpg)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__content">
                                <h2 className="title">ReCoup</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="Services_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12" style={{position: "relative"}}>
                            <div className="services_img_div">
                                <img src="./assets/img/ReCoup_img.png" />
                            </div>
                            <div className="main_div">
                                <div className="section_content_div">
                                    <img src="./assets/img/Recoup_logo.png" style={{height: "50px", marginBottom: "30px"}} />
                                    <h5>Your Recovery Management Experts! We are committed to helping you recoup your losses and thrive.</h5>

                                    <ol>
                                        <li>Automated call scheduling and follow-ups</li>
                                        <li>Customer interaction tracking with call recording</li>
                                        <li>Streamlined case management</li>
                                        <li>Templates for forms and notices for printing</li>
                                    </ol>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
