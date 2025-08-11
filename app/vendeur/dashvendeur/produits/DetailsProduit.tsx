// DetailsProduit.jsx
"use client";

import { ProduitType } from '@/app/typage';
import { FormatPrix } from '@/controllers/formatprix';
import Image from 'next/image';
import React from 'react';

type Props = {
  item: ProduitType | null;
};

function DetailsProduit({ item }: Props) {
  if (!item) return null;

  return (
    <div className="modal fade show d-block" tabIndex={-1} role="dialog" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Détails Produit : {item.nomProduit}</h1>
            <button type="button" className="btn-close" aria-label="Close" />
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div style={{ width: '100%', height: '300px', position: 'relative' }} className="rounded-4 overflow-hidden">
                    <Image
                      src={item.image || '/images/placeholder.png'}
                      alt={item.nomProduit || 'Image du produit'}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <h3>{item.nomProduit}</h3>
                  <h4>Prix : {item.prix !== undefined ? FormatPrix(item.prix) : 'N/A'}</h4>
                  <p>{item.description}</p>
                  <p>Qté initiale : {item.qteInit}</p>
                  <p>Qté vendue : {item.qteVendue}</p>
                  <p>Qté restante : {item.qteRestante}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsProduit;