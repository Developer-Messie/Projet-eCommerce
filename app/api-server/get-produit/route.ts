import { dbConnect } from "@/db/mongoConnect";
// import { ClientsCollection } from "@/models/clients-model";
import { ProduitsCollection } from "@/models/produits-model";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
    try {

        const { uid } = await req.json()
        // Assuming uid is the identifier for the product to be fetched

        const objet = await req.json()
        const database = await dbConnect()

        if (!database || database !== "connecté") {
            return NextResponse.json({ message: "Erreur de connexion, vérifiez vos données." })
        }

        objet.qteRestante = objet.qteInit

        const data = await ProduitsCollection.findById({ uid })

        return NextResponse.json({ message: "Produit récupéré avec succès.", data })

    } catch (error: any) {

        console.log(error);
        return NextResponse.json({ message: "Une erreur s'est produite." })
    }
}