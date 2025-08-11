import React from 'react'
import Link from 'next/link'
import './Merci.css'


const Merci = () => {

    return (
        <div className="merci-container">
            <h1>Merci pour votre commande !</h1>
            <p>Nous avons bien reçu votre commande et elle est en cours de traitement.</p>
            <Link href="/" className="merci-button">
                {/* <a className="merci-button">Retour à l’accueil</a> */}
                Retour à l’accueil
            </Link>
        </div>
    )
}

export default Merci
