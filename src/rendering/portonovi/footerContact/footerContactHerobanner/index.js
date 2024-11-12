import React from 'react'
import './contact.scss'
import footerConatact from '../../../../assets/image/footerContactHerobannner.webp';
import grater from '../../../../assets/icon/icons8-greater-than-10.png';
export default function FooterContactHerobanner() {
    return (
        <div>
            <div className='footerConatactHerobannerMain'>
                <div className='footerConatactHerobannerImg'>
                    <img src={footerConatact} alt='image' />
                </div>
                <div className='footerConatactHerobannerText'>
                    <div className='footerConatactBannerHead'>
                        <h1>Contact Our Resort in Montenegro</h1>
                    </div>
                    <div className='footerConatactBannerPara'>
                        <p>For enquiries or bookings, contact our team at One&Only Portonovi</p>
                    </div>
                </div>
            </div>

            <div className='container5'>
                <div className='footerContactNavSec'>
                    <a>One&Only Portonovi</a>
                    <a><img src={grater} alt='grater' /></a>
                    <a className='contactUs'>Contact Us</a>
                </div>
                <div className='contactDetails'>
                    <div className='contactTitle'>
                        <div className='contactHead'>
                            <h2>Contact us</h2>
                        </div>
                    </div>
                    <div className='telephoneDetails'>
                        <div className='telephoneTitle'>
                            <strong>Tel:</strong>
                        </div>
                        <div className='telephoneNumber'>
                            <span>Enquiries: <a href='#'>+382 31 691 001</a> </span>
                            <span>Room Reservations: <a href='#'>+382 31 691 000</a> </span>
                            <span>Restaurant Reservations: <a href='#'>+382 31 691 007</a> </span>
                        </div>
                    </div>
                    <div className='emailDetails'>
                        <div className='emailTitle'>
                            <strong>Email:</strong>
                        </div>
                        <div className='emailAddress'>
                            <span>Enquiries: <a href='#'>guest.experience@oneandonlyportonovi.com</a> </span>
                            <span>Room Reservations: <a href='#'>reservations@oneandonlyportonovi.com</a> </span>
                            <span>Restaurant Reservations: <a href='#'>restaurants@oneandonlyportonovi.com</a> </span>
                        </div>
                        <div className='formIntroPara'>
                            <p>Alternatively, please complete the form below and one of our team members will respond to your request shortly.</p>
                        </div>
                    </div>
                </div>



                <div className='contactDetail'>
                    <div className='ContactDetailForm'>
                        <div className='ContactDetailLeft'>
                            <div className='contactDetailsMain'>
                                <div className='contactFormInputLabel'>
                                    <label>First Name*</label>
                                </div>
                                <div className='contactInput'>
                                    <select>
                                        <option>MR.</option>
                                        <option>MRS.</option>
                                        <option>MS.</option>
                                        <option>MISS.</option>
                                        <option>DR.</option>
                                        <option>EMIR.</option>
                                        <option>HRH PRIENCE</option>
                                        <option>SHEIKH</option>
                                    </select>
                                </div>
                            </div>
                            <div className='contactDetailsMain'>
                                <div className='contactFormInputLabel'>
                                    <label>first Name*</label>
                                </div>
                                <div className='contactInput'>
                                    <input type='text' />
                                </div>
                            </div>
                            <div className='contactDetailsMain'>
                                <div className='contactFormInputLabel'>
                                    <label>last name*</label>
                                </div>
                                <div className='contactInput'>
                                    <input type='text' />
                                </div>
                            </div>
                            <div className='contactDetailsMain'>
                                <div className='contactFormInputLabel'>
                                    <label>phone*</label>
                                </div>
                                <div className='contactInput'>
                                    <input type='number' />
                                </div>
                            </div>
                        </div>
                        <div className='eventFormRight'>
                            <div className='contactDetailsMain'>
                                <div className='contactFormInputLabel'>
                                    <label>Inquiry Type</label>
                                </div>
                                <div className='contactInput'>
                                    <select>
                                        <option></option>
                                        <option>reservation</option>
                                        <option>general inquiry</option>
                                        <option>meetings and events</option>
                                        <option>guests feedback</option>
                                        <option>careers</option>
                                    </select>
                                </div>
                            </div>
                            <div className='contactDetailsMain'>
                                <div className='contactFormInputLabel'>
                                    <label>email</label>
                                </div>
                                <div className='contactInput'>
                                    <input type='email' />
                                </div>
                            </div>
                            <div className='contactDetailsMain'>
                                <div className='contactFormInputLabel'>
                                    <label>Message</label>
                                </div>
                                <div className='contactInput'>
                                    <textarea rows="13" cols="50"> </textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='securitynotice'>
                        <div className='securityChechbox'>
                            <label>
                                <input type='checkbox' />
                                Privacy Policy*
                            </label>
                        </div>
                        <div className='securityPara'>
                            <p>I have read and agree to Kerzner’s Privacy Policy, including using Personal Information from the data I provide to Kerzner and/or collected at Kerzner resorts, in order for Kerzner to inform and/or provide me with Kerzner’s products and services and allow Kerzner to proceed with related marketing activities.</p>
                        </div>
                        <div className='formSubmitBtn'>
                            <button>submit</button>
                        </div>
                    </div>


                </div>








            </div>

        </div>
    )
}
