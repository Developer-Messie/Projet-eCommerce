import Link from 'next/link'
import './Heroad.css'
import React from 'react'
import { FcPhone } from 'react-icons/fc'

function Heroad() {
    return (
        <>

            <section className='adhesion container-fluid'>

                <div className="wrapper">

                    <img src="/images/banners/mission.jpg" alt="notre plan d'adhésion" className='heroad-image img-fluid' />

                    <div className='heroad-content'>
                        <h2 className='heroad-title text-center'>Envie de devenir partenaire ?</h2>

                        <p className='heroad-text text-center'>Une <span className='special'>équipe passionnée</span> dédiée <br /> à vous fournir les meilleures solutions. <br /> <span className='special'>Notre mission</span>, transformer vos idées en réalité.</p>
                        <Link href="tel:+2250709386451" className='btn btn-warning btn-phone text-center'>
                            <FcPhone size={25} /> Discutons ensemble...
                        </Link>
                    </div>

                </div>

            </section>

        </>
    )
}

export default Heroad
