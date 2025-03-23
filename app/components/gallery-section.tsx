import React from "react";
import {Marquee} from "~/components/ui/marquee";
import {ImgWithSkeleton} from "~/components/ui/img-with-skeleton";

const images = [
    "/images/img_shop_01.jpg",
    "/images/img_shop_02.jpg",
    "/images/img_shop_03.jpg",
    "/images/img_shop_04.jpg",
    "/images/img_shop_05.jpg",
]

export function GallerySection() {
    return (
        <section className="md:p-10 py-6" aria-label={"gallery section"}>
            <h1 className="text-5xl font-medium leading-tight tracking-wide flex-1  text-center mb-10">
                Nahlédněte do naší dílny
            </h1>
            <div className="relative flex w-full flex-col items-center justify-center ">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {
                        images.map((image, index) => {
                            return (
                                <ImgWithSkeleton src={image} alt={`${image}-${index}.png`} className={"h-96 rounded-3xl"} skeletonClassName={"w-96 h-96 rounded-3xl"}/>
                            );
                        })
                    }
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {
                        images.map((image, index) => {
                            return (
                                <ImgWithSkeleton src={image} alt={`${image}-${index}.png`} className={"h-96 rounded-3xl"} skeletonClassName={"w-96 h-96 rounded-3xl"}/>
                            );
                        })
                    }
                </Marquee>
            </div>
        </section>
    )
}
