"use client"
import React, { useState } from 'react'

function PopupModal({ message }: { message: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="open-modal-btn">
        Ouvrir le modal
      </button>

      {isOpen && (
        <div className="modal-backdrop" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Mon Modal</h2>
              <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
            </div>
            <div className="modal-body">
              <p>{message}</p>
              <p>salut</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PopupModal
