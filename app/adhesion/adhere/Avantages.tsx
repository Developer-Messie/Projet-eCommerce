import React from 'react';
import './Avantages.css';

function Avantages() {
    return (
        <section className="avantages container mt-5">
            <div className="wrapper">
                <h4 className='text-center'>⭐ Avantages</h4>
                <div className="d-flex justify-content-center">
                    <small>La Compagnie indienne VESTIGE MARKETING nous récompense de quatre (4) manières générales.</small>
                </div>
                <hr className='divider' />

                <div className="col">
                    <div className="col-left">
                        <ul>
                            <li>
                                <span className='li-title'>La consommation des produits Vestige</span>
                                <p>
                                    Vestige nous paie entre 5 et 16% sur les points que vous gagnez en consommant ses produits. <br />
                                    Et Vestige a associé des points à chacun de ses produits appelés <em>Points Values (PV)</em>. <br />
                                    En consommant ou en recommandant les produits de Vestige à d'autres personnes qui achètent, vous gagnez des points (PV).
                                </p>
                            </li>
                            <li>
                                <span className='li-title'>Acheter et vendre des produits Vestige</span>
                                <p>
                                    Vestige nous permet d’acheter les produits avec 20% de réduction en tant que membre, puis de les revendre. <br />
                                    Vous réalisez ainsi un bénéfice sur chaque vente, et vous gagnez aussi des PV pour lesquels la compagnie vous rémunère.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-right">
                        <ul>
                            <li>
                                <span className='li-title'>Créer votre chaîne de distribution</span>
                                <p>
                                    Invitez un proche à acheter un <strong>KIT D'ADHÉSION</strong> pour devenir distributeur. <br />
                                    Chaque fois qu’un nouveau distributeur rejoint votre réseau, vous réalisez un chiffre d’affaires de 30 à 300 PV selon le kit acheté.
                                </p>
                            </li>
                            <li>
                                <span className='li-title'>Prime de parrainage</span>
                                <p>
                                    Les PV accumulés vous permettent d’évoluer en grade, ouvrant droit à de nombreux <span className="highlight-advantage">avantages financiers et matériels</span>.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Avantages;
