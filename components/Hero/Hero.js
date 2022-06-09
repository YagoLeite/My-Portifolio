import { Flex, Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import WavyText from "./WavyText";

const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0 },
  },
};

const child = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
  hidden: {
    opacity: 0,
    y: -20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
};

const Hero = () => {
  const str = "eu sei sobre a sua vida filho da puta do caralho";

  return (
    <Box color="#08fdd8">
      <WavyText fontSize="72px" text="Welcome" delayDuration={1} />
      <WavyText fontSize="72px" text="I'm Yago" delayDuration={1.8} />
      <WavyText fontSize="72px" text="Frontend Developer" delayDuration={2.6} />
    </Box>
  );
};

export default Hero;
