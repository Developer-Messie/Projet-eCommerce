import { auth } from "@/firebase/firebaseConfig";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const deconnexion = async (router: AppRouterInstance) => {
    await auth.signOut();
    localStorage.removeItem('user');
    // localStorage.removeItem('token');
    router.push('/connexion');
    console.log("Déconnexion réussie");
    return { success: true, message: "Déconnexion réussie" };
}