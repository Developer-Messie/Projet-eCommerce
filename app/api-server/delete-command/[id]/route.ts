import { dbConnect } from "@/db/mongoConnect";
import { CommandesCollection } from "@/models/commandes-model";
import { NextResponse } from "next/server";

export const DELETE = async (req: Request) => {
    try {

        const { uid } = await req.json()

        const objet = await req.json()
        const database = await dbConnect()

        if (!database || database !== "connecté") {
            return NextResponse.json({ message: "Erreur de connexion, vérifiez vos données." })
        }

        objet.qteRestante = objet.qteInit

        const data = await CommandesCollection.findByIdAndDelete({ uid })

        return NextResponse.json({ message: "Commande supprimée avec succès.", data })


    } catch (error: any) {

        console.log(error);
        return NextResponse.json({ message: "Une erreur s'est produite." })

    }
}