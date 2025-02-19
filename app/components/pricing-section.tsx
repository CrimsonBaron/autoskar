import React from "react";

export function PricingSection() {
    return (
        <div className="md:p-10 py-6">
            <h1 className="text-5xl font-medium leading-tight tracking-wide flex-1  text-center">
                Ceník
            </h1>
            <div className="mt-10 cursor-pointer">
                <div className="container mx-auto py-8 bg-gray-100 p-12 rounded-3xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border border-gray-200 p-4 text-center rounded-3xl">
                            <h3 className="text-lg font-bold">Diagnostika vozu základní proměření</h3>
                            <p className="text-2xl font-semibold">500 Kč</p>
                        </div>
                        <div className="border border-gray-200 p-4 text-center rounded-3xl">
                            <h3 className="text-lg font-bold">Vyleštění předních a zadních světel</h3>
                            <p className="text-2xl font-semibold">500 Kč</p>
                        </div>
                        <div className="border border-gray-200 p-4 text-center rounded-3xl">
                            <h3 className="text-lg font-bold">Kontrola klima a doplnění oleje do klima</h3>
                            <p className="text-2xl font-semibold">500 Kč</p>
                        </div>
                        <div className="border border-gray-200 p-4 text-center rounded-3xl">
                            <h3 className="text-lg font-bold">Kompletní přezutí pneu na stejný disk (1 kolo)</h3>
                            <p className="text-2xl font-semibold">200 Kč</p>
                        </div>
                        <div className="border border-gray-200 p-4 text-center rounded-3xl">
                            <h3 className="text-lg font-bold">Doplnění chladiva 134a (1 gram)</h3>
                            <p className="text-2xl font-semibold">2 Kč</p>
                        </div>
                        <div className="border border-gray-200 p-4 text-center rounded-3xl">
                            <h3 className="text-lg font-bold">Vyčištění vozu ozónovačem</h3>
                            <p className="text-2xl font-semibold">500 Kč</p>
                        </div>
                        <div className="border border-gray-200 p-4 text-center rounded-3xl">
                            <h3 className="text-lg font-bold">Měření osciloskopem</h3>
                            <p className="text-2xl font-semibold">1500 Kč</p>
                        </div>
                        <div className="border border-gray-200 p-4 text-center rounded-3xl">
                            <h3 className="text-lg font-bold">Montáž tažného zařízení</h3>
                            <p className="text-2xl font-semibold">1500-2000 Kč</p>
                        </div>
                        <div className="border border-gray-200 p-4 text-center rounded-3xl">
                            <h3 className="text-lg font-bold">Příprava a provedení STK a emisí</h3>
                            <p className="text-2xl font-semibold">1500 Kč</p>
                        </div>
                        <div className="border border-gray-200 p-4 text-center rounded-3xl">
                            <h3 className="text-lg font-bold">Hodina opravy vozu</h3>
                            <p className="text-2xl font-semibold">500 Kč</p>
                        </div>
                    </div>
                </div>
                <div className="mt-6 px-10">
                    <p className="text-gray-600">
                        * Uvedené ceny jsou pouze orientační. Konečná cena se může lišit v závislosti na specifických
                        potřebách Vašeho vozu. Pro přesnou cenovou nabídku nás neváhejte <span className="font-bold underline cursor-pointer">kontaktovat</span>.
                    </p>
                </div>
            </div>
        </div>
    )
}