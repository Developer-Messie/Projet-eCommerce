"use client";

import React, { useState } from 'react';
import { FileUploaderRegular } from '@uploadcare/react-uploader/next';
import '@uploadcare/react-uploader/core.css';
import { OutputCollectionState, OutputCollectionStatus } from '@uploadcare/react-uploader';
import axios from 'axios';
import { ToastError, ToastSuccess } from '@/controllers/toast';
import { ProduitType } from '@/app/typage';

// Le type du formulaire correspond exactement à la structure de votre schéma
type FormDataType = {
    nomProduit: string;
    prix: number;
    qteInit: number;
    image: string;
    description: string;
    category: string;
};

// Liste de catégories pour le champ de sélection
const categories = [
    { value: "complement-alimentaire", label: "Complément Alimentaire" },
    { value: "aliment-dietetique", label: "Aliment Diététique" },
    { value: "kit-maladies", label: "Kit Maladies" },
    { value: "cosmetique", label: "Cosmétique" },
    { value: "entretien-maison", label: "Entretien de Maison" },
    { value: "hygiene-femme", label: "Hygiène Femme" },
    { value: "bucco-dentaire-agricole", label: "Bucco-dentaires & Agricoles" },
];

function ModalNewProduit({
    produits,
    setProduits,
}: {
    produits: ProduitType[];
    setProduits: React.Dispatch<React.SetStateAction<ProduitType[]>>;
}) {
    const [formData, setFormData] = useState<FormDataType>({
        nomProduit: '',
        prix: 0,
        qteInit: 0,
        image: '',
        description: '',
        category: '',
    });

    // La fonction gère tous les types de champs (input, textarea, select)
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: (name === "prix" || name === "qteInit") ? Number(value) : value,
        }));
    };

    const recupImageUrl = (
        e: OutputCollectionState<OutputCollectionStatus, "maybe-has-group">
    ) => {
        const url = e?.allEntries?.[0]?.cdnUrl;
        if (url) {
            setFormData(prev => ({ ...prev, image: url }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // Envoi des données du formulaire à l'API. La structure de `formData` correspond au schéma Mongoose.
            const req = await axios.post("/api-server/new-produit", formData);

            if (req?.data?.message === "Produit ajouté avec succès.") {
                setProduits(prev => [...prev, req.data.data]);

                const closeBtn = document.querySelector("#modalNewProduit [data-bs-dismiss='modal']");
                if (closeBtn) {
                    (closeBtn as HTMLElement).click();
                }

                setFormData({
                    nomProduit: '',
                    prix: 0,
                    qteInit: 0,
                    image: '',
                    description: '',
                    category: '',
                });

                ToastSuccess("Produit ajouté avec succès");
            }
        } catch (error) {
            console.error(error);
            ToastError("Une erreur s'est produite");
        }
    };

    return (
        <div
            className="modal fade"
            id="modalNewProduit"
            tabIndex={-1}
            aria-labelledby="modalNewProduitLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title fs-5" id="modalNewProduitLabel">
                            Nouveau produit
                        </h3>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Nom de l'article</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="nomProduit"
                                    value={formData.nomProduit}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Prix</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="prix"
                                    value={formData.prix}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Quantité initiale</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="qteInit"
                                    value={formData.qteInit}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea
                                    className="form-control"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Catégorie</label>
                                <select
                                    className="form-control"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Sélectionnez une catégorie</option>
                                    {categories.map(cat => (
                                        <option key={cat.value} value={cat.value}>{cat.label}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Image du Produit</label>
                                <FileUploaderRegular
                                    sourceList="local, camera, facebook, gdrive"
                                    classNameUploader="uc-light"
                                    pubkey={process.env.NEXT_PUBLIC_UploadCare ?? ""}
                                    onChange={recupImageUrl}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Valider
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalNewProduit;