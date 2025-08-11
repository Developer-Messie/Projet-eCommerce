"use client"
import React from 'react'
import { Bounce, ToastContainer } from 'react-toastify'

function ToastComponent() {
    return (
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Bounce}
        />
    )
}

export default ToastComponent
