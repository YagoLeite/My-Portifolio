import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import ContactButton from "../Contact/ContactButton";

const Hero = () => {
  return (
    <Flex w="100%" h="100vh" justify="center" direction="column">
      <Text fontSize="16px" color="#64ffda">{`Welcome, I'm`}</Text>
      <Text fontSize={["45px", "55px", "70px", "80px"]} color="#ccd6f6">
        Yago Leite
      </Text>
      <Text
        fontSize={["45px", "35px", "70px", "80px"]}
        mt={["0", "0", "-20px", "-20px"]}
        color="#8892b0"
      >
        Frontend Developer
      </Text>
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
