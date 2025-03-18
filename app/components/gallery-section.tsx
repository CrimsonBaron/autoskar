import {ScrollingImages} from "~/components/ui/scrolling-images";
import React from "react";
import {Marquee} from "~/components/ui/marquee";

const images = [
    "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

export function GallerySection() {
    return (
        <section className="md:p-10 py-6" aria-label={"gallery section"}>
            <h1 className="text-5xl font-medium leading-tight tracking-wide flex-1  text-center mb-10">
                Nahlédněte do naší dílny
            </h1>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {
                        images.map((image, index) => (
                            <img src={image} alt={`${image}-{index}.png`} className={"h-96 rounded-3xl"}/>
                        ))
                    }
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {
                        images.map((image, index) => (
                            <img src={image} alt={`${image}-{index}.png`} className={"h-96 rounded-3xl"}/>
                        ))
                    }
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/7 bg-gradient-to-r from-[#ebe6e8]"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/7 bg-gradient-to-l from-[#ebe6e8]"></div>
            </div>
        </section>
    )
}