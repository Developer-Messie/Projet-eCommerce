'use client'

import { auth, provider } from '@/firebase/firebaseConfig';
import { ClientType } from '../typage';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import axios from 'axios';
import './Connexion.css'
import { ToastError, ToastSuccess } from '@/controllers/toast';
import { useRouter } from 'next/navigation';


const Connexion = () => {
    //! DEBUT DES PARTIES LOGIQUES
    const router = useRouter();
    // const { data: session } = useSession();

    //* PARTIE SIGNIN
    const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
    const [form, setForm] = React.useState<ClientType & { password: string }>({
        nom: '',
        email: '',
        password: ''
    });
    const [password, setPassword] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const submitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.email || !form.password) {
            ToastError("Veuillez remplir tous les champs.");
            return;
        }

        try {
            let idFirebase = null;

            // On commence par une vérification de l'administrateur
            if (form.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
                // Pas besoin de passer par Firebase pour l'admin
                console.log("Tentative de connexion en tant qu'administrateur.");
            } else {
                // Pour tous les autres utilisateurs, on passe par Firebase
                const data = await signInWithEmailAndPassword(auth, form.email, form.password);
                idFirebase = data.user.uid;

                // Vérification de l'email si ce n'est pas l'admin
                if (!data.user.emailVerified) {
                    await sendEmailVerification(data.user);
                    ToastSuccess("Adresse email non vérifiée. Un email de confirmation a été envoyé.");
                    return;
                }
            }

            // Appel à l'API pour récupérer les données de l'utilisateur (admin ou client)
            const req = await axios.post("/api-server/get-client", {
                idFirebase: idFirebase,
                email: form.email,
                password: form.password,
            });

            if (req?.data?.message !== "Client récupéré avec succès.") {
                // L'API renvoie un message d'erreur si les identifiants sont incorrects
                ToastError("Email ou mot de passe incorrect.");
                return;
            }

            const user = req.data.data;
            localStorage.setItem("user", JSON.stringify(user));

            // Redirection selon le type d'utilisateur
            if (user?.typeUser === "admin") {
                router.push("/vendeur/dashvendeur");
                ToastSuccess(`Bienvenue ${user?.nom}, vous êtes connecté en tant qu'administrateur.`);
            } else {
                router.push("/client/dashclient");
                ToastSuccess(`Bienvenue ${user?.nom}, vous êtes connecté en tant que client.`);
            }

        } catch (error) {
            console.error("Erreur lors de la connexion :", error);
            ToastError("La connexion a échoué. Veuillez vérifier vos informations.");
        }
    }

    //* PARTIE SOCIAL LOGINs
    // GOOGLE
    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log("Utilisateur Google connecté :", user);

            ToastSuccess("Super ! Connexion Google réussie.")

            router.push("/client/dashclient")

        } catch (error: any) {
            console.error("Erreur de Google connexion :", error);
            ToastError("La connexion a échoué. Veuillez vérifier vos informations.")
        }
    };

    // FACEBOOK
    const handleFacebookLogin = async () => {
        const provider = new FacebookAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log("Utilisateur Facebook connecté :", user.displayName);

            ToastSuccess("Super ! Connexion Facebook réussie.")

            // enregistrement dans la db compass
            const userData = {
                uid: user.uid,
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                provider: "facebook"
            };

            await fetch("/api-server/new-client", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });
            router.push("/client/dashclient")

        } catch (error: any) {
            console.error("Erreur Facebook login :", error.message);
            ToastError("La connexion a échoué. Veuillez vérifier vos informations.")
        }
    };

    //* PARTIE SIGNUP
    const handleSignUpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.email || !password || !form.nom) {
            ToastError("Veuillez remplir tous les champs.");
            return;
        }

        try {
            const data = await createUserWithEmailAndPassword(auth, form.email, password);
            await sendEmailVerification(data?.user);
            const req = await axios.post("/api-server/new-client", { ...form, uid: data?.user.uid });

            if (req?.data?.message === "Client ajouté avec succès.") {
                ToastSuccess("Compte créé. Veuillez confirmer via le lien envoyé par email.");

                setForm({
                    nom: '',
                    email: '',
                    password: ''
                });
                setPassword('');

                setActiveTab('login');

            } else {
                console.log(req);
            }

        } catch (error) {
            console.log(error);
            ToastError("La connexion a échoué. Veuillez vérifier vos informations.");
        }
    };


    //! FIN DES PARTIES LOGIQUES

    return (
        <>
            <section className="connexion container mt-5">
                <div className="wrapper">
                    <h3>Connexion</h3>
                    <small>Connectez-vous à votre compte pour accéder à vos informations et services.</small>
                    <hr className='divider' />
                    <br />

                    {/* TABS FORMS*/}
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button
                                className={`nav-link${activeTab === 'login' ? ' active' : ''}`}
                                type="button"
                                role="tab"
                                aria-selected={activeTab === 'login' ? "true" : "false"}
                                onClick={() => setActiveTab('login')}
                            >
                                Se connecter
                            </button>
                            <button
                                className={`nav-link${activeTab === 'signup' ? ' active' : ''}`}
                                type="button"
                                role="tab"
                                aria-selected={activeTab === 'signup' ? "true" : "false"}
                                onClick={() => setActiveTab('signup')}
                            >
                                S'inscrire
                            </button>
                        </div>
                    </nav>

                    {/* <div className="tab-content w-50 mx-auto" id="nav-tabContent"> */}
                    <div className="tab-content" id="nav-tabContent">
                        {/* PART ONE */}
                        {activeTab === 'login' && (
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                {/* form login */}
                                <div className="login-container">
                                    {/* CONNEXION AVEC SON COMPTE */}
                                    <form id="login-form" onSubmit={(e) => submitLogin(e)} className="auth-form active">
                                        <h2>Connexion</h2>
                                        <div className="form-group">
                                            <label htmlFor="login-email">Email :</label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="login-email"
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="Votre adresse email"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="login-password">Mot de passe :</label>
                                            <input
                                                type="password"
                                                name="password"
                                                id="login-password"
                                                value={form.password}
                                                onChange={handleChange}
                                                placeholder="Au moins 8 caractères"
                                                required
                                            />
                                        </div>
                                        <button type="submit" className="btn-submit">Connexion</button>
                                        <a href="#" className="forgot-password">Mot de passe oublié ?</a>
                                    </form>

                                    {/* SOCIAL LOGINs */}
                                    <div className="social-login">
                                        <p className="separator">ou se connecter avec</p>
                                        <div className="social-buttons">
                                            <button type="button" className="social-button facebook" onClick={handleFacebookLogin} >
                                                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" className="social-icon" />
                                                Facebook
                                            </button>
                                            <button type="button" className="social-button google" onClick={handleGoogleLogin} >
                                                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/google.svg" alt="Google" className="social-icon" />
                                                Google
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* fin form login */}
                            </div>
                        )}

                        {/* PART TWO */}
                        {activeTab === 'signup' && (
                            <div className="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                {/* form signup */}
                                <div className="signup-container">
                                    <form id="signup-form" className="auth-form" onSubmit={handleSignUpSubmit}>
                                        {/* CREATION DE SON COMPTE */}
                                        <h2>Inscription</h2>
                                        <div className="form-group">
                                            <label htmlFor="signup-username">Utilisateur :</label>
                                            <input type="nom" id="signup-nom" name="nom" placeholder="Votre nom" required value={form.nom} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="signup-email">Email :</label>
                                            <input type="email" id="signup-email" name="email" placeholder="Votre adresse email" required value={form.email} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="signup-password">Mot de passe :</label>
                                            <input
                                                type="password"
                                                id="signup-password"
                                                name="password"
                                                placeholder="Au moins 8 caractères"
                                                required
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <p className="agreement">
                                            En vous inscrivant, vous acceptez nos <a href="#">Conditions</a> et notre <a href="#">Politique de confidentialité</a>.
                                        </p>
                                        <button type="submit" className="btn-submit">S'inscrire</button>
                                    </form>

                                    {/* SOCIAL LOGINs */}
                                    <div className="social-login">
                                        <p className="separator">ou se connecter avec</p>
                                        <div className="social-buttons">
                                            <button className="social-button facebook" onClick={handleFacebookLogin} >
                                                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" className="social-icon" />
                                                Facebook
                                            </button>
                                            <button className="social-button google" onClick={handleGoogleLogin} >
                                                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/google.svg" alt="Google" className="social-icon" />
                                                Google
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* Modal controlled by React */}
                                {/* fin form signup */}
                            </div>
                        )}
                    </div>
                    {/* FIN TABS FORMS */}
                </div>
            </section>
        </>
    );
};

export default Connexion