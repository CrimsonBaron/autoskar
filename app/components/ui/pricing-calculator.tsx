import React, {useState} from "react";
import { Phone } from "lucide-react";

export function PricingCalculator() {
  const [count, setCount] = useState(10);


  return (
    <div className="container mx-auto py-8 bg-gray-100 p-10 rounded-3xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border border-gray-200 p-4 text-center hover:bg-gray-200">
          <h3 className="text-lg font-bold">Diagnostika vozu základní proměření</h3>
          <p className="text-2xl font-semibold">500 Kč</p>
        </div>
        <div className="border border-gray-200 p-4 text-center hover:bg-gray-200">
          <h3 className="text-lg font-bold">Vyleštění předních a zadních světel</h3>
          <p className="text-2xl font-semibold">500 Kč</p>
        </div>
        <div className="border border-gray-200 p-4 text-center hover:bg-gray-200">
          <h3 className="text-lg font-bold">Kontrola klima a doplnění oleje do klima</h3>
          <p className="text-2xl font-semibold">500 Kč</p>
        </div>
        <div className="border border-gray-200 p-4 text-center hover:bg-gray-200">
          <h3 className="text-lg font-bold">Kompletní přezutí pneu na stejný disk (1 kolo)</h3>
          <p className="text-2xl font-semibold">200 Kč</p>
        </div>
        <div className="border border-gray-200 p-4 text-center hover:bg-gray-200">
          <h3 className="text-lg font-bold">Doplnění chladiva 134a (1 gram)</h3>
          <p className="text-2xl font-semibold">2 Kč</p>
        </div>
        <div className="border border-gray-200 p-4 text-center hover:bg-gray-200">
          <h3 className="text-lg font-bold">Vyčištění vozu ozónovačem</h3>
          <p className="text-2xl font-semibold">500 Kč</p>
        </div>
        <div className="border border-gray-200 p-4 text-center hover:bg-gray-200">
          <h3 className="text-lg font-bold">Měření osciloskopem</h3>
          <p className="text-2xl font-semibold">1500 Kč</p>
        </div>
        <div className="border border-gray-200 p-4 text-center hover:bg-gray-200">
          <h3 className="text-lg font-bold">Montáž tažného zařízení</h3>
          <p className="text-2xl font-semibold">1500-2000 Kč</p>
        </div>
        <div className="border border-gray-200 p-4 text-center hover:bg-gray-200">
          <h3 className="text-lg font-bold">Příprava a provedení STK a emisí</h3>
          <p className="text-2xl font-semibold">1500 Kč</p>
        </div>
        <div className="border border-gray-200 p-4 text-center hover:bg-gray-200">
          <h3 className="text-lg font-bold">Hodina opravy vozu</h3>
          <p className="text-2xl font-semibold">500 Kč</p>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          * Uvedené ceny jsou pouze orientační. Konečná cena se může lišit v závislosti na specifických
          potřebách Vašeho vozu. Pro přesnou cenovou nabídku nás neváhejte kontaktovat.
        </p>
      </div>
    </div>
  )
}