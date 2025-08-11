'use client';

import Link from 'next/link'
import React, { use, useState } from 'react'
import "./Navbar.css";
import { LuSearch } from 'react-icons/lu';
import { useCartStore } from '../../store/cartStore'


function Navbar() {

  // const CartIcon = () => {
  const cart = useCartStore((state) => state.cart)
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0)
  // }

  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <nav className="mynavigation navbar navbar-expand-lg navbar-light bg-light sticky-lg-top">
        <div className="container">
          <Link className="navbar-brand" href="/"><img src="/images/logo.webp" alt="Mathis Bio Store" className='w-25 ' /></Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">🏠 ACCUEIL</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/boutik">🛍️ BOUTIK VESTIGE</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/adhesion">🤝 ADHESION</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/apropos">ℹ️ A PROPOS DE NOUS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/contact">✉️ CONTACT</Link>
              </li>
            </ul>

            <div className="right-navbar d-flex justify-content-lg-end justify-content-sm-start align-items-center ms-lg-3">
              <div className='d-flex flex-lg-row justify-content-sm-start align-items-sm-center gap-3'>
                <Link className="onglets nav-link active btn position-relative" title="Panier" aria-current="page" href="/panier">
                  <span className='fs-6'>🛒</span>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" >
                    <span>{totalQty}</span>
                  </span>
                </Link>

                <Link className="onglets nav-link active" id="open-auth-modal" title="Connexion" aria-current="page" href="/connexion">
                  <span className='fs-6'>👤</span> Connexion
                </Link>

                {/* SEARCH ICON TRIGGERS POPUP */}
                <button
                  type="button"
                  className="onglets nav-link active btn"
                  title="Rechercher"
                  aria-current="page"
                  onClick={() => setShowSearch(true)}
                  style={{ background: "none", border: "none", padding: 0 }}
                >
                  <span><LuSearch size={20} /></span>Recherche
                </button>

                {/* SEARCH POP-UP MENU */}
                {showSearch && (
                  <div
                    className="search-popup"
                    style={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      width: "100vw",
                      height: "100vh",
                      background: "rgba(0,0,0,0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 1050,
                    }}
                    onClick={() => setShowSearch(false)}
                  >
                    <div
                      style={{
                        background: "#fff",
                        padding: "2rem",
                        borderRadius: "8px",
                        minWidth: "300px",
                        boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
                        position: "relative",
                      }}
                      onClick={e => e.stopPropagation()}
                    >
                      <button
                        onClick={() => setShowSearch(false)}
                        style={{
                          position: "absolute",
                          top: 8,
                          right: 8,
                          background: "none",
                          border: "none",
                          fontSize: "1.5rem",
                          cursor: "pointer",
                        }}
                        aria-label="Fermer"
                      >
                        &times;
                      </button>

                      <form>
                        <input
                          type="text"
                          placeholder="Rechercher..."
                          autoFocus
                          style={{
                            width: "100%",
                            padding: "0.5rem",
                            fontSize: "1rem",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                          }}
                        />
                      </form>
                    </div>
                  </div>
                )}
                {/* FIN SEARCH POP-UP MENU */}

                <Link className="onglets nav-link active" title="Light/Dark" aria-current="page" href="/dark-mode">
                  <span className='fs-6'>🌓</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

