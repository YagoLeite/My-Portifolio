// Moon component (Moon.js)
import { Flex } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Moon = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    // target: ref,
    offset: ["start end", "end start"],
  });

  // Transform the vertical position of the moon based on scroll progress
  const topPosition = useTransform(scrollYProgress, [0, 1], ["80%", "30%"]);

  return (
    <Flex
      as={motion.div}
      position="absolute"
      w="200px"
      h="200px"
      borderRadius="50%"
      left="50%"
      transform="translateX(-50%)" // Centers the moon horizontally
      bg="white"
      zIndex={1}
      style={{ top: topPosition }}
    />
  );
};

export default Moon;
