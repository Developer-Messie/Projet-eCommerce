import { dbConnect } from "@/db/mongoConnect";
import { ClientsCollection } from "@/models/clients-model";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {

        const objet = await req.json()
        const database = await dbConnect()

        if (!database || database !== "connecté") {
            return NextResponse.json({ message: "Erreur de connexion, vérifiez vos données." })
        }

        console.log(objet)
        const data = new ClientsCollection(objet)
        await data.save()

        console.log("Client ajouté avec succès :", data)

        return NextResponse.json({ message: "Client ajouté avec succès." })

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