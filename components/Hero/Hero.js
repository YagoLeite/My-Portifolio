import { Flex, Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import WavyText from "./WavyText";

const Hero = () => {
  const str = "eu sei sobre a sua vida filho da puta do caralho";

  return (
    <Box color="#08fdd8">
      <Box>
        <WavyText fontSize="72px" text="Welcome" delayDuration={1} />
        <WavyText fontSize="72px" text="I'm Yago" delayDuration={1.8} />
        <WavyText
          fontSize="72px"
          text="Frontend Developer"
          delayDuration={2.6}
        />
      </Box>
    </Box>
  );
};

export default Hero;
