import { model, models, Schema } from "mongoose";

const CommandesSchema = new Schema({
    qte: { type: Number, require: true, default: 0 },
    prix: { type: Number, require: true, default: 0 },
    panier: [],
    informationClient: {},
    idClient: { type: String },
    dateCommande: { type: Date, default: new Date() },
    statut: { type: String, require: true }
})

export const CommandesCollection = models.Commandes || model("Commandes", CommandesSchema)