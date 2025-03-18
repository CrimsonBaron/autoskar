import React, {useState} from "react"
import {ArrowRight} from "lucide-react";
import {motion} from "framer-motion";
import {LettersPullUp} from "~/components/ui/letters-pull-up";


export function ContactSection(){

    const [isCallButtonHovered, setIsCallButtonHovered] = useState<boolean>(false);

    return (
        <section className="md:p-10 py-6" aria-label={"contact section"}>
            <h1 className="text-5xl font-medium leading-tight tracking-wide flex-1  text-center">
                Kontakt
            </h1>
            <div className="flex flex-row gap-5 mt-10">
                <div className="rounded-3xl flex-1 bg-white">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d565.3092516649582!2d15.12666920807177!3d50.4394771039726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470ea95c74fb9165%3A0x8c291ac8c9cc7d7c!2sAutoservis%20Oskar%20Ki%C5%A1%C5%A1!5e0!3m2!1sen!2scz!4v1739808544255!5m2!1sen!2scz" width="600" height="450" className="w-full rounded-3xl" loading="eager" ></iframe>
                </div>
                <div className="shadow-xl rounded-3xl w-1/3 bg-black text-white p-10 flex flex-col relative overflow-hidden gap-4">
                    <div className="flex-1 overflow-hidden ">
                        <div className="relative z-10 p-5 border-2 rounded-full w-35 h-35 bg-black bg-opacity-50 float-left">
                            avatar
                        </div>
                    </div>
                    <div>
                        <h2 className="relative z-10 bg-opacity-50 rounded-md text-5xl">Oskar Kišš</h2>
                        <h2 className="relative z-10 b p-2 rounded-md text-xl">+420 607 528 761</h2>
                    </div>
                    <button
                        className="relative z-10 btn-white-outline "
                        onClick={() => setIsCallButtonHovered(true)}
                    >
                        <LettersPullUp text={"Volejte Hned"}/>
                    </button>
                    <div className="flex flex-row items-center gap-5">
                        <div className="rounded-3xl flex-1 flex flex-col items-start justify-end">
                            <h3 className={"relative flex-1"}>Nebo preferujete email?</h3>
                            <h6 className={"text-sm text-white/80"}>kiss.o@seznam.cz</h6>
                        </div>
                        <button
                            className="relative  z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                        >
                            <ArrowRight className="h-6 w-6 text-gray-500" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}