import {ScrollingImages} from "~/components/ui/scrolling-images";
import React from "react";
import {Marquee} from "~/components/ui/marquee";
import {Skeleton} from "~/components/ui/skeleton";
import {motion} from "framer-motion";

const images = [
    "/images/img_shop_01.jpg",
    "/images/img_shop_02.jpg",
    "/images/img_shop_03.jpg",
    "/images/img_shop_04.jpg",
    "/images/img_shop_05.jpg",
]

export function GallerySection() {
    return (
        <div className={"absolute left-1/2 transform -translate-x-1/2 w-screen"}>
            <section className="md:p-10 py-6 " aria-label={"gallery section"}>
                <motion.h1
                    className="text-5xl font-medium leading-tight tracking-wide flex-1  text-center mb-10"
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
                    Nahlédněte do naší dílny
                </motion.h1>
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {
                            images.map((image, index) => (
                                image ? (
                                    <motion.img
                                        key={index}
                                        src={image}
                                        alt={`${image}-${index}.png`}
                                        className={"h-96 rounded-3xl"}
                                        initial={{
                                            opacity: 0,
                                            y: 20,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                duration: 0.5,
                                                delay: 0.2*index ,
                                                ease: "easeOut",
                                            },
                                        }}
                                        viewport={{once: true}}
                                    />
                                ) : (
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            y: 20,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                duration: 0.5,
                                                delay: 0.2*index ,
                                                ease: "easeOut",
                                            },
                                        }}
                                        viewport={{once: true}}
                                    >
                                        <Skeleton key={index} className={"w-96 h-96 rounded-3xl"} />
                                    </motion.div>
                                )
                            ))
                        }
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:20s]">
                        {
                            images.map((image, index) => (
                            image ? (
                                <motion.img
                                    key={index}
                                    src={image}
                                    alt={`${image}-${index}.png`}
                                    className={"h-96 rounded-3xl"}
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.5,
                                            delay: 0.2*index ,
                                            ease: "easeOut",
                                        },
                                    }}
                                    viewport={{once: true}}
                                />
                            ) : (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.5,
                                            delay: 0.2*index ,
                                            ease: "easeOut",
                                        },
                                    }}
                                    viewport={{once: true}}
                                >
                                    <Skeleton key={index} className={"w-96 h-96 rounded-3xl"} />
                                </motion.div>
                            )
                        ))
                        }
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/7 bg-gradient-to-r from-[#ebe6e8]"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/7 bg-gradient-to-l from-[#ebe6e8]"></div>
                </div>
            </section>
        </div>
    )
}