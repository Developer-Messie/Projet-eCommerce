"use client"

import { ProduitType } from '@/app/typage'
import DetailsProduit from '@/app/vendeur/dashvendeur/produits/DetailsProduit'
import { displayProduits } from '@/controllers/displayProduits'
import { FormatPrix } from '@/controllers/formatprix'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'


function ProduitRecent() {

    const [listeProduit, setListeProduit] = useState<ProduitType[]>([])
    const [selectProduit, setSelectProduit] = useState<ProduitType | null>(null)

    //Pour voir les details d'un produit
    const detailsProduit = (item: ProduitType) => {
        setSelectProduit(item)
        setTimeout(() => {
            document.getElementById("showdetailmodal")?.click()
        }, 100);
    }

    useEffect(() => {

        //On recupère les produits
        const getProduit = async () => {
            const produits = await displayProduits(1)

            if (produits && produits.length > 0) {
                setListeProduit(listeProduit)
            }
        }
        getProduit()
    }, [])

    return (
        <>
            {listeProduit?.length > 0 && (
                <section id="recent-products" className="py-5 bg-light">
                    <div className="container">
                        <h2 className="text-center mb-4">Produits Récents</h2>
                        <div className="row">

                            {listeProduit?.map(item => (
                                <div className="col-md-4" key={item?._id}>
                                    <div className="card">
                                        <div className='img-card-top position-relative overflow-hidden rounded-3'>
                                            <Image src={item?.image || "/img/1.jgp"} alt="" fill className='img-fluid object-fit-cover' />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{item?.nomProduit}</h5>
                                            <p className="card-text">{item?.description}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p>{FormatPrix(item?.prix!)}</p>
                                                <button className='btn btn-primary btn-sm' onClick={() => detailsProduit(item)}>Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </section>
            )}
            <DetailsProduit item={selectProduit} />
        </>

    )
}

export default ProduitRecent
