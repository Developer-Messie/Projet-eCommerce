'use client'

import React, { useEffect } from 'react'
import './Flax.css'
import AddToCartButton from '@/store/AddToCartButton'
// aos
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS


function Flax() {

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
            <section className='flax container-fluid mt-5' data-aos="flip-right" data-aos-once="true"
                data-aos-anchor-placement="top-bottom">
                <div className="wrapper container">
                    <div className='row d-flex justify-content-center align-items-center my-auto' style={{ minHeight: '100vh' }}>
                        <div className="col-lg-6 ingred d-flex flex-column justify-content-center align-items-center my-auto">
                            <div className='row d-flex flex-row justify-content-center align-items-center w-100'>
                                <div className="card border-0" style={{ width: '25rem' }}>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">VESTIGE FLAX OIL <br /> 90 capsules</h5>
                                        <img className=' d-block mx-auto' src="/images/home/underline.png" alt="underline.png" />
                                        <br />
                                        <p className="card-text">Protège ton coeur et sécurise ta famille avec Vestige Flax Oil (l'huile de lin). Elle contient environ 50-60% d'Oméga-3 et environ 18-20% d'Oméga-6. Elle est une source d'acides gras essentiels (bon cholestérol) aidant ainsi à prévenir l'accumulation de dépôts graisseux à l'intérieur des vaisseeaux sanguins. <br />
                                            Flax Oil stabilise la glycémie, aide à réguler l'hypertension artérielle, et joue un rôle dans la combustion des graisses corporelles (perte de poids). Elle améliore l'élasticité des artères, agit sur la régulation hormonale et sur la santé mentale.</p>
                                    </div>
                                    <div className="card-body">
                                        <AddToCartButton
                                            id="Flax Oil-90"
                                            name="Flax Oil - 60 capsules"
                                            price={10000}
                                            image="/images/produits/flax.png"
                                        />
                                        <a href="#" className="fw-bold text-decoration-none card-link btn btn-outline-success rounded-bottom">Détails</a>
                                        <a href="#" className=" btn fs-5 fw-bold text-decoration-none card-price card-link">14.000 FCFA</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pic col-lg-6 d-flex justify-content-center align-items-center">
                            <img className='img-fluid w-100' src="/images/home/flax.png" alt="Gano.png" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Flax
