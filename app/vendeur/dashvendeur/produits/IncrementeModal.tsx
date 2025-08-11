// IncrementeModal.jsx
"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FileUploaderRegular } from '@uploadcare/react-uploader/next';
import '@uploadcare/react-uploader/core.css';
import { OutputCollectionState, OutputCollectionStatus } from '@uploadcare/react-uploader';
import { ProduitType } from '@/app/typage';
import { ToastError, ToastSuccess } from '@/controllers/toast';

type Props = {
    produits: ProduitType[];
    setProduits: React.Dispatch<React.SetStateAction<ProduitType[]>>;
    item: ProduitType | null;
    onClose: () => void;
};

function IncrementeModal({ produits, setProduits, item, onClose }: Props) {
    const [qteInc, setQteInc] = useState<number>(0);
    const [formData, setFormData] = useState<ProduitType | null>(null);

    useEffect(() => {
        if (item) {
            setFormData({ ...item });
            setQteInc(0); // Réinitialiser la quantité incrémentée
        }
    }, [item]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        setQteInc(value);
        if (formData) {
            setFormData(prev => ({
                ...prev!,
                qteRestante: (item?.qteRestante || 0) + value,
            }));
        }
    };

    const recupImageUrl = (e: OutputCollectionState<OutputCollectionStatus, "maybe-has-group">) => {
        const url = e?.allEntries[0]?.cdnUrl;
        if (url) {
            setFormData(prev => ({ ...prev!, image: url }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const req = await axios.put(`/server/update-produit/${item?._id}`, formData);
            if (req?.data?.message === "ok") {
                // Utilisation de .map() pour une mise à jour plus propre et lisible
                setProduits(prev => prev.map(el => (el._id === item?._id ? req.data.data : el)));
                onClose(); // Ferme la modale via la prop
                ToastSuccess("Produit incrémenté avec succès");
            } else {
                ToastError("La mise à jour a échoué.");
            }
        } catch (error) {
            console.error(error);
            ToastError("Une erreur s'est produite");
        }
    };

    if (!item) return null;

    return (
        <div className="modal fade show d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">Incrémenter le stock</h1>
                        <button type="button" className="btn-close" onClick={onClose} aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            {/* ... (le reste du formulaire est inchangé) */}
                            <button type="submit" className="btn btn-primary mt-3">Incrémenter</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IncrementeModal;