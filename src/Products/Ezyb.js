import React from 'react'

export default function Ezyb() {
    return (
        <>
            <div className="breadcrumb__area breadcrumb__bg" data-background="./assets/img/EZYB_bg_img.png" style={{backgroundImage: "url(./assets/img/EZYB_bg_img.png)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__content">
                                <h2 className="title">EzyB</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="Services_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12" style={{position: "relative"}}>
                            <div className="services_img_div div1">
                                <img src="./assets/img/EzyB_img.png" />
                            </div>
                            <div className="main_div div2">
                                <div className="section_content_div">
                                    <img src="./assets/img/ezyb_logo.png" style={{height: "50px", marginBottom: "30px"}} />
                                    <h5>Streamline banking with our core banking solution</h5>

                                    <ol>
                                        <li>Managing of all types of Loan, Deposit & Share account</li>
                                        <li>Real Time Transactions</li>
                                        <li>SMS Banking Service</li>
                                        <li>Centralised Branch Control System</li>
                                        <li>Branch / Consolidated Reporting</li>
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
