import React from 'react'

export default function Cops() {
    return (
        <>
            <div className="breadcrumb__area breadcrumb__bg" data-background="./assets/img/COPS_bg_img.png" style={{backgroundImage: "url(./assets/img/COPS_bg_img.png)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__content">
                                <h2 className="title">COPS</h2>
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
                                <img src="./assets/img/COPS_img.png" />
                            </div>
                            <div className="main_div">
                                <div className="section_content_div mb_145">
                                    <img className="logo_css" src="./assets/img/Cops_logo.png" />
                                    <p>COPS is an innovative loan originating system that aims to simplify customer on boarding process by making it accessible for user reducing TAT and increasing work efficiency.</p>

                                </div>

                                <div className="section_content_div width_100">

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div>

                                                <div className="product-desc-wrap" style={{marginTop: "0px", borderRadius: "10px"}}>
                                                    <ul className="nav nav-tabs" id="myTab2" role="tablist">
                                                        <li className="nav-item" role="presentation">
                                                            <button className="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description-tab-pane" type="button" role="tab" aria-controls="description-tab-pane" aria-selected="true">Process Flow</button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button className="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews-tab-pane" type="button" role="tab" aria-controls="reviews-tab-pane" aria-selected="false">Features</button>
                                                        </li>
                                                    </ul>
                                                    <div className="tab-content" id="myTabContent2">
                                                        <div className="tab-pane fade show active" id="description-tab-pane" role="tabpanel" aria-labelledby="description-tab" tabindex="0" style={{padding: "30px"}}>
                                                            <img src="./assets/img/COPS_process.png" />
                                                        </div>
                                                        <div className="tab-pane fade" id="reviews-tab-pane" role="tabpanel" aria-labelledby="reviews-tab" tabindex="0" style={{padding: "30px"}}>
                                                            <img src="./assets/img/cops_features.png" />

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="benefit_main_div">

                                                <h5>Key Benefits</h5>

                                                <div className="benefit_grid">
                                                    <div className="benefit_div">
                                                        <div className="text-center">
                                                            <div className="rounded_div">
                                                                <img src="./assets/img/user_friendly_process.png" />
                                                            </div>
                                                            <h6>Easy and user-friendly process</h6>
                                                        </div>

                                                    </div>
                                                    <div className="benefit_div">
                                                        <div className="text-center">
                                                            <div className="rounded_div">
                                                                <img src="./assets/img/digital_process.png" />
                                                            </div>
                                                            <h6>Digital and completely paperless process</h6>
                                                        </div>
                                                    </div>
                                                    <div className="benefit_div">
                                                        <div className="text-center">
                                                            <div className="rounded_div">
                                                                <img src="./assets/img/increased_work_efficiency.png" />
                                                            </div>
                                                            <h6>Reduce TAT and increased work efficiency</h6>
                                                        </div>
                                                    </div>
                                                    <div className="benefit_div">
                                                        <div className="text-center">
                                                            <div className="rounded_div">
                                                                <img src="./assets/img/easily_accessible_data.png" />
                                                            </div>
                                                            <h6>Secure and easily accessible data on cloud</h6>
                                                        </div>

                                                    </div>
                                                    <div className="benefit_div">
                                                        <div className="text-center">
                                                            <div className="rounded_div">
                                                                <img src="./assets/img/API_Integration.png" />
                                                            </div>
                                                            <h6>Easy API Integration</h6>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
