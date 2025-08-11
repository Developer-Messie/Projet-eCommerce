
import { models, model, Schema } from "mongoose";


const ProduitsSchema = new Schema({
    nomProduit: { type: String, required: true },
    qteInit: { type: Number, default: 0 },
    qteVendue: { type: Number, default: 0 },
    qteRestante: { type: Number, default: 0 },
    prix: { type: Number, default: 0 },
    description: { type: String, required: true },
    image: { type: String, required: true },
    // Ajout de la catégorie pour les produits ( optionnel - NEW)
    category: { type: String, required: true },
    dateAdd: { type: Date, default: () => new Date() },
    // uid: {type: String, require: true}
})

export const ProduitsCollection = models.Produits || model("Produits", ProduitsSchema)

