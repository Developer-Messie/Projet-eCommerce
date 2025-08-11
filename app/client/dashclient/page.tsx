"use client"

import React from 'react'
import './dashclient.css'
import { useRouter } from 'next/navigation'
import { ToastSuccess } from '@/controllers/toast'
import { auth } from '@/firebase/firebaseConfig'
import { signOut } from 'firebase/auth'


function Dashclient() {

    const router = useRouter()

    // deconnexion
    const Deconnexion = async () => {
        await signOut(auth)
        localStorage.removeItem("user")
        router.push("/connexion")
        ToastSuccess("Déconnexion réussie.")
    }

    return (

        <>
            <section className='dash-client container mt-5'>
                <div className="dashnav d-flex justify-content-between align-items-center bg-light p-5 rounded-4">
                    <h4 className='title'>Tableau de bord Client</h4>
                    <div className="infos d-flex align-items-center gap-5">
                        <a className='in-links' href="#">Commandes</a>
                        <a className='in-links' href="#">Profil</a>
                        <a className='in-links' href="" onClick={Deconnexion}>Déconnexion</a>
                    </div>
                </div>
                <br /><br />

                <h5>Mes Commandes</h5>
                <br />
                <div className="historique box-shadow rounded-3 p-5">
                    <h6>Historique des commandes</h6>
                    <hr />
                    <br />
                    <p className='text-center'>Aucune commande trouvée</p>
                </div>
            </section>
        </>
    )
}

export default Dashclient
