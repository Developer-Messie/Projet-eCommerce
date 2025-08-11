import React from 'react'
import './Footer.css';
import Link from 'next/link';
import { FaFacebook, FaMapMarkerAlt } from 'react-icons/fa';
import { BsTelephoneFill, BsTwitterX } from 'react-icons/bs';
import { IoLogoYoutube } from 'react-icons/io';
import { FaSquareInstagram } from 'react-icons/fa6';
import { AiFillTikTok } from 'react-icons/ai';
import { MdMarkEmailRead } from 'react-icons/md';




function Footer() {
    return (
        <>
            <footer className='footer w-100 mt-5'>
                <div className='container d-flex justify-content-between align-items-center flex-wrap mt-4'>
                    <div className="logo-transparent d-flex flex-column justify-content-start">
                        <img className='logo-footer img-fluid text-start ms-0' src="/images/logo.webp" alt="Mathis Bio Vestige Store" />
                        <p>
                            Boutique en ligne des produits bio <br />Vestige, pour une vie saine avec des <br /> solutions naturelles certifiées.
                        </p>
                    </div>

                    <div className="footer-apropos">
                        <h3 className='text-danger'>À propos</h3>
                        <ul className='list-unstyled'>
                            <li><Link href="/about" className='meslinks'>Qui sommes-nous ?</Link></li>
                            <li><Link href="/contact" className='meslinks'>Contactez-nous</Link></li>
                            <li><Link href="/faq" className='meslinks'>FAQ</Link></li>
                            <li><Link href="/terms" className='meslinks'>Conditions d'utilisation</Link></li>
                        </ul>
                    </div>

                    <div className="footer-support">
                        <h3 className='text-danger'>Support</h3>
                        <ul className='list-unstyled'>
                            <li><Link href="/shipping" className='meslinks'>Livraison</Link></li>
                            <li><Link href="/returns" className='meslinks'>Retours</Link></li>
                            <li><Link href="/privacy" className='meslinks'>Politique de confidentialité</Link></li>
                            <li><Link href="/terms" className='meslinks'>Conditions générales de vente</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h3 className='text-danger'>Contact</h3>
                        <ul className='list-unstyled'>
                            <li><a href="mailto:messiesucces@yahoo/com" className='meslinks '><MdMarkEmailRead style={{ color: "#0D9B4D" }} /> messsiesucces@yahoo.com</a></li>
                            <li><a href="tel:+229 61 61 61 61" className='meslinks'><BsTelephoneFill style={{ color: "#0D9B4D" }} /> +225 07 09 38 64 51</a></li>
                            <li><a href="https://goo.gl/maps/xyz" target="_blank" rel="noopener noreferrer" className='meslinks'><FaMapMarkerAlt style={{ color: "#0D9B4D" }} /> Commune Koumassi, Prodomo <small><i>et</i></small> <br /> <span className='ms-3'></span>Grand-Bassam, Abidjan, Côte d'Ivoire</a></li>
                        </ul>

                    </div>
                </div>

                {/* <hr className='my-4 w-50 mx-auto text-success' /> */}

                <div className="social-networks container w-lg-75 d-flex flex-wrap justify-content-between align-items-center mt-4">

                    <div className='d-flex justify-content-between align-items-center'><img src="/images/payments/google-play.jpg" alt="google-play" className='mx-2' /><img src="/images/payments/app-store.jpg" alt="app-store" /></div>
                    <div>Suivez-nous sur nos réseaux sociaux !</div>
                    <div className='social-icons d-flex justify-content-center align-items-center gap-3'>
                        <a href="https://www.facebook.com/MathisBioVestige" title="Facebook" target="_blank" rel="noopener noreferrer">
                            <FaFacebook style={{ color: "#0D9B4D" }} size={25} />
                        </a>
                        <a href="https://www.instagram.com/mathisbio/" title="Twitter" target="_blank" rel="noopener noreferrer">
                            <BsTwitterX style={{ color: "#0D9B4D" }} size={25} />
                        </a>
                        <a href="https://www.youtube.com/@mathisbio" title="Youtube" target="_blank" rel="noopener noreferrer">
                            <IoLogoYoutube style={{ color: "#0D9B4D" }} size={25} />
                        </a>
                        <a href="https://www.youtube.com/@mathisbio" title="Instagram" target="_blank" rel="noopener noreferrer">
                            <FaSquareInstagram style={{ color: "#0D9B4D" }} size={25} />
                        </a>
                        <a href="https://www.youtube.com/@mathisbio" title="TikTok" target="_blank" rel="noopener noreferrer">
                            <AiFillTikTok style={{ color: "#0D9B4D" }} size={25} />
                        </a>
                    </div>
                </div>

                <hr className='my-4 w-50 mx-auto text-success' />

                <div className='signature container d-flex flex-wrap justify-content-between align-items-center mt-4 w-lg-75'>
                    <p>© 2025 Mathis Bio Vestige. Tous droits réservés.</p>
                    <div className='visa'> <img src="/images/payments/card_img.webp" alt="card-visa" /> </div>
                </div>

                {/* <hr className='my-4 w-50 mx-auto' /> */}
                <div className='text-center mt-4 mb-3'>
                    <p>conçu et développé par <a href='#' className='text-decoration-none text-white'><strong>Mr Serge Messie</strong></a></p>
                </div >
            </footer >

        </>
    )
}

export default Footer
