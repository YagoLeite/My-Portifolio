import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Flex w="100%" direction="column">
      <Text fontSize="16px" color="#64ffda">{`Welcome, I'm`}</Text>
      <Text fontSize="80px" color="#ccd6f6">
        Yago Leite
      </Text>
      <Text fontSize="80px" color="#8892b0">
        Frontend Developer
      </Text>
      <Text w="50%">
        {`I'm a mathematician and frontend developer specialized in building. Currently, I've been creating awesome products at `}{" "}
        <Text as="span" color="#64ffda">
          Younner
        </Text>
      </Text>
    </Flex>
  );
};

export default Hero;
