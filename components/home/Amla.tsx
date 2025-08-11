'use client'

import React, { useEffect } from 'react'
import './Amla.css'
import AddToCartButton from '../../store/AddToCartButton'
// aos
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS


function Amla() {

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
            <section className='amla container-fluid mt-5' data-aos="flip-up" data-aos-once="true"
                data-aos-anchor-placement="top-bottom">
                <div className="wrapper container">
                    <div className='row d-flex justify-content-center align-items-center my-auto' style={{ minHeight: '100vh' }}>
                        <div className="pic col-lg-6 d-flex justify-content-center align-items-center">
                            <img className='img-fluid w-100' src="/images/home/grouped.png" alt="Gano.png" />
                        </div>
                        <div className="col-lg-6 ingred d-flex flex-column justify-content-center align-items-center my-auto">
                            <div className='row d-flex flex-row justify-content-center align-items-center w-100'>
                                <div className="card border-0" style={{ width: '25rem' }}>
                                    {/* <img src="..." className="card-img-top" alt="..." /> */}
                                    <div className="card-body">
                                        <h5 className="card-title text-center">VESTIGE AMLA <br /> 60 capsules</h5>
                                        <img className=' d-block mx-auto' src="/images/home/underline.png" alt="underline.png" />
                                        <br />
                                        <p className="card-text">Amla est la source la plus riche en vitamine C. Sous forme naturelle, 20 fois la quantité de vitamine trouvée dans les oranges. Il est chargé avec une gamme de polyphénols qui sont des antioxydants qui previennent les dommages causés par les radicaux libres dans le corps et combattent différents types de cancer  et de maladies cardiovasculaires. <br />
                                            Amla améliore et boost les défenses immunitaires, le fonctionnement du cerveau, la santé urinaire, la fertilité masculine et réduit le taux de cholestérol, les effets du vieillissement prématuré, la congestion su sinus ainsi que le temps de récupération en cas de rhume, grippe.</p>
                                    </div>
                                    <div className="card-body">

                                        <AddToCartButton
                                            id="amla-60"
                                            name="Amla - 60 capsules"
                                            price={10000}
                                            image="/images/produits/amla.png"
                                        />

                                        <a href="#" className="fw-bold text-decoration-none card-link btn btn-outline-success rounded-bottom">Détails</a>
                                        <a href="#" className=" btn fs-5 fw-bold text-decoration-none card-price card-link">10.000 FCFA</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>        </>
    )
}

export default Amla
