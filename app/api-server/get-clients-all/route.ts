import { dbConnect } from "@/db/mongoConnect";
import { ClientsCollection } from "@/models/clients-model";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {

        const database = await dbConnect()
        if (!database || database !== "connecté") {
            return NextResponse.json({ message: "Erreur de connexion, vérifiez vos données." })
        }

        const data = await ClientsCollection.find()

        return NextResponse.json({ message: "Client récupéré avec succès.", data })

    } catch (error) {

        console.log(error);
        return NextResponse.json({ message: "Une erreur s'est produite." })
    }
}