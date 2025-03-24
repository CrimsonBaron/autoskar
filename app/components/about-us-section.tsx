import React from "react";
import {motion} from "framer-motion";

export function AboutUsSection() {
    return (
        <section className="md:p-20 w-full flex flex-col justify-center items-center" aria-label="about-us">
            <motion.div
                className="md:p-10 p-4 text-center md:w-xl  flex flex-col gap-2 text-black/60 border border-black/20 rounded-3xl"
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5,
                        delay: 0.2 ,
                        ease: "easeOut",
                    },
                }}
                viewport={{once: true}}
            >
                <h2 className="text-2xl ">O nás</h2>
                <p>Už od roku 2007 poskytuji komplexní služby v oblasti autoservisu a pneuservisu. Specializuji se na širokou škálu úkonů, od autodiagnostiky a odhalování závad pomocí moderních technologií, jako je osciloskop, až po čištění DPF a kontrolu stavu vozidel s DPF a SCR (Eolys, AdBlue).</p>
                <p>Jako zkušený automechanik a majitel servisu, se osobně starám o opravy alternátorů, startérů a provádím veškeré standardní automechanické (servisní prohlídky) a karosářské práce (včetně oprav po nehodách).</p>
                <p>Díky kompletně nově vybavené dílně a dlouholetým zkušenostem v oboru jsem zárukou kvalitních služeb a úspěšného vyřešení jakéhokoli problému s vaším vozidlem.</p>
            </motion.div>
        </section>
    )
}