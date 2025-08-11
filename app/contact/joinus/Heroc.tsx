import React from 'react'

// import "../globals.css";
import './Heroc.css';

// import styles from './heroc.module.css'

function Heroc() {
    return (
        <>
            <section className="hero-contact">
                <img
                    src="/images/banners/imgc.jpg"
                    alt="Mathis Bio Store"
                    className="hero-contact-img"
                />
                <div className="hero-contact-text">
                    <div className="container">
                        <h2 className="text-center text-white display-5 fw-bolder">Contactez-nous</h2>
                        <p className="text-center text-white">
                            Nous sommes ici pour vous aider avec toutes vos questions ou préoccupations.<br />
                            N'hésitez pas à nous contacter via le formulaire ci-dessous.
                        </p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Heroc
