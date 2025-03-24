import React from "react";
import {motion} from "framer-motion";

export function HeroSection() {
    return (
        <motion.section
            className="flex sm:flex-row flex-col md:p-15"
            aria-label={"hero section"}
        >
            <motion.div
                className="flex-1"
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5,
                        ease: "easeOut",
                        once: true,
                    },
                }}
            >
                <h1 className="text-4xl font-bold leading-tight tracking-wide text-gray-800 md:text-5xl">
                        Vaše auto, naše priorita, <br/>
                        spolehlivost a péče na prvním místě.

                </h1>
                <p className="mt-4 mb-4 text-lg text-gray-600">
                    jen u Autoskar
                </p>
            </motion.div>
            <motion.div
            className="flex-1 flex justify-center rounded-3xl h-80 items-center"
            initial={{
                opacity: 0,
                y: 20,
            }}
            animate={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.5,
                    delay: 0.2 ,
                    ease: "easeOut",
                    once: true,
                },
            }}
        >
            <img src={"/hero.png"} alt={"hero image"} className={"rounded-3xl h-full w-full object-cover block"} />
        </motion.div>
        </motion.section>
    )
}