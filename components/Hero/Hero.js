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
    <Flex w="100%" direction="column">
      <Text fontSize="16px" color="#64ffda">{`Welcome, I'm`}</Text>
      <Text fontSize="80px" color="#ccd6f6">
        Yago Leite
      </Text>
      <Text fontSize="80px" color="#8892b0">
        Frontend Developer
      </Text>
      <Text w="40%">
        {`I'm a mathematician and frontend developer specialized in building. Currently, I've been creating awesome products at `}{" "}
        <Text as="span" color="#64ffda">
          Younner
        </Text>
      </Text>
    </Flex>
  );
};

export default Hero;
