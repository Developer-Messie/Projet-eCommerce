import React from 'react'
import './Heroshop.css'
import Link from 'next/link'


function HeroShop() {

    return (

        <>
            <section className="boutiq container-fluid">

                <div className="wrapper">
                    <img src="/images/banners/shopping.jpg" alt="mathis-bio vestige boutique" className='shop-img img-fluid' />
                    <div className="shop-content">
                        <h3 className='shop-content-title text-center'>Tous nos produits Bio sont certifiés médicalement <br /> et sans effets secondaires.</h3>
                        <p className='shop-content-text text-center my-3'>Bienvenue dans notre Boutique</p>
                        {/* <Link href={composant} className="button">Acheter maintenant !</Link> */}
                        <Link href="#" className="button btn btn-warning">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                                <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0 2h-.01H7zm10-2c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0 2h-.01H17zM7.001 13h10.198c.935 0 1.75-.639 1.949-1.552l1.799-8.098A1 1 0 0019.976 2H5.21l-.406-2H1v2h2.21l2.741 12.262A2.004 2.004 0 007 14h11v-1H7.001z" />
                            </svg> Acheter maintenant !</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroShop
