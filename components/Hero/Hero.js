import { Flex, Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import WavyText from "./WavyText";
import { FaReact, FaHtml5 } from "react-icons/fa";
import { SiJavascript, SiChakraui, SiTailwindcss } from "react-icons/si";
import { FiFramer } from "react-icons/fi";
const SpinningIcon = (props) => {
  return (
    <Flex
      justify="center"
      alignItems="center"
      position="absolute"
      h="50px"
      w="50px"
      bg="white"
      fontWeight="500"
      color="black"
      borderRadius="50%"
      as={motion.div}
      whileHover={{ scale: 1.1 }}
      animate={{
        rotate: -360,
        transition: {
          duration: 2,
          ease: "linear",
          repeat: Infinity,
        },
      }}
      key={Math.random()}
      {...props.config}
    >
      {props.children}
    </Flex>
  );
};

const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.35 },
  },
};

const fading = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Hero = () => {
  return (
    <Flex justify="center" alignItems="center" w="100%" color="#08fdd8">
      <Box w="100%">
        <WavyText fontSize="72px" text="Welcome" delayDuration={1} />
        <WavyText fontSize="72px" text="I'm Yago" delayDuration={1.8} />
        <WavyText
          fontSize="72px"
          text="Frontend Developer"
          delayDuration={2.6}
        />
      </Box>
      <Flex w="100%" justify="center" alignItems="center">
        <Box
          as={motion.div}
          key={Math.random()}
          animate={{
            rotate: 360,
            transition: {
              duration: 17,
              ease: "linear",
              repeat: Infinity,
            },
          }}
          h="240px"
          w="240px"
          position="relative"
        >
          <Box
            as={motion.div}
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box as={motion.div} variants={fading}>
              <SpinningIcon
                config={{ top: "calc(0% - 25px)", left: "calc(50% - 25px)" }}
              >
                <FaReact />
              </SpinningIcon>
            </Box>
            <Box as={motion.div} variants={fading}>
              <SpinningIcon
                config={{ top: "calc(25% - 25px)", left: "calc(6.7% - 25px)" }}
              >
                <SiJavascript />
              </SpinningIcon>
            </Box>
            <Box as={motion.div} variants={fading}>
              <SpinningIcon
                config={{
                  bottom: "calc(25% - 25px)",
                  left: "calc(6.7% - 25px)",
                }}
              >
                <FiFramer />
              </SpinningIcon>
            </Box>
            <Box as={motion.div} variants={fading}>
              <SpinningIcon
                config={{ bottom: "calc(0% - 25px)", left: "calc(50% - 25px)" }}
              >
                <FaHtml5 />
              </SpinningIcon>
            </Box>
            <Box as={motion.div} variants={fading}>
              <SpinningIcon
                config={{
                  bottom: "calc(25% - 25px)",
                  right: "calc(6.7% - 25px)",
                }}
              >
                <SiChakraui />
              </SpinningIcon>
            </Box>
            <Box as={motion.div} variants={fading}>
              <SpinningIcon
                config={{ top: "calc(25% - 25px)", right: "calc(6.7% - 25px)" }}
              >
                <SiTailwindcss />
              </SpinningIcon>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Hero;

{
  /* <SpinningIcon
  config={{ top: "calc(0% - 25px)", left: "calc(50% - 25px)" }}
>
  1
</SpinningIcon>
<SpinningIcon
  config={{ top: "calc(34.5% - 25px)", left: "calc(2.5% - 25px)" }}
>
  2
</SpinningIcon>
<SpinningIcon
  config={{ top: "calc(34.5% - 25px)", right: "calc(2.5% - 25px)" }}
>
  3
</SpinningIcon>
<SpinningIcon
  config={{ top: "calc(90.5% - 25px)", left: "calc(20.6% - 25px)" }}
>
  4
</SpinningIcon>
<SpinningIcon
  config={{ top: "calc(90.5% - 25px)", right: "calc(20.6% - 25px)" }}
>
  5
</SpinningIcon> */
}
