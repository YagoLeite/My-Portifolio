import { Flex } from "@chakra-ui/react";
import React, { useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const StarsBackground = () => {
  const [stars, setStars] = useState([]);
  const { scrollYProgress } = useScroll({

    offset: ["start end", "end start"],
    layoutEffect: false,
  });

  const yTransforms = [
    useTransform(scrollYProgress, [0, 1], [20, 100]),
    useTransform(scrollYProgress, [0, 1], [10, 405]),
    useTransform(scrollYProgress, [0, 1], [0, 200]),
    useTransform(scrollYProgress, [0, 1], [30, 125]),
    useTransform(scrollYProgress, [0, 1], [0, 130]),
    useTransform(scrollYProgress, [0, 1], [100, 430]),
  ];

  const opacityTransforms = [
    useTransform(scrollYProgress, [0, 1], [1, 0]),
    useTransform(scrollYProgress, [1, 0], [1, 0.4]),
    useTransform(scrollYProgress, [0.5, 1], [0.8, 0]),
    useTransform(scrollYProgress, [0, 1], [1, 0.1]),
    useTransform(scrollYProgress, [0, 1], [1, 0.3]),
  ];

  const generateStars = useCallback(() => {
    const starArray = [];
    for (let i = 0; i < 100; i++) {
      const xPos = Math.random() * 100;
      const yPos = Math.random() * 100;
      const yTransformIndex = Math.floor(Math.random() * yTransforms.length);
      const opacityTransformIndex = Math.floor(
        Math.random() * opacityTransforms.length
      );

      starArray.push({
        id: i,
        x: xPos,
        y: yPos,
        yTransform: yTransforms[yTransformIndex],
        opacityTransform: opacityTransforms[opacityTransformIndex],
      });
    }
    return starArray;
  }, []);

  useEffect(() => {
    setStars(generateStars());
  }, [generateStars]);

  return (
    <Flex w="100%" h="100%" position="absolute">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          style={{
            position: "absolute",
            top: `${star.y}%`,
            left: `${star.x}%`,
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            backgroundColor: "white",
            y: star.yTransform,
            // x: star.xTransform,
            opacity: star.opacityTransform,
          }}
        />
      ))}
    </Flex>
  );
};

export default StarsBackground;
