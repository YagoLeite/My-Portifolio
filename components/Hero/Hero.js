import { Flex, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
// import Spline from "@splinetool/react-spline";
import React from "react";
import WavyText from "../MyText/WavyText";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const Hero = () => {
  return (
    <Flex
      w="100%"
      direction={["column", "column", "row", "row"]}
      justify="space-between"
    >
      <Flex direction="column">
        <WavyText text="Welcome" delayDuration={0} fontSize="45px" />
        <WavyText text="My name is Yago" delayDuration={1} fontSize="45px" />
        <Text>
          I like to craft solid and scalable frontend products with great user
          experiences.
        </Text>
      </Flex>
      <Flex h="400px" w="400px">
        <Spline scene="https://prod.spline.design/4ZJlx29YrTF5V2X3/scene.splinecode" />
      </Flex>
    </Flex>
  );
};

export default Hero;
