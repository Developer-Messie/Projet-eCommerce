
import Hero from "@/components/home/Hero";
import Nontitre from "@/components/home/Nontitre";
import Compo from "@/components/home/Compo";
import Ganoderma from "@/components/home/Ganoderma";
import Flax from "@/components/home/Flax";
import Defil from "@/components/home/Defil";
import Temoignages from "./temoignages/page";
import Amla from "@/components/home/Amla";



export default function Home() {
  return (

    <>
      <div className="main-content-page">
        <Hero />
        <Nontitre />
        <Compo />
        <Ganoderma />
        <Flax />
        <Amla />
        <Defil />
        <Temoignages />
      </div>
    </>
  );
}
// export default Home