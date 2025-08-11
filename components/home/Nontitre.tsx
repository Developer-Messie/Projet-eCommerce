'use client'

import React, { useEffect } from 'react'
import './Nontitre.css'
// aos
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS


function Nontitre() {

    useEffect(() => {
        AOS.init({
            // Optional: Global settings for AOS, e.g., duration, easing, etc.
            duration: 2000,
            easing: 'ease-in-out',
            once: true, // Animation only happens once
        });
        // Optional: Refresh AOS after content changes (e.g., dynamic content)
        AOS.refresh();
    }, []); // Empty dependency array ensures it runs only once on mount

    return (
        <>
            <section className='vide container mt-5' data-aos="fade-up-right" data-aos-once="true"
                data-aos-anchor-placement="top-bottom">
                <div className="wrapper row text-center d-flex flex-column flex-md-row flex-wrap justify-content-around align-items-center">
                    <div
                        className="delivery col-12 col-md-4 mb-4 mb-md-0 rounded-3 d-flex justify-content-center align-items-center flex-column flex-md-row"
                        style={{ minWidth: 300, flex: '1 1 300px', maxWidth: 350 }}
                    >
                        <div className="del-img me-0 me-md-3 mb-2 mb-md-0"><img src="/images/home/fast.avif" alt="fast" /></div>
                        <div className="del-content text-center text-md-start">
                            <p className='del-title'>Livraison rapide et sécurisée</p>
                            <small className='text-muted'>Recevez votre commande partout en toute confiance</small>
                        </div>
                    </div>

                    <div
                        className="delivery col-12 col-md-4 mb-4 mb-md-0 rounded-3 d-flex justify-content-center align-items-center flex-column flex-md-row"
                        style={{ minWidth: 300, flex: '1 1 300px', maxWidth: 350 }}
                    >
                        <div className="del-img me-0 me-md-3 mb-2 mb-md-0"><img src="/images/home/pourcentage.avif" alt="pourcentage" /></div>
                        <div className="del-content text-center text-md-start">
                            <p className='del-title'>Produits Bio authentiques</p>
                            <small className='text-muted'>Tous nos produits Bio sont certifiés médicalement</small>
                        </div>
                    </div>

                    <div
                        className="delivery col-12 col-md-4 rounded-3 d-flex justify-content-center align-items-center flex-column flex-md-row"
                        style={{ minWidth: 300, flex: '1 1 300px', maxWidth: 350 }}
                    >
                        <div className="del-img me-0 me-md-3 mb-2 mb-md-0"><img src="/images/home/appel.avif" alt="appel" /></div>
                        <div className="del-content text-center text-md-start">
                            <p className='del-title'>Service client 24/7</p>
                            <small className='text-muted'>Notre équipe est disponible à tout moment pour vous accompagner.</small>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Nontitre
