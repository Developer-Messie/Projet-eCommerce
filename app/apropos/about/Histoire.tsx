import React from 'react'
import './Histoire.css';


function Histoire() {
    return (
        <>
            <section className="container histoire">
                <div className="histoire_content">
                    <h4 className="histoire_title mt-5 text-center">Notre histoire</h4>
                    <p className="histoire_subtitle text-center">
                        🕰️ Un voyage de passion pour le bio et l'authenticité.
                    </p>
                    <div className='d-flex justify-content-center text-center'>
                        <hr className="histoire_divider text-center" />
                    </div>

                    <div className='histoire_text-container container'>
                        <div className="row d-flex">

                            <div className="left-column col-lg-6 col-12 d-flex flex-column align-items-center">
                                <ul className='histoire_list list-unstyled'>
                                    <li className='histoire-li ms-4'>
                                        🇮🇳 Notre aventure a commencé par une découverte des pratiques agricoles ancestrales et de la richesse des terroirs indiens.
                                    </li>
                                    <li className='histoire-li ms-4'>
                                        👨‍🌾 Sensibles aux enjeux environnementaux et à la qualité des produits, nous avons décidé de créer un pont entre les producteurs bio indiens et les consommateurs conscients.
                                    </li>
                                    <li className='histoire-li ms-4'>
                                        🇨🇮 Implantés à Abidjan, nous avons pour ambition de partager notre passion et de faciliter l'accès à une alimentation saine et pleine de saveurs.
                                    </li>
                                    <li className='histoire-li ms-4'>
                                        🚀 Animés par la conviction que le bio est l'avenir, nous nous engageons à développer un réseau de distribution fiable et transparent.
                                    </li>
                                </ul>
                            </div>
                            <div className="right-column col-lg-6 col-12 d-flex justify-content-center align-items-center">
                                <img className='mx-auto right-column-img img-fluid' src="/images/history.jpg" alt="notre-histoire-mathis-bio-store" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Histoire
