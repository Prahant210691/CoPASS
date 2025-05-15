import React from 'react'

export default function Banqon() {
    return (
        <>
            <div className="breadcrumb__area breadcrumb__bg" data-background="./assets/img/BanqOn_bg_img.png" style={{backgroundImage: "url(../assets/img/BanqOn_bg_img.png)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__content">
                                <h2 className="title">BanqOn</h2>
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
                                <img src="./assets/img/BanqOn_img.png" alt='BanqOn Image' />
                            </div>
                            <div className="main_div">
                                <div className="section_content_div">
                                    <img src="./assets/img/banqOn_Logo.png" style={{height: "50px", marginBottom: "30px"}} />
                                    <h5>Financial Transactions on Your Fingure Tip</h5>

                                    <ol>
                                        <li>Easy Fund Transfer (NEFT/IMPS/RTGS/UPI)</li>
                                        <li>Desposit and Loan Management</li>
                                        <li>View & Download Account Statement</li>
                                        <li>Available on Play Store & App Store</li>
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
