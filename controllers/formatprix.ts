/* export const FormatPrix = (prix: number) => {
    if (isNaN(prix)) return '0 FCFA';
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'XOF',
        minimumFractionDigits: 0
    }).format(prix);
}; */


export const FormatPrix = (prix: number) => {
    if (isNaN(prix)) return '0 FCFA';
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'XOF',
        minimumFractionDigits: 0
    }).format(prix);
};


// export const FormatPrixWithSymbol = (prix: number) => {
//     if (isNaN(prix)) return '0 FCFA';
//     return new Intl.NumberFormat('fr-FR', {
//         style: 'currency',
//         currency: 'XOF',
//         minimumFractionDigits: 0
//     }).format(prix).replace('XOF', 'FCFA');
// };