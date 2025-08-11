// app/_not-found.tsx

import Link from 'next/link';

export default function NotFound() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404 - Page non trouvée</h1>
            <p>Désolé, la page que vous cherchez n'existe pas.</p>
            <Link href="/">Retour à la page d'accueil</Link>
        </div>
    );
}