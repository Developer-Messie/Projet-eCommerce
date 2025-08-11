// app/api-server/get-produits-all/route.ts
import { dbConnect } from "@/db/mongoConnect";
import { ProduitsCollection } from "@/models/produits-model";
import { NextResponse } from "next/server";


export const GET = async (req: Request) => {
    try {
        // Connexion à la base de données
        const database = await dbConnect();

        if (!database || database !== "connecté") {
            return NextResponse.json({ message: "Erreur de connexion. Veuillez vérifier vos données." })
        }

        // Récupération des produits
        const data = await ProduitsCollection.find();

        return NextResponse.json({
            message: "Produits récupérés avec succès.", data,
        });
    } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);

        return NextResponse.json(
            { message: "Une erreur s'est produite." },
            { status: 500 }
        );
    }
}; 