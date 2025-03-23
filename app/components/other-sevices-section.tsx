import {Card, Carousel} from "~/components/ui/carousel";
import React from "react";

import alternatorRepair from "/images/services/alternator_repair.jpg"
import autoAlarm from "/images/services/autoalarm_repair.jpg"
import batery from "/images/services/baterysystem_repair.jpg"
import breakRepair from "/images/services/breaksystem_repair.jpg"
import exhaustSystem from "/images/services/exhaustsystem_repair.jpg"
import interiorCleaning from "/images/services/interiorcleaning_repair.jpg"
import parkingRepair from "/images/services/parking_repair.jpg"
import underCarage from "/images/services/undercaragesystem_repair.jpg"
import windsheildRepair from "/images/services/windshield_repair.jpg"
import airConditiongRepair from "/images/services/airconditioning_repair.jpg"

const data = [
    {
        description: "Kompletní servis klimatizačních systémů, dezinfekce.",
        title: "Opravy klimatizace",
        src: airConditiongRepair,
    },
    {
        description: "Výměna a oprava brzdových komponentů, ABS",
        title: "Brzdový servis",
        src: breakRepair,
    },
    {
        description: "Výměna a opravy výfuků, svařování.",
        title: "Výfukové systémy",
        src: exhaustSystem,
    },

    {
        description: "Opravy a výměny podvozkových dílů, geometrie kol.",
        title: "Podvozek",
        src: underCarage,
    },
    {
        description: "Prodej, výměna, testování a dobíjení baterií.",
        title: "Autobaterie",
        src: batery,
    },
    {
        description: "Opravy a repase startérů a alternátorů.",
        title: "Startéry a alternátory",
        src: alternatorRepair,
    },
    {
        description: "Výměna a oprava autoskel",
        title: "Autosklo",
        src: windsheildRepair,
    },
    {
        description: "Montáž parkovacích systémů.",
        title: "Parkovací senzory/kamery",
        src: parkingRepair,
    },
    {
        description: "Montáž zabezpečovacích systémů.",
        title: "Autoalarmy",
        src: autoAlarm,
    },
    {
        description: "Hloubkové čištění interiéru vozidla.",
        title: "Čištění interiéru",
        src: interiorCleaning,
    },
];

export function OtherSevicesSection() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));


    return (
        <section className="md:p-10 py-6 max-w-7xl" aria-label={"other sevices"}>
            <h1 className="text-5xl font-medium leading-tight tracking-wide flex-1  text-center">
                A to není vše!
            </h1>
            <div className="md:p-5">
                <Carousel items={cards} />
            </div>
        </section>
    )
}