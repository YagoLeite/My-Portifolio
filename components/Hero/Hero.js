import { Flex, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import ContactButton from "../Contact/ContactButton";
import { motion, AnimatePresence } from "framer-motion";

const textVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction > 0 ? -1000 : 1000,
    opacity: 0,
  }),
};

const getVariant = (direction) => ({
  initial: {
    opacity: 0,
    x: direction === "right" ? "-100%" : "100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    x: "0%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    x: direction === "right" ? "100%" : "-100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
});

const Hero = () => {
  // const [[page, direction], setPage] = useState([0, 0]);
  const titles = ["Frontend Developer", "Software Engineer"];
  const [direction, setDirection] = useState("right");
  const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setPage([page === 0 ? 1 : 0, direction === 0 ? 1 : -1]);
  //   }, 3000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [page, direction]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection((prev) => (prev === "right" ? "left" : "right"));
      setCounter((prev) => prev + 1);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [counter]);

  console.log(counter);

  return (
    <Flex w="100%" h="100vh" justify="center" direction="column">
      <Text fontSize="16px" color="#64ffda">{`Welcome, I'm`}</Text>
      <Text fontSize={["45px", "55px", "70px", "80px"]} color="#ccd6f6">
        Yago Leite
      </Text>
      <Flex w="100%" overflow="hidden" minH="100px" position="relative">
        {/* <AnimatePresence custom={direction}>
          <motion.div
            custom={direction}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            key={page}
            style={{ backgroundColor: "red" }}
          >
            <Text
              fontSize={["45px", "35px", "70px", "80px"]}
              mt={["0", "0", "-20px", "-20px"]}
              color="#8892b0"
              w="100%"
            >
              {titles[page]}
            </Text>
          </motion.div>
        </AnimatePresence> */}
        <AnimatePresence initial={false}>
          <Flex
            as={motion.div}
            variants={getVariant(direction)}
            key={counter % 2 === 0 ? titles[0] : titles[1]}
            custom={{ direction }}
            initial="initial"
            animate="visible"
            exit="exit"
            position="absolute"
            top="0"
            left="0"
          >
            <Text
              fontSize={["35px", "35px", "70px", "80px"]}
              mt={["0", "0", "-20px", "-20px"]}
              color="#8892b0"
              w="100%"
            >
              {counter % 2 === 0 ? titles[0] : titles[1]}
            </Text>
          </Flex>
        </AnimatePresence>
        {/* <Text
          fontSize={["45px", "35px", "70px", "80px"]}
          mt={["0", "0", "-20px", "-20px"]}
          color="#8892b0"
          w="100%"
        >
          Frontend Developer
        </Text> */}
      </Flex>
      <Text w={["100%", "100%", "50%", "50%"]}>
        {`I'm a mathematician and frontend developer specialized in building. Currently, I've been creating awesome products at `}{" "}
        <Text as="span" color="#64ffda">
          Younner
        </Text>
      </Text>
      <Flex mt="30px">
        <ContactButton message="Say Hello" />
      </Flex>
    </Flex>
  );
};

export default Hero;
