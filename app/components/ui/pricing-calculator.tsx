import React, { useState, useEffect } from "react";
import { CountUp } from "react-countup";

interface Service {
  name: string;
  price: number;
  perUnit?: string; // Add perUnit property for quantity-based services
}

const PricingCalculator: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [totalPrice, setTotalPrice] = useState(0);

  const services: Service = [
    { name: "Diagnostika vozu základní proměření", price: 500 },
    { name: "Vyleštění předních a zadních světel", price: 500 },
    { name: "Kontrola klima a doplnění oleje do klima", price: 500 },
    { name: "Kompletní přezutí pneu na stejný disk (1 kolo)", price: 200, perUnit: "kolo" },
    { name: "Doplnění chladiva 134a", price: 2, perUnit: "gram" },
    { name: "Vyčištění vozu ozónovačem", price: 500 },
    { name: "Měření osciloskopem", price: 1500 },
    { name: "Montáž tažného zařízení", price: 1500 },
    { name: "Příprava a provedení STK a emisí", price: 1500 },
    { name: "Hodina opravy vozu", price: 500, perUnit: "hodina" },
  ];

  const handleServiceChange = (serviceName: string) => {
    setSelectedServices((prevServices) =>
      prevServices.includes(serviceName)
      ? prevServices.filter((service) => service!== serviceName)
      : [...prevServices, serviceName],
    );
  };

  const handleQuantityChange = (serviceName: string, quantity: number) => {
    setQuantities((prevQuantities) => ({
    ...prevQuantities,
      [serviceName]: quantity,
    }));
  };

  const calculateTotalPrice = () => {
    let total = 0;
    selectedServices.forEach((serviceName) => {
      const service = services.find((s) => s.name === serviceName);
      if (service) {
        const quantity = quantities[serviceName] || 1;
        total += service.price * quantity;
      }
    });
    return total;
  };

  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
  }, [selectedServices, quantities]);

  return (
    <div className="container mx-auto py-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Cenová kalkulace</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Service selection column */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service: { name: boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | React.Key | null | undefined; perUnit: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; price: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => (
              <div key={service.name} className="border border-gray-200 p-4">
                <label className="flex items-center hover:bg-gray-200 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={selectedServices.includes(service.name)}
                    onChange={() => handleServiceChange(service.name)}
                  />
                  <span className="text-lg font-medium">{service.name}</span>
                  {service.perUnit && (
                    <div className="ml-auto flex items-center">
                      <input
                        type="number"
                        min="1"
                        className="w-16 border border-gray-300 px-2 py-1 rounded-md mr-2"
                        value={quantities[service.name] || 1}
                        onChange={(e) =>
                          handleQuantityChange(
                            service.name,
                            parseInt(e.target.value, 10) || 1,
                          )
                        }
                      />
                      <span>{service.perUnit}</span>
                    </div>
                  )}
                  {!service.perUnit && (
                    <span className="ml-auto text-xl font-semibold">
                      {service.price} Kč
                    </span>
                  )}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Animated total and button column */}
        <div className="bg-blue-500 text-white rounded-lg p-6 text-center">
          <div className="text-5xl font-bold mb-4">
            <CountUp start={0} end={totalPrice} duration={1} separator=" " /> Kč
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Kontaktujte nás
          </button>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-gray-600">
          * Toto je pouze odhad. Konečná cena se může lišit v závislosti na specifických
          potřebách Vašeho vozu.
        </p>
      </div>
    </div>
  );
};

export default PricingCalculator;