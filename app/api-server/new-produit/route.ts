import { ProduitType } from "@/app/typage";
import { dbConnect } from "@/db/mongoConnect";
import { ProduitsCollection } from "@/models/produits-model";
import { HydratedDocument } from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {

        const objet = await req.json()

        const database = await dbConnect()
        if (!database || database !== "connecté") {
            return NextResponse.json({ message: "Erreur de connexion, vérifiez vos données." })
        }

        console.log(objet)

        const data: HydratedDocument<ProduitType> = new ProduitsCollection({
            ...objet,
            qteRestante: objet.qteInit
        });

        await data.save()
        return NextResponse.json({ message: "Produit ajouté avec succès.", data })

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