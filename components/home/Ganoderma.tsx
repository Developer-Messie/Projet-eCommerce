'use client'

import React, { useEffect } from 'react'
import './Ganoderma.css'
import AddToCartButton from '@/store/AddToCartButton'
// aos
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS


function Ganoderma() {

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
            <section className='ganoderma container-fluid mt-5' data-aos="flip-left" data-aos-once="true"
                data-aos-anchor-placement="top-bottom">
                <div className="wrapper container">
                    <div className='row d-flex justify-content-center align-items-center my-auto' style={{ minHeight: '100vh' }}>
                        <div className="pic col-lg-6 d-flex justify-content-center align-items-center">
                            <img className='img-fluid w-100' src="/images/home/group.png" alt="Gano.png" />
                        </div>

                        <div className="col-lg-6 ingred d-flex flex-column justify-content-center align-items-center my-auto">
                            <div className='row d-flex flex-row justify-content-center align-items-center w-100'>
                                <div className="card border-0" style={{ width: '25rem' }}>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">VESTIGE GANODERMA <br /> 90 capsules</h5>
                                        <img className=' d-block mx-auto' src="/images/home/underline.png" alt="underline.png" />
                                        <br />
                                        <p className="card-text">Un type de champignon qui contient 400 nutriments. Il aide à la perte de poids, améliore la digestion, la fonction hépatique, la peau et l'immunité, réduit l'inflammation, booste l'énergie. <br />
                                            Il élimine les toxines accumulées dans l'organisme à cause de la consommation excessive des médicaments et de la malbouffe. <br /> Il aide également à réduire les risques d'infection bactérienne et virale.</p>
                                    </div>
                                    <div className="card-body">
                                        <AddToCartButton
                                            id="Ganoderma-90"
                                            name="Ganoderma - 90 capsules"
                                            price={20000}
                                            image="/images/produits/ganoderma.png"
                                        />
                                        <a href="#" className="fw-bold text-decoration-none card-link btn btn-outline-success rounded-bottom">Détails</a>
                                        <a href="#" className=" btn fs-5 fw-bold text-decoration-none card-price card-link">20.000 FCFA</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ganoderma
