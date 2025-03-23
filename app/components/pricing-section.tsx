import React from "react";
import {CircleCheck} from "lucide-react";
import {motion} from "framer-motion";

export function PricingSection() {
    const serviceCategories = [
        {
            title: 'Diagnostika a kontroly',
            services: [
                { name: 'Základní diagnostika vozidla', price: '600 Kč' },
                { name: 'Kontrola klimatizace a doplnění oleje', price: '900 Kč' },
                { name: 'Měření osciloskopem', price: '1500 Kč' },
            ],
        },
        {
            title: 'Údržba a opravy',
            services: [
                { name: 'Leštění světlometů a zadních světel', price: '500 Kč' },
                { name: 'Výměna pneumatik (stejný ráfek, za kolo)', price: '250 Kč' },
                { name: 'Doplnění chladiva (za gram)', price: '2 Kč' },
                { name: 'Montáž tažného zařízení', price: '2000-2500 Kč' },
                { name: 'Hodinová sazba práce', price: '600 Kč' },
            ],
        },
        {
            title: 'Prohlídky a čištění',
            services: [
                { name: 'Čištění vozidla ozónovým generátorem', price: '500 Kč' },
                { name: 'Příprava a provedení STK a emisí', price: '1500 Kč' },
            ],
        },
    ];

    return (
        <section className="md:p-10 py-6" aria-label={"pricing section"}>
            <motion.h1
                className="text-5xl font-medium leading-tight tracking-wide flex-1 mb-10 text-center"
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
                Ceník
            </motion.h1>
            <div className="container mx-auto p-4">
            {serviceCategories.map((category, index) => (
                <motion.div
                    key={index}
                    className="bg-white rounded-3xl shadow p-10 mb-5"
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.5,
                            delay: 0.2*index ,
                            ease: "easeOut",
                        },
                    }}
                    viewport={{once: true}}
                >
                    <h3 className="text-3xl font-medium mb-5">{category.title}</h3>
                    <ul className="space-y-2">
                        {category.services.map((service, i) => (
                            <li
                                key={i}
                                className="flex flex-row items-center justify-between"
                            >
                                <div className="flex-1 ml-2">{service.name}</div>
                                <div className="font-semibold">{service.price}</div>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            ))}
                <motion.p
                    className="mt-6 text-sm text-gray-600"

                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.5,
                            delay: 0.2*3 ,
                            ease: "easeOut",
                        },
                    }}
                    viewport={{once: true}}
                >
                    * Uvedené ceny jsou pouze orientační. Konečná cena se může lišit v závislosti na specifických
                    potřebách Vašeho vozu. Pro přesnou cenovou nabídku nás neváhejte <span className="font-bold underline cursor-pointer">kontaktovat</span>.
                </motion.p>
        </div>
        </section>
    )
}