
import ProtectedRouteClient from '@/components/ProtectedRouteClient';
import React from 'react'

function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ProtectedRouteClient>
            <>
                <div>
                    {children}
                </div>
            </>
        </ProtectedRouteClient>
    )
}

export default layout
