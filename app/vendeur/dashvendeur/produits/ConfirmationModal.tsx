// ConfirmationModal.jsx
"use client";

import React from 'react';

type Props = {
    onConfirm: () => void;
    onCancel: () => void;
    message?: string; // Message personnalisable
};

function ConfirmationModal({ onConfirm, onCancel, message = "Êtes-vous sûr de vouloir continuer ? Cette action est irréversible." }: Props) {
    return (
        <div className="modal fade show d-block" tabIndex={-1} role="dialog" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog modal-sm">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirmation</h5>
                        <button type="button" className="btn-close" onClick={onCancel} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>{message}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onCancel}>Annuler</button>
                        <button type="button" className="btn btn-danger" onClick={onConfirm}>Confirmer</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationModal;