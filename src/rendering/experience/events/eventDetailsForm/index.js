import React from 'react'
import './form.scss'
export default function EventForm() {
    return (
        <div>
            <div className='eventDetailsFormMain'>
                <div className='eventDetailsFormHeadMain'>
                    <div className='eventFormHead'>
                        <h2>Request for Proposal</h2>
                    </div>
                    <div className='eventFormDetails'>
                        <p>Need help planning an event? Contact us<br />
                            USA: +1 (866) 552 0001 | Dubai: +971 44 26 1100 | International: +1 (954) 809 2726 Email:<br /><a href='#'> reservations@oneandonlyresorts.com</a>
                        </p>
                        <em>All fields marked with * are mandatory</em>
                    </div>
                </div>
                <div className='eventForm'>
                    <div className='eventFormInput'>
                        <div className='eventFormLeft'>
                            <div className='eventInputMain'>
                                <div className='eventFormInputLabel'>
                                    <label>First Name*</label>
                                </div>
                                <div className='eventInput'>
                                    <input type='text' />
                                </div>
                            </div>
                            <div className='eventInputMain'>
                                <div className='eventFormInputLabel'>
                                    <label>Last Name*</label>
                                </div>
                                <div className='eventInput'>
                                    <input type='text' />
                                </div>
                            </div>
                            <div className='eventInputMain'>
                                <div className='eventFormInputLabel'>
                                    <label>Phone Number*</label>
                                </div>
                                <div className='eventInput'>
                                    <input type='number' />
                                </div>
                            </div>
                            <div className='eventInputMain'>
                                <div className='eventFormInputLabel'>
                                    <label>Email Address*</label>
                                </div>
                                <div className='eventInput'>
                                    <input type='email' />
                                </div>
                            </div>
                            <div className='eventInputMain'>
                                <div className='eventFormInputLabel'>
                                    <label>Have you stayed with us previously?</label>
                                </div>
                                <div className='formRadioBtn'>
                                    <input type='radio' />
                                    <label>YES</label>
                                </div>
                                <div className='formRadioBtn'>
                                    <input type='radio' />
                                    <label>NO</label>
                                </div>
                            </div>
                        </div>
                        <div className='eventFormRight'>
                            <div className='eventInputMain'>
                                <div className='eventFormInputLabel'>
                                    <label>Country*</label>
                                </div>
                                <div className='eventInput'>
                                    <select>
                                        <option>India</option>
                                        <option>australia</option>
                                        <option>africa</option>
                                        <option>new zealand</option>
                                        <option>afganistan</option>
                                        <option>nepal</option>
                                        <option>oman</option>
                                        <option>england</option>
                                        <option>pakistan</option>
                                        <option>qatar</option>
                                        <option>netherland</option>
                                        <option>canada</option>
                                        <option>america</option>
                                    </select>
                                </div>
                            </div>
                            <div className='eventInputMain'>
                                <div className='eventFormInputLabel'>
                                    <label>First Name*</label>
                                </div>
                                <div className='eventInput'>
                                    <input type='text' />
                                </div>
                            </div>
                            <div className='eventInputMain'>
                                <div className='eventFormInputLabel'>
                                    <label>First Name*</label>
                                </div>
                                <div className='eventInput'>
                                    <input type='text' />
                                </div>
                            </div>
                            <div className='eventInputMain'>
                                <div className='eventFormInputLabel'>
                                    <label>First Name*</label>
                                </div>
                                <div className='eventInput'>
                                    <input type='text' />
                                </div>
                            </div>
                            <div className='eventInputMain'>
                                <div className='eventFormInputLabel'>
                                    <label>First Name*</label>
                                </div>
                                <div className='eventInput'>
                                    <input type='text' />
                                </div>
                            </div>
                            <div className='eventInputMain'>
                                <div className='eventFormInputLabel'>
                                    <label>First Name*</label>
                                </div>
                                <div className='eventInput'>
                                    <input type='text' />
                                </div>
                            </div>
                        </div>
                    </div>






                    <div className='eventInformation'>
                        <div className='eventInformationHead'>
                            <h4>EVENT INFORMATION</h4>
                        </div>
                        <div className='eventInformationInput'>
                            <div className='eventInformationLeft'>
                                <div className='eventInputMain'>
                                    <div className='eventFormInputLabel'>
                                        <label>Event Name*</label>
                                    </div>
                                    <div className='eventInput'>
                                        <input type='text' />
                                    </div>
                                </div>
                                <div className='eventInputMain'>
                                    <div className='eventFormInputLabel'>
                                        <label>Event / Celebration Type*</label>
                                    </div>
                                    <div className='eventInput'>
                                        <select>
                                            <option></option>
                                            <option>India</option>
                                            <option>australia</option>
                                            <option>africa</option>
                                            <option>new zealand</option>
                                            <option>afganistan</option>
                                            <option>nepal</option>
                                            <option>oman</option>
                                            <option>england</option>
                                            <option>pakistan</option>
                                            <option>qatar</option>
                                            <option>netherland</option>
                                            <option>canada</option>
                                            <option>america</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='eventResortListMain'>
                                    <div className='eventInterestedHead'>
                                        <label>SELECT ALL RESORTS YOU ARE INTERESTED IN:</label>
                                    </div>
                                    <div className='eventResortList'>
                                        <label>
                                            <input type='checkbox' value='ONEONLY PALMILLA' />
                                            ONEONLY PALMILLA
                                        </label>
                                        <label>
                                            <input type='checkbox' value='ONEONLY PALMILLA' />
                                            ONEONLY CAPE TOWN
                                        </label>
                                        <label>
                                            <input type='checkbox' value='ONEONLY PALMILLA' />
                                            ONEONLY REETHI RAH
                                        </label>
                                        <label>
                                            <input type='checkbox' value='ONEONLY PALMILLA' />
                                            ONEONLY LE SAINT GERAN
                                        </label>
                                        <label>
                                            <input type='checkbox' value='ONEONLY PALMILLA' />
                                            ONEONLY ROYAL MIRAGE
                                        </label>
                                        <label>
                                            <input type='checkbox' value='ONEONLY PALMILLA' />
                                            ONEONLY THE PALM
                                        </label>
                                        <label>
                                            <input type='checkbox' value='ONEONLY PALMILLA' />
                                            ONEONLY WOLGAN VALLEY
                                        </label>
                                        <label>
                                            <input type='checkbox' value='ONEONLY PALMILLA' />
                                            ONEONLY NYUNGWE HOUSE
                                        </label>
                                        <label>
                                            <input type='checkbox' value='ONEONLY PALMILLA' />
                                            ONEONLY GORILLAS NEST
                                        </label>
                                        <label>
                                            <input type='checkbox' value='ONEONLY PALMILLA' />
                                            ONEONLY MANDARINA
                                        </label>
                                        <label>
                                            <input type='checkbox' value='ONEONLY PALMILLA' />
                                            ONEONLY DESARU COAST
                                        </label>
                                        <label>
                                            <input type='checkbox' value='ONEONLY PALMILLA' />
                                            ONEONLY GORILLAS NEST
                                        </label>

                                    </div>
                                </div>
                            </div>
                            <div className='eventInformationRight'>
                                <div className='eventInputMain'>
                                    <div className='eventFormInputLabel'>
                                        <label>
                                            From*</label>
                                    </div>
                                    <div className='eventInput'>
                                        <input type='date' />
                                    </div>
                                </div>
                                <div className='eventInputMain'>
                                    <div className='eventFormInputLabel'>
                                        <label>to*</label>
                                    </div>
                                    <div className='eventInput'>
                                        <input type='date' />
                                    </div>
                                </div>
                                <div className='eventInputMain'>
                                    <div className='eventFormInputLabel'>
                                        <label>Number of Guests*</label>
                                    </div>
                                    <div className='eventInput'>
                                        <input type='number' />
                                    </div>
                                </div>
                                <div className='eventeatReq'>
                                    <div className='eventInterestedHead'>
                                        <label>Select the following event requiirements that apply</label>
                                    </div>
                                    <div className='eventeatList'>
                                        <label>
                                            <input type='checkbox' value='ONEONLY PALMILLA' />
                                            Breakfast
                                        </label>
                                        <label>
                                            <input type='checkbox' value='ONEONLY PALMILLA' />
                                            Brunch
                                        </label>
                                        <label>
                                            <input type='checkbox' value='ONEONLY PALMILLA' />
                                            Lunch
                                        </label>
                                        <label>
                                            <input type='checkbox' value='ONEONLY PALMILLA' />
                                            Dinner
                                        </label>
                                        <label>
                                            <input type='checkbox' value='ONEONLY PALMILLA' />
                                            Ceremony
                                        </label>
                                        <label>
                                            <input type='checkbox' value='ONEONLY PALMILLA' />
                                            Reception
                                        </label>
                                        <label>
                                            <input type='checkbox' value='ONEONLY PALMILLA' />
                                            Photographer
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>





                    <div className='eventAdditionalInformation'>
                        <div className='eventAdditionalInformationHead'>
                            <h4>Additional Information</h4>
                        </div>
                        <div className='eventAdditionalInformationDetail'>
                            <div className='eventAdditionalInfoMain'>
                                <div className='eventAdditionalInfoMainLeft'>
                                    <div className='eventAdditionalInfoHead'>
                                        <div className='eventAdditionalInfoTitle'>
                                            <label>WHAT OTHER DESTINATION/VENUES ARE YOU CONSIDERING?</label>
                                        </div>
                                        <input type='text' />
                                    </div>
                                </div>
                                <div className='eventAdditionalInfoMainRight'>
                                    <div className='eventAdditionalInfoHead'>
                                        <div className='eventAdditionalInfoTitle'>
                                            <label>PLEASE PROVIDE ANY ADDITIONAL EVENT/GUESTROOM COMMENTS</label>
                                        </div>
                                        <input type='text' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>







                    <div className='securityMain'>
                        <div className='securityHead'>
                            <h4>Security</h4>
                        </div>
                        <div className='securityPolicy'>
                            <div className='securityLeft'>
                                <div className='securityCheckbox'>
                                    <label>
                                        <input type='checkbox' />
                                        Privacy Policy*
                                    </label>
                                </div>
                                <div className='securityPara'>
                                    <p>I have read and agree to Kerzner’s privacy policy, including using personal information from the data I provide to Kerzner and/or collected at Kerzner resorts, in order for Kerzner to inform and/or provide me with Kerzner’s products and services and allow Kerzner to proceed with related marketing activities.</p>
                                </div>
                            </div>
                            <div className='securityRight'>
                            </div>
                        </div>
                    </div>







                    <div className='formSubmitBtn'>
                        <button>submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
