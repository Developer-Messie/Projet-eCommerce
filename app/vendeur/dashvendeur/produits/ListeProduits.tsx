// ListeProduits.jsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { BsEye } from "react-icons/bs";
import { BiEdit, BiPlus, BiTrash } from "react-icons/bi";
import UpdateModal from "./UpdateModal";
import IncrementeModal from "./IncrementeModal";
import DetailsProduit from "./DetailsProduit";
import { ToastError, ToastSuccess } from "@/controllers/toast";
import { ProduitType } from "@/app/typage";
import { FormatPrix } from "@/controllers/formatprix";
import ConfirmationModal from "./ConfirmationModal";
// import ConfirmationModal from "./ConfirmationModal";

type Props = {
    produits: ProduitType[];
    setProduits: React.Dispatch<React.SetStateAction<ProduitType[]>>;
};

function ListeProduits({ produits, setProduits }: Props) {
    const [selectProduit, setSelectProduit] = useState<ProduitType | null>(null);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isIncrementeModalOpen, setIsIncrementeModalOpen] = useState(false);
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

    const handleOpenModal = (item: ProduitType, modalType: 'details' | 'update' | 'increment') => {
        setSelectProduit(item);
        if (modalType === 'details') setIsDetailModalOpen(true);
        if (modalType === 'update') setIsUpdateModalOpen(true);
        if (modalType === 'increment') setIsIncrementeModalOpen(true);
    };

    const handleCloseAllModals = () => {
        setIsDetailModalOpen(false);
        setIsUpdateModalOpen(false);
        setIsIncrementeModalOpen(false);
        setIsConfirmationModalOpen(false);
        setSelectProduit(null);
    };

    const handleOpenConfirmation = (item: ProduitType) => {
        setSelectProduit(item);
        setIsConfirmationModalOpen(true);
    };

    const supprimerProduit = async () => {
        if (!selectProduit) return;

        try {
            const response = await axios.delete(`/server/delete-produit/${selectProduit._id}`);
            if (response.data.message === "ok") {
                setProduits((prev) => prev.filter((el) => el._id !== selectProduit._id));
                ToastSuccess("Produit supprimé avec succès");
            } else {
                ToastError("La suppression a échoué.");
            }
        } catch (error) {
            console.error(error);
            ToastError("Une erreur s'est produite");
        } finally {
            handleCloseAllModals();
        }
    };

    return (
        <div className="table-responsive">
            <table className="table table-hover">
                <thead className="text-center">
                    <tr>
                        <th>Nom</th>
                        <th>Prix</th>
                        <th>Qté Restante</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="mx-auto text-center">
                    {produits.length > 0 ? (
                        produits.map((item) => (
                            <tr key={item._id} className="align-middle mx-auto">
                                <td className="d-flex align-items-center gap-2">
                                    <div style={{ width: 50, height: 50, position: "relative" }} className="rounded-3 overflow-hidden">
                                        <Image
                                            src={item.image || "/images/placeholder.png"}
                                            alt={item.nomProduit || "Produit"}
                                            fill
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>
                                    <p className="mb-0">{item.nomProduit}</p>
                                </td>
                                <td>{item.prix !== undefined ? FormatPrix(item.prix) : "N/A"}</td>
                                <td>{item.qteRestante}</td>
                                <td>
                                    <div className="d-flex gap-2">
                                        <button title="Voir" className="btn btn-sm btn-info" onClick={() => handleOpenModal(item, 'details')}>
                                            <BsEye />
                                        </button>
                                        <button title="Modifier" className="btn btn-sm btn-warning" onClick={() => handleOpenModal(item, 'update')}>
                                            <BiEdit />
                                        </button>
                                        <button title="Ajouter au stock" className="btn btn-sm btn-primary" onClick={() => handleOpenModal(item, 'increment')}>
                                            <BiPlus />
                                        </button>
                                        <button title="Supprimer" className="btn btn-sm btn-danger" onClick={() => handleOpenConfirmation(item)}>
                                            <BiTrash />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4} className="text-center">Aucun produit pour l'instant</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* EMPLACEMENT DES MODALES CONTRÔLÉES  */}
            {isDetailModalOpen && <DetailsProduit item={selectProduit} />}
            {isUpdateModalOpen && <UpdateModal item={selectProduit} produits={produits} setProduits={setProduits} onClose={handleCloseAllModals} />}
            {isIncrementeModalOpen && <IncrementeModal item={selectProduit} produits={produits} setProduits={setProduits} onClose={handleCloseAllModals} />}

            {/* ICI ! C'est l'emplacement idéal pour la modale de confirmation */}
            {isConfirmationModalOpen && (
                <ConfirmationModal
                    onConfirm={supprimerProduit}
                    onCancel={handleCloseAllModals}
                    message={`Voulez-vous vraiment supprimer "${selectProduit?.nomProduit}" ?`}
                />
            )}
        </div>
    );
}

export default ListeProduits;