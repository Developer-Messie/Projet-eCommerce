import ProtectedRouteVendeur from '@/components/ProtectedRouteVendeur';
import React from 'react'

function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <ProtectedRouteVendeur>
            <div className="container w-100">
                {children}
            </div>
        </ProtectedRouteVendeur>
    )
}

export default layout
