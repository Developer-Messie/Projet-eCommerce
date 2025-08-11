import { dbConnect } from "@/db/mongoConnect";
import { ClientsCollection } from "@/models/clients-model";
import { CommandesCollection } from "@/models/commandes-model";
import { NextResponse } from "next/server";

export const PATCH = async (req: Request, { params }: { params: Promise<{ id: string }> }) => {
    try {

        const { id } = await params

        const objet = await req.json()
        const database = await dbConnect()

        if (!database || database !== "connecté") {
            return NextResponse.json({ message: "Erreur de connexion, vérifiez vos données." })
        }

        const data = await CommandesCollection.findByIdAndUpdate(id, objet, { new: true })

        return NextResponse.json({ message: "Commande mise à jour avec succès.", data })


    } catch (error: any) {

        if (error.code === 11000 && error.keyValue) {
            return NextResponse.json({
                message: "Champ(s) dupliqué(s)",
                ChampsDupliques: error.keyValue
            });
        }

        console.log(error);
        return NextResponse.json({ message: "Une erreur s'est produite." })
    }
}