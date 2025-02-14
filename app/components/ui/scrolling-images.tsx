import React, { useRef, useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

interface ScrollingImagesProps {
  images: string[];
}

export function ScrollingImages({ images }: ScrollingImagesProps) {
  const [scope, animate] = useAnimate();
  const containerRef = useRef<HTMLDivElement>(null);
  const doubledImages = [...images, ...images];


  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const imageWidth = containerWidth / 3;
      const gap = 40;
      const totalImagesWidth = images.length * (imageWidth + gap);


      animate(
        containerRef.current,
        { x: `-${totalImagesWidth}px` },
        {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          // Removed onComplete
        }
      );


        // Direct manipulation of the animation for seamless loop:
        const animationController = scope.current?.getAnimation();

        if (animationController) {
          animationController.onUpdate(() => {
            const currentX = animationController.get("x");

            if (currentX <= -totalImagesWidth) {
                animationController.set({ x: 0 }); // Reset without animation
            }
          });
        }

    }
  }, [animate, images, scope]); // Add scope to dependency array

  return (
    <div className="overflow-hidden">
      <div
        className="flex flex-row gap-10"
        ref={containerRef}
        style={{ width: "fit-content" }}
      >
        {doubledImages.map((image, index) => (
          <motion.img
            key={`scrolling-image-${index}-${image}`}
            src={image}
            className="w-1/3 h-96 object-cover rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          />
        ))}
      </div>
    </div>
  );
}