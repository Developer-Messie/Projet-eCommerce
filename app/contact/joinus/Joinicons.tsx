import React from 'react'

// import "../globals.css"
import './Joinicons.css'
import { TbMapCheck } from 'react-icons/tb'
import { BsFillTelephoneOutboundFill } from 'react-icons/bs'
import { FcGlobe } from 'react-icons/fc'



function Joinicons() {


    return (
        <>

            <section className='icons-section container d-flex flex-wrap justify-content-lg-between justify-content-sm-center align-items-lg-center align-items-sm-center mx-auto'>

                <div className='conteneur-sharp'>
                    <img src="/images/shapes/contact-shape-left.png" alt="contact-shape-left" className='left-shape' />
                </div>

                <div className="container">
                    <h4 className='text-center text-dark mb-4 mt-0'>🎯 Nous sommes à votre écoute !</h4>
                    <p className='text-center p-0 m-0'>Une question sur un produit, un souci avec votre commande ou simplement envie d’en savoir plus, <br /> notre équipe est là pour vous. Votre satisfaction est notre priorité !</p>
                </div>



                <div className='icons icon1 align-items-sm-center justify-content-sm-center d-flex flex-column-sm-center mx-sm-auto'>
                    <TbMapCheck className='d-flex justify-content-sm-center align-content-sm-center' size={80} style={{ textAlign: "center" }} />
                    <h5 className='icons-title align-items-sm-center'>Bureau OFFICE</h5>
                    <p className='icons-desc align-items-sm-center'>Mathis Bio Store, 1234 Street Name, <br /> Abidjan, Côte d'Ivoire</p>
                </div>

                <div className='icons icon2 align-items-sm-center justify-content-sm-center d-flex flex-column-sm-center mx-sm-auto'>
                    <BsFillTelephoneOutboundFill className='d-flex justify-content-sm-center align-content-sm-center' size={80} style={{ textAlign: "center" }} />
                    <h5 className='icons-title align-items-sm-center'>Numéro TELEPHONE</h5>
                    <p className='icons-desc align-items-sm-center'>+225 07 09 38 64 51 <br /> +225 07 09 38 64 51</p>
                </div>

                <div className='icons icon3 align-items-sm-center justify-content-sm-center d-flex flex-column-sm-center mx-sm-auto'>
                    <FcGlobe className='d-flex justify-content-sm-center align-content-sm-center' size={80} style={{ textAlign: "center" }} />
                    <h5 className='icons-title align-items-sm-center'>Connexion WEB</h5>
                    <p className='icons-desc align-items-sm-center'>messiesucces@yahoo.com <br /> https://www.mathisbio.com</p>
                </div>

                <div className='conteneur-sharp'>
                    <img src="/images/shapes/contact-shape-right.png" alt="contact-shape-right" className='right-shape' />
                </div>


            </section>

        </>
    )
}

export default Joinicons
