'use client'

import React, { useEffect } from 'react'
import './Compo.css'
// aos
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS


function Compo() {

    useEffect(() => {
        AOS.init({
            // Optional: Global settings for AOS, e.g., duration, easing, etc.
            duration: 1000,
            easing: 'ease-in-out',
            once: true, // Animation only happens once
        });
        // Optional: Refresh AOS after content changes (e.g., dynamic content)
        AOS.refresh();
    }, []); // Empty dependency array ensures it runs only once on mount

    return (

        <>
            <section className='compo container-fluid mt-5' data-aos="fade-up-left" data-aos-once="true"
                data-aos-anchor-placement="top-bottom">
                <div className="wrapper container">
                    <div className='row d-flex justify-content-center align-items-center my-auto' style={{ minHeight: '100vh' }}>
                        <div className="col-lg-6 ingred d-flex flex-column justify-content-center align-items-start my-auto">
                            <div className='row d-flex flex-row justify-content-start align-items-center w-100'>
                                <div className="A col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                                    <img className="icon img-fluid rounded-3" src="/images/home/icon1.png" alt="icon1.png" />
                                    <br />
                                    <h3 className='icon-title h6'>HERBE MERVEILLEUSE</h3>
                                    <p className='lead text-muted text-center'>Ganoderma scanne, contrôle et détecte les troubles corporels.</p>
                                </div>

                                <div className="A col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                                    <img className="icon img-fluid rounded-3" src="/images/home/icon2.png" alt="icon1.png" />
                                    <br />
                                    <h3 className='icon-title h6'>SON ACTION PROTECTRICE</h3>
                                    <p className='lead text-muted text-center'>Il a un effet hépato-protecteur sur le foie, aide à la ciatrisation des ulcères.</p>
                                </div>
                            </div>
                            <br />
                            <div className='row d-flex flex-row justify-content-start align-items-center w-100'>
                                <div className="A col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                                    <img className="icon img-fluid rounded-3" src="/images/home/icon3.png" alt="icon1.png" />
                                    <br />
                                    <h3 className='icon-title h6'>UN ANTIOXYDANT</h3>
                                    <p className='lead text-muted text-center'>Il améliore la capacité du corps à absorber plus de 1,5 fois l'oxygène</p>
                                </div>
                                <div className="A col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                                    <img className="icon img-fluid rounded-3" src="/images/home/icon4.png" alt="icon1.png" />
                                    <br />
                                    <h3 className='icon-title h6'>LE SAVIEZ-VOUS ?</h3>
                                    <p className='lead text-muted text-center'>Il est appelé le roi des herbes  et a un effet normalisant global sur le corps.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pic col-lg-6 d-flex justify-content-center align-items-center">
                            <img className='img-fluid w-100' src="/images/home/Gano.png" alt="Gano.png" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Compo
