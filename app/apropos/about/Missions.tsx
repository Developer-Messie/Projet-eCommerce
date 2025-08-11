import React from 'react'
import './Missions.css';


function Missions() {

    return (
        <>
            <section className="container mission">
                <div className="mission_content">
                    <h4 className="mission_title mt-5 text-center">Notre mission</h4>
                    <p className="mission_subtitle text-center">
                        🌱 Rendre l'excellence des produits bio accessible à tous.
                    </p>
                    <div className='d-flex justify-content-center text-center'>
                        <hr className="mission_divider text-center" />
                    </div>

                    <div className='mission_text-container container'>
                        <div className="row d-flex">
                            <div className="left-column col-lg-6 col-12 d-flex flex-column align-items-center">
                                <ul className='mission_list list-unstyled'>
                                    <li className='mission-li ms-4'>
                                        🌿 Offrir une large gamme de produits biologiques authentiques et de haute qualité, cultivés dans le respect de l'environnement et des traditions indiennes.</li>
                                    <li className='mission-li ms-4'>
                                        🌍 Promouvoir une consommation saine et durable, en valorisant les bienfaits des produits naturels et biologiques.
                                    </li>
                                    <li className='mission-li ms-4'>
                                        🤝 Soutenir les agriculteurs et producteurs indiens engagés dans l'agriculture biologique et le commerce équitable.</li>
                                    <li className='mission-li ms-4'>
                                        🇨🇮 Introduire la richesse et la diversité des saveurs et des bienfaits de l'Inde biologique en Côte d'Ivoire.
                                    </li>
                                </ul>
                            </div>
                            <div className="right-column col-lg-6 col-12 d-flex justify-content-center align-items-center">
                                <img className='mx-auto right-column-img img-fluid' src="/images/mission.jpeg" alt="notre-mission-mathis-bio-store" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Missions
