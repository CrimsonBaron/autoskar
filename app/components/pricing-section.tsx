import React from "react";
import {CircleCheck} from "lucide-react";

export function PricingSection() {
    const serviceCategories = [
        {
            title: 'Diagnostika a kontroly',
            services: [
                { name: 'Základní diagnostika vozidla', price: '500 Kč' },
                { name: 'Kontrola klimatizace a doplnění oleje', price: '500 Kč' },
                { name: 'Měření osciloskopem', price: '1500 Kč' },
            ],
        },
        {
            title: 'Údržba a opravy',
            services: [
                { name: 'Leštění světlometů a zadních světel', price: '500 Kč' },
                { name: 'Výměna pneumatik (stejný ráfek, za kolo)', price: '200 Kč' },
                { name: 'Doplnění chladiva (za gram)', price: '2 Kč' },
                { name: 'Montáž tažného zařízení', price: '1500-2000 Kč' },
                { name: 'Hodinová sazba práce', price: '500 Kč' },
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
            <h1 className="text-5xl font-medium leading-tight tracking-wide flex-1 mb-10 text-center">
                Ceník
            </h1>
            <div className="container mx-auto p-4">
            {serviceCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-3xl shadow p-10 mb-5">
                    <h3 className="text-3xl font-medium mb-5">{category.title}</h3>
                    <ul className="space-y-2">
                        {category.services.map((service, i) => (
                            <li
                                key={i}
                                className="flex flex-row items-center justify-between"
                            >
                                <CircleCheck className={"stroke-green-300/80"}/>
                                <div className="flex-1 ml-2">{service.name}</div>
                                <div className="font-semibold">{service.price}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
                <p className="mt-6 text-sm text-gray-600">
                    * Uvedené ceny jsou pouze orientační. Konečná cena se může lišit v závislosti na specifických
                    potřebách Vašeho vozu. Pro přesnou cenovou nabídku nás neváhejte <span className="font-bold underline cursor-pointer">kontaktovat</span>.
                </p>
        </div>
        </section>
    )
}