import React from 'react';
import './Plan.css';

function Plan() {
    return (
        <section className="plan container mt-5">
            <div className="wrapper">
                <h4 className="text-center">💎 Plan de carrière & Gains de chaque grade</h4>
                <div className="d-flex justify-content-center text-center">
                    <small>
                        À Vestige Marketing, dont je suis l'un des partenaires et distributeurs, nous gagnons de l'argent en fonction des PV (points que nous réalisons), le strict minimum est de 30 PV et de notre grade, de l'étape de Distributeur à Crown Directeur en passant par les autres grades bien évidemment. <em>(Voir les images ci-dessous)</em>.
                    </small>
                </div>
                <hr className="divider" />

                <div className="col">
                    <img className="img-fluid" src="/images/adhesion/plan/plan1.png" alt="plan1" />
                    <img className="img-fluid" src="/images/adhesion/plan/plan2.png" alt="plan2" />
                    <img className="img-fluid" src="/images/adhesion/plan/plan1.png" alt="plan3" />
                    <img className="img-fluid" src="/images/adhesion/plan/plan2.png" alt="plan4" />
                </div>
            </div>
        </section>
    );
}

export default Plan;
