import React from 'react'
import { Link } from 'react-router-dom';

export default function Calculators() {
    return (
        <div>
            <div className="breadcrumb__area breadcrumb__bg" data-background="./assets/img/calculator_bg.jpg" style={{ backgroundImage: "url(./assets/img/calculator_bg.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__content">
                                <h2 className="title">Financial Calculators</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section-py-120">

                <div className="container">
                    {/* <div className="row">
                        <div className="col-md-12 text-center title_width">
                            <h2>Calculators</h2>
                            <p>Calculate Equated Monthly Instalments(EMI) for a wide range of financial products through our free interactive calculators.</p>
                            <p>You can calculate EMI for Home Loan, Personal Loan, FD, RD and more! Our calculators are designed with YOU in mind so they are really simple to use and help you to understand the EMI breakup easily.</p>
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="calculator_grid_view">
                            {/* /FD_Calculator */}
                                <Link to="/FD_Calculator">
                                    <div className="box_css">
                                        <div className="content_div">
                                            <h3>Fixed Deposit (FD)</h3>
                                            <p>Calculate your FD returns without any hassle</p>
                                        </div>
                                        <div className="img_div">
                                            <img className="arrow_svg" src="./assets/img/Calculator_images/arrow_svg.svg" alt="Arrow Image" />
                                            <img className="loan_img" src="./assets/img/Calculator_images/FD.svg" alt="FD Image" />
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/RD_Calculator">
                                    <div className="box_css">
                                        <div className="content_div">
                                            <h3>Recurring Deposit (RD)</h3>
                                            <p>Calculate your RD returns within seconds</p>
                                        </div>
                                        <div className="img_div">
                                            <img className="arrow_svg" src="./assets/img/Calculator_images/arrow_svg.svg" alt="Arrow Image" />
                                            <img className="loan_img" src="./assets/img/Calculator_images/RD.svg" alt="RD Image" />
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/GST_Calculator">
                                    <div className="box_css">
                                        <div className="content_div">
                                            <h3>GST</h3>
                                            <p>Calculate your payable GST amount</p>
                                        </div>
                                        <div className="img_div">
                                            <img className="arrow_svg" src="./assets/img/Calculator_images/arrow_svg.svg" alt="Arrow Image" />
                                            <img className="loan_img" src="./assets/img/Calculator_images/GST.svg" alt="GST Image" />
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/Tax_Calculator">
                                    <div className="box_css">
                                        <div className="content_div">
                                            <h3>Tax</h3>
                                            <p>Calculate your payable Tax amount</p>
                                        </div>
                                        <div className="img_div">
                                            <img className="arrow_svg" src="./assets/img/Calculator_images/arrow_svg.svg" alt="Arrow Image" />
                                            <img className="loan_img" src="./assets/img/Calculator_images/TAX.svg" alt="Tax Image" />
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/HomeLoan_Calculator">
                                    <div className="box_css">
                                        <div className="content_div">
                                            <h3>Home Loan EMI</h3>
                                            <p>Calculate your Home Loan EMIs in seconds</p>
                                        </div>
                                        <div className="img_div">
                                            <img className="arrow_svg" src="./assets/img/Calculator_images/arrow_svg.svg" alt="Arrow Image" />
                                            <img className="loan_img" src="./assets/img/Calculator_images/HL.svg" alt="Home Loan Image" />
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/PersonalLoan_Calculator">
                                    <div className="box_css">
                                        <div className="content_div">
                                            <h3>Personal Loan EMI</h3>
                                            <p>Calculate your Personal Loan EMIs in seconds</p>
                                        </div>
                                        <div className="img_div">
                                            <img className="arrow_svg" src="./assets/img/Calculator_images/arrow_svg.svg" alt="Arrow Image" />
                                            <img className="loan_img" src="./assets/img/Calculator_images/PL.svg" alt="Personal Loan Image" />
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
