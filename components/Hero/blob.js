import { Flex, Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiChakraui, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FiFramer } from "react-icons/fi";
import MeuBago from "./MeuBago";
import WavyText from "../MyText/WavyText";
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

const findingAngles = (number) => {
  const interiorAngle = (360 / number) * (Math.PI / 180);
  let arrayOfAngles = [];
  for (let i = 1; i <= number; i++) {
    arrayOfAngles.push(i * interiorAngle);
  }
  return arrayOfAngles;
};
const arrayOfPositions = (array) => {
  return array.map((angle) => {
    return { x: Math.sin(angle) / 2, y: Math.cos(angle) / 2 };
  });
};
const topAndLeft = (array) => {
  return array.map((position) => {
    return {
      left: (0.5 - position.x) * 100,
      top: (0.5 - position.y) * 100,
    };
  });
};

const Hero = () => {
  const [sides, setSides] = useState(0);
  const testando = topAndLeft(arrayOfPositions(findingAngles(sides || 0)));
  return (
    <Flex justify="center" alignItems="center" w="100%" color="#08fdd8">
      {/* <MeuBago /> */}
      <Box color="black">
        <input onChange={(e) => setSides(+e.target.value)} />
      </Box>
      <Box w="100%">
        <WavyText fontSize="72px" text="Welcome" delayDuration={1} />
        <WavyText fontSize="72px" text="I'm Yago" delayDuration={1.8} />
        <WavyText
          fontSize="72px"
          text="Frontend Developer"
          delayDuration={2.6}
        />
      </Box>
      <Flex fontSize="24px" w="100%" justify="center" alignItems="center">
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
          h="340px"
          w="340px"
          borderRadius="50%"
          border="1px"
          borderColor="white"
          position="relative"
        >
          <Box
            as={motion.div}
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {testando.map((position, index) => {
              return (
                <Box key={Math.random()} as={motion.div} variants={fading}>
                  <SpinningIcon
                    config={{
                      top: `calc(${position.top}% - 25px)`,
                      left: `calc(${position.left}% - 25px)`,
                    }}
                    key={index}
                  >
                    {index}{" "}
                  </SpinningIcon>
                </Box>
              );
            })}
          </Box>
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
                <TbBrandNextjs />
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

// const startShape = (
//   <Box>
//     <SpinningIcon
//       config={{ top: "calc(0 - 25px)", right: "calc(50% - 25px)" }}
//     />
//     <SpinningIcon
//       config={{ top: "calc(35% - 25px)", left: "calc(3% - 25px)" }}
//     />
//     <SpinningIcon
//       config={{ top: "calc(90% - 25px)", left: "calc(21% - 25px)" }}
//     />
//     <SpinningIcon
//       config={{ top: "calc(90% - 25px)", right: "calc(21% - 25px)" }}
//     />
//     <SpinningIcon
//       config={{ top: "calc(35% - 25px)", right: "calc(3% - 25px)" }}
//     />
//     <SpinningIcon
//       config={{ top: "calc(75% - 25px)", left: "calc(50% - 25px)" }}
//     />
//     <SpinningIcon
//       config={{ top: "calc(57.72% - 25px)", right: "calc(26.3% - 25px)" }}
//     />
//     <SpinningIcon
//       config={{ top: "calc(57.72% - 25px)", left: "calc(26.3% - 25px)" }}
//     />
//     <SpinningIcon
//       config={{ top: "calc(29.8% - 25px)", right: "calc(35.4% - 25px)" }}
//     />
//     <SpinningIcon
//       config={{ top: "calc(29.8% - 25px)", left: "calc(35.4% - 25px)" }}
//     />
//   </Box>
// );
