import React from 'react'

export default function Cobiz() {
    return (
        <>
            <div className="breadcrumb__area breadcrumb__bg" data-background="./assets/img/CoreBankingServices_bg3.jpg" style={{backgroundImage: "url(./assets/img/CoreBankingServices_bg3.jpg)"}}>
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
                                <img src="./assets/img/CoBIS_img.png" />
                            </div>
                            <div className="main_div">
                                <div className="section_content_div mb_100">
                                    <img src="./assets/img/cobis.png" style={{height: "50px", marginBottom: "30px"}} />
                                    <h5>Providing Credit Bureau Services to Co-operative Societies</h5>

                                    <ol>
                                        <li>Resports from multiple vendors</li>
                                        <li>Seamless Integration with any software</li>
                                        <li>Maintains our own credit records for co-operative credit societies</li>
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
