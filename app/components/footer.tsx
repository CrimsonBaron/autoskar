import React from 'react';
import logoLong from '/logo-full.svg';
import {SpinningText} from "~/components/ui/spinning-text";
import { Link } from "react-router";
import logoPigeonSoft from "/logo-pigeon-soft.svg"
import {motion} from "framer-motion";


export function Footer(){
    return (
        <motion.footer
            className="bg-black bg-opacity-50 text-white rounded-3xl p-10 z-10 relative "
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
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                    <img src={logoLong} alt="Logo Autoskar" className="w-64" />
                    <address className="">
                        <div>Oskar Kišš</div>
                        <div>Bydliště: Palackého 131, Dolní Bousov</div>
                        <div>Provozovna: Palackého 131, Dolní Bousov</div>
                        <div>Tel. číslo: <a href="tel:+420607528761">+420 607 528 761</a></div>
                        <div>Email: <a href="mailto:Kiss.O@seznam.cz">Kiss.O@seznam.cz</a></div>
                    </address>
                </div>


                <Link to={"https://pigeoneer.dev"} className="relative w-64 h-64 rounded-full flex items-center justify-center">
                    {/* Assuming SpinningText creates a circular div */}
                    <SpinningText>
                        Made by - pigeoneer.dev
                    </SpinningText>

                    <img
                        src={logoPigeonSoft}
                        alt={"logo pigeon soft "}
                        className="w-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                </Link>
            </div>
        </motion.footer>
    );
};

