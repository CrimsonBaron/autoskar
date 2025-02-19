import React from "react";

export function MainServicesSection() {
    return (
        <div className="md:p-15 py-6 flex flex-col justify-center mx-auto h-[42rem]">
            <h1 className="text-5xl font-medium leading-tight tracking-wide flex-1 text-center">
                Kompletní péče o Váš vůz
            </h1>
            <div className="container mx-auto flex flex-col md:flex-row gap-6 pt-10 h-full">

                <div className="flex-1 h-full bg-gray-800 text-white rounded-3xl p-6">
                    {/* Background image or color can go here */}
                </div>

                <div className="flex-1 h-full bg-blue-500 text-white rounded-3xl p-6">
                    {/* Background image or color can go here */}
                </div>

                <div className="flex-1 h-full bg-orange-500 text-white rounded-3xl p-6">
                    {/* Background image or color can go here */}
                </div>

            </div>
        </div>
    )
}