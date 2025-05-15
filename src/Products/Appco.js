import React from 'react'

export default function Appco() {
    return (
        <>
            <div className="breadcrumb__area breadcrumb__bg" data-background="./assets/img/appco_bg_img.png" style={{backgroundImage: "url(./assets/img/appco_bg_img.png)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__content">
                                <h2 className="title">AppCo</h2>
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
                                <img src="./assets/img/AppCo_img.png" alt='AppCo Image' />
                            </div>
                            <div className="main_div">
                                <div className="section_content_div mb_100">
                                    <img className="logo_css" src="./assets/img/appco_logo.png" />
                                    <p>AppCo is a user-friendly software designed to provide Easy & Fast collection process with Analysing features to collection agents and staff. With our app, agents can easily track and manage collections, ensuring timely recovery of outstanding debts. Stay organized, automate reminders, and improve recovery rates.</p>
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
                                                        <div className="tab-pane fade show active" id="description-tab-pane" role="tabpanel" aria-labelledby="description-tab" tabindex="0">
                                                            <ol>
                                                                <li>Regular / Overdue Collection Assignment</li>
                                                                <li>Field Agent</li>
                                                                <li>Money Collection</li>
                                                                <li>Schedule</li>
                                                                <li>Deposit Money</li>
                                                            </ol>
                                                        </div>
                                                        <div className="tab-pane fade" id="reviews-tab-pane" role="tabpanel" aria-labelledby="reviews-tab" tabindex="0">
                                                            <ol>
                                                                <li>Elimination of paper work through Digitization</li>
                                                                <li>Scalability</li>
                                                                <li>Efficiency and time saving</li>
                                                                <li>Enhance Productivity</li>
                                                                <li>Improved decision making</li>
                                                            </ol>
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
                                                                <img src="./assets/img/Enhance_Productivity_1.png" />
                                                            </div>
                                                            <h6>Enhance Productivity </h6>
                                                        </div>

                                                    </div>
                                                    <div className="benefit_div">
                                                        <div className="text-center">
                                                            <div className="rounded_div">
                                                                <img src="./assets/img/Real_Time_Collection_Update.png" />
                                                            </div>
                                                            <h6>Real Time Collection Update</h6>
                                                        </div>
                                                    </div>
                                                    <div className="benefit_div">
                                                        <div className="text-center">
                                                            <div className="rounded_div">
                                                                <img src="./assets/img/Location_Tracking.png" />
                                                            </div>
                                                            <h6>Location Tracking</h6>
                                                        </div>
                                                    </div>
                                                    <div className="benefit_div">
                                                        <div className="text-center">
                                                            <div className="rounded_div">
                                                                <img src="./assets/img/Seamless_Integration.png" />
                                                            </div>
                                                            <h6>Seamless Integration</h6>
                                                        </div>

                                                    </div>
                                                    <div className="benefit_div">
                                                        <div className="text-center">
                                                            <div className="rounded_div">
                                                                <img src="./assets/img/Optimized_Resource_Allocation.png" />
                                                            </div>
                                                            <h6>Optimized Resource Allocation</h6>
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
