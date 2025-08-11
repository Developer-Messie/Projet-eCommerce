import { dbConnect } from "@/db/mongoConnect";
import { ProduitsCollection } from "@/models/produits-model";
import { NextResponse } from "next/server";

export const GET = async (req: Request, { params }: { params: Promise<{ NumPage: Number }> }) => {
    try {

        const { NumPage } = await params

        const database = await dbConnect()

        if (!database || database !== "connecté") {
            return NextResponse.json({ message: "Erreur de connexion, vérifiez vos données." })
        }

        // const { pagination } = await req.json()

        const data = await ProduitsCollection.find()
            .skip((Number(NumPage) - 1) * 100)
            .limit(100)

        return NextResponse.json({ data })


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