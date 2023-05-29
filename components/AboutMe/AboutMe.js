import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import WavyText from "../MyText/WavyText";

const stacks = [
  "React",
  "Next.js",
  "TypeScript",
  "Chakra UI",
  "Framer Motion",
  "Three.js",
];

const AboutMe = () => {
  return (
    <Flex w="100%" px="40px" gap="20px">
      <Flex direction="column" gap="25px" fontSize="15px">
        <Text>
          {`Hey there! I'm Yago Leite, a mathematician who loves building things for the web. A couple of years ago, I took the plunge into frontend development, discovering how my math background could add an interesting spin to the way I approach code.`}
        </Text>
        <Text>
          {`Fast-forward to today, I've had my hand in various projects, applying my skills to create elegant, `}{" "}
          <Text as="span" color="#64ffda">
            subtle animations
          </Text>{" "}
          that bring web pages to life. While I enjoy dabbling in 3D, my true
          passion lies in weaving simple, yet captivating visuals that{" "}
          <Text as="span" color="#64ffda">
            enhance user interaction.
          </Text>
        </Text>
        <Text>{`If your project could benefit from a blend of mathematics, creativity, and advanced web technologies, I'd be more than happy to connect.`}</Text>
        <Flex gap="5px" wrap="wrap">
          {stacks.map((text, i) => {
            return (
              <Text fontSize="13px" key={i}>
                {text}
              </Text>
            );
          })}
        </Flex>
      </Flex>
      <Flex
        h="100%"
        w="80%"
        justify="center"
        align="center"
        display={["none", "none", "flex", "flex"]}
      >
        <Image src="/YagoLeite.JPG" alt="profilepic" borderRadius="10px" />
      </Flex>
    </Flex>
  );
};

export default AboutMe;
