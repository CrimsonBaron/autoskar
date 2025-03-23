import React from "react";

export function HeroSection() {
    return (
        <section className="flex sm:flex-row flex-col md:p-15 max-w-7xl" aria-label={"hero section"}>
            <div className="flex-1">
                <h1 className="text-4xl font-bold leading-tight tracking-wide text-gray-800 md:text-5xl">
                    Vaše auto, naše priorita, <br/>
                    spolehlivost a péče na prvním místě.
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    jen u Autoskar
                </p>
            </div>
            <div className="flex-1">
                {/* add 3d car model some cartoonish stuff */}
            </div>
        </section>
    )
}