
// typage du client
export type ClientType = {
    // typeClient?: string,
    nom?: string,
    prenom?: string,
    adresse?: string,
    email?: string,
    password?: string,
    panier?: string,
    uid?: String,
};


// typage du produit
export type ProduitType = {
    _id?: string,
    nomProduit?: string,
    prix?: number,
    qteInit?: number,
    qteVendue?: number,
    qteRestante?: number,
    description?: string,
    category?: string, // ID de la catégorie
    image?: string,
    dateAdd?: string, // Date d'ajout du produit
    // dateCreation?: string, // Date de création du produit
    // typeProduit?: string,
    // categorie?: string,
    // marque?: string,
    // tags?: string[],
    // stock?: number,
    // note?: number,
    // avis?: string[],
    // promotions?: string[],
    // dateExpiration?: string,
    // dateModification?: string,
    // dateSuppression?: string,
    // nbreVues?: number,
    // nbreAchats?: number,
    // nbreFavoris?: number,
    // nbrePartages?: number,
    // nbreCommentaires?: number,
    // nbreSignets?: number,
    // nbrePartagesSociaux?: number,
    // nbreTelechargements?: number,
    // nbreLikes?: number,
    // nbreDislikes?: number
    // uid?: String
};


// typage de la commande
export type CommandeType = {
    // typeCommande?: string,
    nomCommande?: string,
    prix?: number,
    qte?: number,
    idClient?: string,
    // nbreArticles?: string,
    // uid?: String,
};

