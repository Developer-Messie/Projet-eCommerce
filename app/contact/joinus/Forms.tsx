import React from 'react'

// import "../globals.css";
import './Forms.css'
import { BsSendCheckFill } from 'react-icons/bs'

function Forms() {
    return (
        <>
            <section className="contact-form container-fluid d-flex flex-column justify-content-center align-items-center text-white">

                <div className="container">
                    <div className="row">

                        <div className="col-lg-6">
                            <div className="map w-100 h-100 d-none d-lg-block">
                                <iframe className='w-100 h-100 border-0'
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3335.957876553555!2d-4.004510525925326!3d5.399096535209435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ebdb9cb903a3%3A0x6dabfbdab0924995!2sVestige%20Marketing%20Abidjan!5e1!3m2!1sfr!2sci!4v1751387683034!5m2!1sfr!2sci"
                                    // width="500"
                                    height="800%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>

                        <div className="myform col-lg-6">

                            <form className='form-indeed w-75 h-100 mx-auto'>
                                <p className='text-center text-dark'>Laissez-nous un message !</p>
                                <br />
                                <div className="form-group">
                                    <label htmlFor="name">Nom <span className='asteriks'>*</span></label>
                                    <input type="text" className="form-control" id="name" name='name' placeholder="Entrer votre nom" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email <span className='asteriks'>*</span></label>
                                    <input type="email" className="form-control" id="email" name='email' placeholder="Entrer votre email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message <span className='asteriks'>*</span></label>
                                    <textarea className="form-control" id="message" rows={4} name='message' placeholder="Votre commentaire" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary"><BsSendCheckFill className='me-2' /> Soumettre</button>
                            </form>
                        </div>

                    </div >
                </div>
            </section >

        </>
    )
}

export default Forms
