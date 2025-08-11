import { ProduitType } from '@/app/typage'
import axios from 'axios'
import React from 'react'

export const displayProduits = async (nbreProduitAfficher: number) => {

    try {

        const req = await axios.get("/api-server/get-produits-all")

        if (req?.data.data) {

            const data: ProduitType[] = req?.data?.data || []

            const trieDate = data.sort((a, b) => new Date(b?.dateAdd!).getTime() - new Date(a?.dateAdd!).getTime());

            if (nbreProduitAfficher !== 0) {
                return trieDate
            }
        }
    } catch (error) {

        console.log(error);
    }
}
