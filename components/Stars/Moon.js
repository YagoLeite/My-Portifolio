import { Flex } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

const Moon = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
    layoutEffect: false,
  });

  const topPosition = useTransform(scrollYProgress, [0, 1], ["80%", "30%"]);

  return (
    <Flex
      as={motion.div}
      position="absolute"
      w="200px"
      h="200px"
      borderRadius="50%"
      left="50%"
      transform="translateX(-50%, -50%)"
      bg="white"
      style={{ top: topPosition }}
    />
  );
};

export default Moon;
