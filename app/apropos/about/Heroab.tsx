import React from 'react'
import './Heroab.css'
import Link from 'next/link'
import { FcPhone } from 'react-icons/fc'

function Heroab() {
    return (
        <>
            <section className='heroAB container-fluid'>
                <div className="wrapper">
                    <img src="/images/banners/team.jpeg" alt="notre team vestige en image" className='heroAB-image img-fluid' />

                    <div className='heroAB-content'>
                        <h2 className='heroAB-title'>A propos de nous</h2>
                        <p className='heroAB-text'>Une <span className='special'>équipe passionnée</span> dédiée <br /> à vous fournir les meilleures solutions. <br /> <span className='special'>Notre mission</span>, transformer vos idées en réalité.</p>
                        <Link href="tel:+2250709386451" className='btn btn-outline-success btn-phone'>
                            <FcPhone size={25} /> Nous parler ?
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Heroab
