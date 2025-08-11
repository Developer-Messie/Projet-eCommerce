// Dashvendeur.jsx
"use client";

import React, { useEffect, useState } from 'react';
/* import './Dashvendeur.css'; */
import { GrDashboard } from 'react-icons/gr';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { auth } from '@/firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
import { BiLogOut } from 'react-icons/bi';
import ModalNewProduit from './produits/ModalNewProduit';
import ListeProduits from './produits/ListeProduits';
import axios from 'axios';
import Dashboard from './dashboard';
import { ToastError, ToastSuccess } from '@/controllers/toast';
import { ProduitType } from '@/app/typage';

function Dashvendeur() {
    const [produits, setProduits] = useState<ProduitType[]>([]);
    const [activeTab, setActiveTab] = useState('dashboard');

    const router = useRouter();

    const Deconnexion = async () => {
        await signOut(auth);
        localStorage.removeItem("user");
        router.push("/connexion");
        ToastSuccess("Déconnexion réussie.");
    };

    const getMyProduit = async () => {
        try {
            const req = await axios.get(`/api-server/get-produits-all`);
            if (req?.data.message === "Produits récupérés avec succès.") {
                setProduits(req.data.data);
            } else {
                ToastError("Erreur lors de la récupération des produits.");
            }
        } catch (error) {
            console.error("Erreur lors de la récupération des produits:", error);
            ToastError("Impossible de charger les produits.");
        }
    };

    useEffect(() => {
        getMyProduit();
    }, []);

    return (
        <>
            <section className="dash-vendeur container mt-5">
                <div className="wrapper d-flex">
                    <div className="sidebar w-25 bg-light vh-100 d-flex flex-column gap-4 rounded-start p-3">
                        <Image src={"/images/logo.webp"} alt='' width={150} height={150} className='mx-auto mb-5' />
                        <div className="nav1 d-flex flex-column gap-4">
                            <button className={`btn ${activeTab === 'dashboard' ? 'btn-warning' : 'btn-secondary'} w-100 text-start`} onClick={() => setActiveTab('dashboard')}><GrDashboard /> Tableau de bord</button>
                            <button className={`btn ${activeTab === 'produits' ? 'btn-warning' : 'btn-secondary'} w-100 text-start`} onClick={() => setActiveTab('produits')}><GrDashboard /> Mes produits</button>
                            <button className={`btn ${activeTab === 'commandes' ? 'btn-warning' : 'btn-secondary'} w-100 text-start`} onClick={() => setActiveTab('commandes')}><GrDashboard /> Mes Commandes</button>
                            <button className={`btn ${activeTab === 'promotions' ? 'btn-warning' : 'btn-secondary'} w-100 text-start`} onClick={() => setActiveTab('promotions')}><GrDashboard /> Promotions</button>
                            <button className={`btn ${activeTab === 'notifications' ? 'btn-warning' : 'btn-secondary'} w-100 text-start`} onClick={() => setActiveTab('notifications')}><GrDashboard /> Notifications</button>
                            <button className={`btn ${activeTab === 'profil' ? 'btn-warning' : 'btn-secondary'} w-100 text-start`} onClick={() => setActiveTab('profil')}><GrDashboard /> Profil</button>
                            <button className="btn btn-danger w-100 text-start mt-3" onClick={Deconnexion}><BiLogOut /> <strong>Déconnexion</strong></button>
                        </div>
                    </div>
                    <div className="content w-75 bg-white vh-100 p-4 overflow-auto">
                        {activeTab === 'dashboard' && <Dashboard />}
                        {activeTab === 'produits' && (
                            <div className='w-100 bg-light'>
                                <div className="container">
                                    <h4 className="text-center">Mes Produits</h4>
                                    <div className="my-3 text-end">
                                        <button
                                            className="btn btn-outline-success"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modalNewProduit"
                                        >
                                            Ajouter un nouveau produit
                                        </button>
                                    </div>
                                    <ListeProduits produits={produits} setProduits={setProduits} />
                                </div>
                            </div>
                        )}
                        {activeTab === 'commandes' && <div><h4 className="text-center" >Mes Commandes</h4><p>Contenu des commandes</p></div>}
                        {activeTab === 'promotions' && <div><h4 className="text-center" >Promotions</h4><p>Contenu des promotions</p></div>}
                        {activeTab === 'notifications' && <div><h4 className="text-center" >Notifications</h4><p>Contenu des notifications</p></div>}
                        {activeTab === 'profil' && <div><h4 className="text-center" >Mon Profil</h4><p>Contenu du profil</p></div>}
                    </div>
                </div>
            </section>
            <ModalNewProduit
                produits={produits}
                setProduits={setProduits}
            />
        </>
    );
}

export default Dashvendeur;