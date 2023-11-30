import { Flex } from "@chakra-ui/react";
import React, { useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const StarsBackground = () => {
  const [stars, setStars] = useState([]);
  const { scrollYProgress } = useScroll();

  const yTransforms = [
    useTransform(scrollYProgress, [0, 1], [0, 10]),
    useTransform(scrollYProgress, [0, 1], [0, 15]),
    useTransform(scrollYProgress, [0, 1], [0, 20]),
    useTransform(scrollYProgress, [0, 1], [0, 25]),
    useTransform(scrollYProgress, [0, 1], [0, 30]),
  ];

  const opacityTransforms = [
    useTransform(scrollYProgress, [0, 1], [1, 0]),
    useTransform(scrollYProgress, [1, 0], [0.9, 0.1]),
    useTransform(scrollYProgress, [0.5, 1], [0.8, 0.2]),
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
            opacity: star.opacityTransform,
          }}
        />
      ))}
    </Flex>
  );
};

export default StarsBackground;
