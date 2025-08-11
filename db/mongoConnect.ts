import mongoose from "mongoose"


export const dbConnect = async () => {
    try {

        await mongoose.connect(process.env.mongo_uri_local!, { dbName: "mathis-bio" })
        return "connecté"

    } catch (error) {

        console.log(error)
    }
}