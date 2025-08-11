import { model, models, Schema } from "mongoose";

const UsersSchema = new Schema({
    nom: { type: String, require: true },
    prenom: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    uid: { type: String, require: true },
    typeUser: { type: String, require: true },
    adresse: { type: String },
})

export const UsersCollection = models.Users || model("Users", UsersSchema)