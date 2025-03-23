import React, {useEffect, useState} from "react";
import {cn} from "~/lib/utils";
import {Skeleton} from "~/components/ui/skeleton";

interface ImgWithSkeletonProps {
    src: string;
    className?: string
    skeletonClassName?:string
    alt?:string
}

export function ImgWithSkeleton({src, className, skeletonClassName, alt}: ImgWithSkeletonProps){
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        setImageLoaded(false);
        const img = new Image();
        img.src = src;
        img.onload = () => {
            const timeout = setTimeout(()=>setImageLoaded(true), 1000)
        };
        img.onerror = () => {
            setImageLoaded(false);
        };

        return () => {
            img.onload = null;
            img.onerror = null;
        }
    }, [src]);
    return (
        <>
            {
                imageLoaded? <img alt={alt} src={src} className={className}/> : <Skeleton className={skeletonClassName}/>
            }
        </>
    )
}