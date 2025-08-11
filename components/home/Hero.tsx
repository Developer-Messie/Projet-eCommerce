'use client'

import React, { useEffect } from 'react'
import './Hero.css'
// aos
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
// typewriter
import Typewriter from 'typewriter-effect';



function Hero() {

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
            <section
                className="container-fluid hero" data-aos="fade-up" data-aos-once="true"
                data-aos-anchor-placement="top-bottom"
            >
                <div className="wrapper container">
                    <div className="row d-flex justify-content-center align-items-center my-auto vh-100">
                        <div className="hero-content col-lg-6 d-flex flex-column justify-content-start align-items-start my-auto">
                            {/* <h1 className='display-3'>La désintoxication est la clé de la Santé.</h1> */}
                            <h1 className="display-3">
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString("La désintoxication est la clé de la Santé.")
                                            .pauseFor(2500)
                                            .deleteAll()
                                            .typeString("Ganoderma détoxifie l'organisme.")
                                            .pauseFor(2500)
                                            .deleteAll()
                                            .start();
                                    }}
                                />
                            </h1>
                            <br />
                            <p className='display-6'>La Santé, c'est la base de tout.</p>
                            <div className='cta btn btn-warning mt-4 text-white'>Commandez maintenant !</div>
                        </div>

                        <div className="hero-img col-lg-6 d-flex justify-content-center align-items-center">
                            <img className='hero-pic img-fluid' src="/images/home/Ganoderma.png" alt="Ganoderma" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
