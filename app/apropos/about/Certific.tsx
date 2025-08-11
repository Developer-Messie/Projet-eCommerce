import React from 'react'
import './Certific.css'

function Certific() {

    return (

        <>
            <section className="cert container mt-5">
                <div className="wrapper">
                    <div className="certific text-center">
                        <h4>Certificats de Vestige Marketing</h4>
                        <p>Ils témoignent de notre engagement envers la qualité et l'excellence, résultat d'un travail acharné et d'une passion pour ce que nous faisons.</p>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <hr className="certific_divider text-center" />
                    </div>
                    <br />

                    <div className="list-cert w-75 d-flex justify-content-lg-between align-items-center mx-auto text-center flex-lg-nowrap flex-column flex-lg-row">
                        <div className="certific-item">
                            <img src="/images/certif/certif-1.jpg" className='w-75 img-fluid' alt="Certificat 1" />
                            {/* <p>Certificat de conformité</p> */}
                        </div>
                        <div className="certific-item">
                            <img src="/images/certif/certif-2.jpg" className='w-75 img-fluid' alt="Certificat 2" />
                            {/* <p>Certificat de qualité</p> */}
                        </div>
                        <div className="certific-item">
                            <img src="/images/certif/certif-3.jpg" className='w-75 img-fluid' alt="Certificat 3" />
                            {/* <p>Certificat d'excellence</p> */}
                        </div>
                        {/* <div className="certific-item">
                            <img src="/images/certif/certif-4.jpg" className='w-25 img-fluid' alt="Certificat 4" />
                            <p>Certificat d'excellence</p>
                        </div> */}
                    </div>

                </div>
            </section>

        </>
    )
}

export default Certific
