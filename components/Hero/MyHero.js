import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const MyHero = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      //   minH="100vh"
      justify="top"
      align="left"
      //   maxW="700px"
      color="white"
      direction="column"
      gap="30px"
      position={["relative", "relative", "relative", "sticky", "sticky"]}
      top={["", "", "", "0", "0"]}
      left={["", "", "", "0", "0"]}
      right={["", "", "", "0", "0"]}
      px="30px"
      pt="100px"
    >
      <Text fontSize="40px" fontWeight="extrabold">{`Hi, I'm Yago`}</Text>
      <Flex w="100%">some icons</Flex>
      <Text
        fontSize={["24px"]}
      >{`I'm a software engineer based in Orlando, Florida. Here's a sentence about a cool thing that I built and the people it helps. This is about the type of person I am and what I like to do in my free time so you know I'm not a robot. Here's one last interesting sentence so that you remember me a bit better.`}</Text>
    </Flex>
  );
};

export default MyHero;
