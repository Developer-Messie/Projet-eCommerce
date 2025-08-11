import { dbConnect } from "@/db/mongoConnect";
import { ClientsCollection } from "@/models/clients-model";
import { NextResponse } from "next/server";
import { uid } from "uid";

export const POST = async (req: Request) => {
    try {

        const { idFirebase, email, password } = await req.json()

        const database = await dbConnect()
        if (!database || database !== "connecté") {
            return NextResponse.json({ message: "Erreur de connexion, vérifiez vos données." })
        }

        if (email === process.env.AdminEmail && password === process.env.AdminPassword) {
            return NextResponse.json({ message: "OK", data: { typeUser: "admin", uid: uid() } })
        }

        const data = await ClientsCollection.findOne({ uid: idFirebase })

        return NextResponse.json({ message: "Client récupéré avec succès.", data })

    } catch (error) {

        console.log(error);
        return NextResponse.json({ message: "Une erreur s'est produite." })
    }
}