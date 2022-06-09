import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";

const WavyText = ({ text, delayDuration, fontSize }) => {
  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delayDuration },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: -40,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200,
      },
    },
  };
  return (
    <Flex
      variants={container}
      initial="hidden"
      animate="visible"
      w="100%"
      justify="center"
      overflow="hidden"
      as={motion.div}
    >
      {text.split("").map((letter, index) => {
        return (
          <Flex
            // whileHover={{ scale: 2 }}
            as={motion.div}
            variants={child}
            key={index}
            justify="center"
            alignItems="center"
          >
            {letter === " " ? (
              <Text opacity={0}>a</Text>
            ) : (
              <Text
                as={motion.div}
                fontSize={fontSize}
                whileHover={{
                  y: ["0px", "-8px", "4px", "0px"],
                  scale: [1, 1.2, 1.1, 1],
                  transition: { duration: 0.4, type: "spring" },
                }}
              >
                {letter}
              </Text>
            )}
          </Flex>
        );
      })}
    </Flex>
  );
};

export default WavyText;
