import { model, models, Schema } from "mongoose";

const ClientsSchema = new Schema({
    nom: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    dateAdd: { type: Date, default: new Date() },
    uid: { type: String, require: true }
})

export const ClientsCollection = models.Clients || model("Clients", ClientsSchema)