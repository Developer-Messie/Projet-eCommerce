// route.ts
import { dbConnect } from "@/db/mongoConnect";
import { ClientsCollection } from "@/models/clients-model";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {
        const { idFirebase, email, password } = await req.json();

        const database = await dbConnect();
        if (!database || database !== "connecté") {
            return NextResponse.json({ message: "Erreur de connexion à la base de données." }, { status: 500 });
        }

        // Première vérification : est-ce que c'est l'administrateur ?
        // C'est une bonne pratique de faire cette vérification en premier pour éviter de chercher inutilement dans la base de données.
        if (
            email === process.env.AdminEmail &&
            password === process.env.AdminPassword
        ) {
            return NextResponse.json({
                message: "Client récupéré avec succès.",
                data: {
                    typeUser: "admin",
                    nom: "Administrateur",
                    email: email,
                    // Vous n'avez pas besoin d'un ID Firebase pour l'admin local.
                    // Si vous en avez besoin d'un, assurez-vous qu'il ne rentre pas en conflit avec un vrai UID.
                    uid: "admin-local-id"
                }
            });
        }

        // Deuxième vérification : si ce n'est pas l'admin, on vérifie si c'est un client Firebase.
        // La variable idFirebase est nécessaire pour cette étape.
        if (idFirebase) {
            const clientData = await ClientsCollection.findOne({ uid: idFirebase });

            if (!clientData) {
                return NextResponse.json({ message: "Client introuvable." }, { status: 404 });
            }

            return NextResponse.json({ message: "Client récupéré avec succès.", data: clientData });
        }

        // Si aucune des conditions n'est remplie
        return NextResponse.json({ message: "Informations d'authentification invalides." }, { status: 401 });

    } catch (error) {
        console.error("Erreur dans /api-server/get-client :", error);
        return NextResponse.json({ message: "Une erreur s'est produite." }, { status: 500 });
    }
};