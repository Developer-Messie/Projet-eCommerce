import React from 'react'
import './Membre.css'

function Membre() {
    return (
        <section className='membre-section container mt-5'>
            <div className='wrapper'>
                <h4 className='text-center section-title'>
                    🌐 Et comment devenir membre/partenaire/distributeur ?
                </h4>

                <div className="d-flex justify-content-center">
                    <small className='text-center intro-text'>
                        C'est très simple. Il suffit d'acheter un seul KIT parmi les quatre (4) ci-dessous pour être systématiquement un membre, un partenaire ou un distributeur de la Compagnie Indienne Vestige Marketing <em>(Voir les images ci-dessous)</em>.
                    </small>
                </div>

                <hr className='divider' />

                <div className="row kits-container">
                    {[1, 2, 3, 4].map((num) => (
                        <div className="col-sm-12 col-md-6 mb-4" key={num}>
                            <img
                                className='kit-img img-fluid rounded-3 shadow-sm'
                                src={`/images/adhesion/kits/kit${num}.png`}
                                alt={`kit${num}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Membre
