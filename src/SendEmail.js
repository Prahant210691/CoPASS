import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import $ from 'jquery';

const SendEmail = () => {
    const [toHR, setToHR] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        message: ''
    });

    const [loading, setLoading] = useState(false); // <-- Loader State

    const sendEmail = (e) => {
        e.preventDefault();

        // VALIDATIONS ---------
        if (!toHR.fname.trim()) {
            alert('Please enter your First Name!');
            return;
        }
        if (!toHR.lname.trim()) {
            alert('Please enter your Last Name!');
            return;
        }
        if (!toHR.email.trim() || !/^\S+@\S+\.\S+$/.test(toHR.email)) {
            alert('Please enter a valid Email Address!');
            return;
        }
        if (!toHR.phone.trim() || !/^\d{10}$/.test(toHR.phone)) {
            alert('Please enter a valid 10-digit Phone Number!');
            return;
        }
        if (!toHR.message.trim()) {
            alert('Please enter your Message!');
            return;
        }

        setLoading(true); // Show loader

        emailjs.send(
            'service_4xfdkwg',
            'template_w0cforh',
            {
                firstName: toHR.fname,
                lastName: toHR.lname,
                emailId: toHR.email,
                phoneNumber: toHR.phone,
                txtMessage: toHR.message
            },
            'lMvTQgQoRKHVBM6yu'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Request sent to HR successfully ✅');
                $(".offCanvas__info1, .offCanvas__overly").removeClass("active");
                setToHR({
                    fname: '',
                    lname: '',
                    email: '',
                    phone: '',
                    message: ''
                });
                
            })
            .catch((err) => {
                console.error('FAILED...', err);
                alert('Failed to send request ❌');
            })
            .finally(() => {
                setLoading(false); // Hide loader after success/fail
            });
    };

    return (
        <>
            <form onSubmit={sendEmail}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-grp">
                            <label>First Name</label>
                            <input type="text" className="form-control" value={toHR.fname} onChange={(e) => setToHR({ ...toHR, fname: e.target.value })} placeholder="First Name" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-grp">
                            <label>Last Name</label>
                            <input type="text" className="form-control" value={toHR.lname} onChange={(e) => setToHR({ ...toHR, lname: e.target.value })} placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-grp">
                            <label>Email</label>
                            <input type="email" className="form-control" value={toHR.email} onChange={(e) => setToHR({ ...toHR, email: e.target.value })} placeholder="Email Address" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-grp">
                            <label>Phone Number</label>
                            <input type="text" className="form-control" maxLength={10} value={toHR.phone} onChange={(e) => setToHR({ ...toHR, phone: e.target.value })} placeholder="Phone Number" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group mb_15">
                            <label>Leave Your Message</label>
                            <textarea className="form-control" rows="4" value={toHR.message} onChange={(e) => setToHR({ ...toHR, message: e.target.value })} placeholder="Leave Your Message"></textarea>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-grp">
                            <button type="submit" id="submitBtn" className="btn btn-two d-block" disabled={loading}>
                                {loading ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                        Sending...
                                    </>
                                ) : (
                                    "Request Sent"
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default SendEmail;
