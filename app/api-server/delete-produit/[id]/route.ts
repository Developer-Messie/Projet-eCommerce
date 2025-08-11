import { dbConnect } from "@/db/mongoConnect";
import { ProduitsCollection } from "@/models/produits-model";
import { NextResponse } from "next/server";

export const DELETE = async (req: Request) => {
    try {
        //===================================================================================================
        // Extracting the product ID from the request body
        const { uid } = await req.json()
        // Assuming uid is the identifier for the product to be deleted
        if (!uid) {
            return NextResponse.json({ message: "Identifiant du produit manquant." }, { status: 400 });
        }
        // Fetch the product data to ensure it exists before deletion
        const product = await ProduitsCollection.findById(uid);
        if (!product) {
            return NextResponse.json({ message: "Produit non trouvé." }, { status: 404 });
        }
        //===================================================================================================

        const objet = await req.json()
        const database = await dbConnect()

        if (!database || database !== "connecté") {
            return NextResponse.json({ message: "Erreur de connexion, vérifiez vos données." })
        }

        objet.qteRestante = objet.qteInit

        const data = await ProduitsCollection.findByIdAndDelete({ uid })

        return NextResponse.json({ message: "Produit supprimé avec succès.", data })

    } catch (error: any) {

        console.log(error);
        return NextResponse.json({ message: "Une erreur s'est produite." })
    }
}