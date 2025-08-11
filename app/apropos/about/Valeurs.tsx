import React from 'react'
import './Valeurs.css';

function Valeurs() {

    return (
        <>
            <section className="container valeurs">
                <div className="valeurs_content">
                    <h4 className="valeurs_title mt-5 text-center">Nos valeurs</h4>
                    <p className="valeurs_subtitle text-center">
                        💚 Les piliers de notre engagement.
                    </p>
                    <div className='d-flex justify-content-center text-center'>
                        <hr className="valeurs_divider text-center" />
                    </div>

                    <div className='valeurs_text-container container'>
                        <div className="row d-flex">

                            <div className="left-column col-lg-6 col-12 d-flex justify-content-center align-items-center">
                                <img className='mx-auto right-column-img img-fluid' src="/images/values.png" alt="notre-valeurs-mathis-bio-store" />
                            </div>

                            <div className="right-column col-lg-6 col-12 d-flex flex-column align-items-center">
                                <ul className='valeurs_list list-unstyled'>
                                    <li className='valeurs-li ms-4'>
                                        ✅ <span className="valeurs-list-title">Authenticité</span> : Sélectionner des produits purs, non transformés et fidèles aux traditions indiennes.</li>

                                    <li className='valeurs-li ms-4'>
                                        ⭐ <span className="valeurs-list-title">Qualité</span> : Garantir des produits biologiques certifiés et rigoureusement contrôlés.
                                    </li>

                                    <li className='valeurs-li ms-4'>
                                        ♻️ <span className="valeurs-list-title">Durabilité</span> : Favoriser des pratiques respectueuses de l'environnement et de la biodiversité.</li>

                                    <li className='valeurs-li ms-4'>
                                        ⚖️ <span className="valeurs-list-title">Équité</span> : Assurer une rémunération juste aux producteurs et des prix accessibles aux consommateurs.
                                    </li>

                                    <li className='valeurs-li ms-4'>
                                        ℹ️ <span className="valeurs-list-title">Transparence</span> : Fournir une information claire et complète sur l'origine et la composition de nos produits.
                                    </li>

                                    <li className='valeurs-li ms-4'>
                                        🤝 <span className="valeurs-list-title">Proximité</span> : Construire une relation de confiance avec nos clients et partenaires en Côte d'Ivoire.
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Valeurs
