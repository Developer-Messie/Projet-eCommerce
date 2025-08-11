// Composant corrigé: UpdateModal.js
"use client";

import React, { useEffect, useState } from 'react';
import { FileUploaderRegular } from '@uploadcare/react-uploader/next';
import '@uploadcare/react-uploader/core.css';
import { OutputCollectionState, OutputCollectionStatus } from '@uploadcare/react-uploader';
import axios from 'axios';
import { ToastError, ToastSuccess } from '@/controllers/toast';
import { ProduitType } from '@/app/typage';

function UpdateModal({
    produits,
    setProduits,
    item,
    onClose, // Ajout de la prop onClose
}: {
    item: ProduitType | null;
    produits: ProduitType[];
    setProduits: React.Dispatch<React.SetStateAction<ProduitType[]>>;
    onClose: () => void;
}) {
    const [formData, setFormData] = useState<ProduitType>({
        nomProduit: '',
        prix: 0,
        qteInit: 0,
        image: '',
        description: '',
    });

    useEffect(() => {
        if (item) {
            setFormData(item);
        }
    }, [item]);

    // ... (le reste des handlers handleChange et recupImageUrl est inchangé)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const req = await axios.put(`/server/update-produit/${item?._id}`, formData);
            if (req?.data?.message === "ok") {
                // Utilisation de .map() pour une mise à jour plus propre
                setProduits(prev =>
                    prev.map(el => (el._id === item?._id ? req.data.data : el))
                );
                onClose(); // Appel de la fonction de fermeture
                ToastSuccess("Produit modifié avec succès");
            } else {
                ToastError("La mise à jour a échoué.");
            }
        } catch (error) {
            console.error(error);
            ToastError("Une erreur s'est produite");
        }
    };

    if (!item) return null; // Ajout d'une vérification pour ne pas rendre la modale si aucun produit n'est sélectionné

    return (
        <div className="modal fade show d-block" tabIndex={-1}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">Modifier le produit</h1>
                        <button type="button" className="btn-close" onClick={onClose} aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        {/* ... (le reste du formulaire est inchangé) */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateModal;