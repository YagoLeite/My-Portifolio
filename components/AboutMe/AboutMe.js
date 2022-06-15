import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import WavyText from "../Hero/WavyText";

const AboutMe = () => {
  return (
    <Flex p="36px">
      <Box w="100%">
        <WavyText fontSize="72px" text="Welcome" delayDuration={1} />
        <Text>
          Im a Frontend developer based in Rio de Janeiro. Passionated about
          creating complex features by combining simple and reusable functions
        </Text>
        <Text>
          Well-organized, enthusiastic, dedicated engineer with high attention
          to detail, who always strives for pixel-perfect interfaces. Fan of
          techno, pizza and sunny days.
        </Text>
      </Box>
      <Box bg="red" w="100%">
        o
      </Box>
    </Flex>
  );
};

export default AboutMe;
