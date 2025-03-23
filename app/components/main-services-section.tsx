import React from "react";

import diagnostics from "/images/autodiagnostika.jpg"
import carRepair from "/images/autoservis.jpg"
import pneuservis from "/images/pneuservis.jpg"

export function MainServicesSection() {
    return (
        <section className="md:p-15 py-6 flex flex-col justify-center mx-auto h-[42rem]" aria-label={"main services"}>
            <h1 className="text-5xl font-medium leading-tight tracking-wide flex-1 text-center">
                Kompletní péče o Váš vůz
            </h1>
            <div className="container mx-auto flex flex-col md:flex-row gap-6 pt-10 h-full">
                <div className="flex-1 h-full bg-gray-800 text-white rounded-3xl relative rounded-t-xl">
                    <div className="z-10 relative w-full h-full flex flex-col justify-end rounded-3xl"> {/* Add relative positioning to this container */}
                        <div className={"h-1/3 w-full p-6 rounded-3xl bg-gradient-to-b from-transparent to-black "}>
                            <h2 className={"font-bold text-3xl "}>Autoservis</h2>
                            <div>
                                Kvalitní servis a údržba vozidel. Vaše auto v rukou odborníků.
                            </div>
                        </div>
                    </div>
                    <img src={carRepair} alt="car repair" className="w-full h-full object-cover absolute top-0 left-0 rounded-3xl" />
                </div>

                <div className="flex-1 h-full bg-gray-800 text-white rounded-3xl relative rounded-t-xl">
                    <div className="z-10 relative w-full h-full flex flex-col justify-end rounded-3xl"> {/* Add relative positioning to this container */}
                        <div className={"h-1/3 w-full p-6 rounded-3xl bg-gradient-to-b from-transparent to-black "}>
                            <h2 className={"font-bold text-3xl "}>Diagnostika</h2>
                            <div>
                                Odborné diagnostické služby. Efektivní řešení pro automobilové problémy.
                            </div>
                        </div>
                    </div>
                    <img src={diagnostics} alt="car repair" className="w-full h-full object-cover absolute top-0 left-0 rounded-3xl" />
                </div>

                <div className="flex-1 h-full bg-gray-800 text-white rounded-3xl relative rounded-t-xl">
                    <div className="z-10 relative w-full h-full flex flex-col justify-end rounded-3xl"> {/* Add relative positioning to this container */}
                        <div className={"h-1/3 w-full p-6 rounded-3xl bg-gradient-to-b from-transparent to-black "}>
                            <h2 className={"font-bold text-3xl "}>Pneuservis</h2>
                            <div>
                                Kompletní péče o pneumatiky: Prodej, montáž, opravy a údržba.
                            </div>
                        </div>
                    </div>
                    <img src={pneuservis} alt="car repair" className="w-full h-full object-cover absolute top-0 left-0 rounded-3xl" />
                </div>

           </div>
        </section>
    )
}