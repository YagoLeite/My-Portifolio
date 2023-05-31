import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import WavyText from "../MyText/WavyText";
import { AnimatePresence, motion } from "framer-motion";
import { MdArrowRight } from "react-icons/md";

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
    <AnimatePresence>
      <Flex
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          type: "ease",
          transition: {
            delay: 0.2,
            duration: 0.5,
          },
        }}
        w="100%"
        gap="20px"
        direction="column"
      >
        <Flex w="100%" align="center" gap="20px">
          <Text color="#CCD6F6" fontSize="32px">
            About me
          </Text>
          <Divider
            orientation="horizontal"
            borderColor="#ccd6f6"
            w="40%"
            opacity={0.2}
          />
        </Flex>
        <Flex w="100%" gap="20px" textAlign="justify">
          <Flex direction="column" gap="25px" fontSize="15px">
            <Text>
              {`Hey there! I'm Yago Leite, a mathematician who loves building things for the web. A couple of years ago, I took the plunge into frontend development, discovering how my math background could add an interesting spin to the way I approach code.`}
            </Text>
            <Text>
              {`Fast-forward to today, I've had my hand in various projects, applying my skills to create elegant, `}{" "}
              <Text as="span" color="#64ffda">
                subtle animations
              </Text>{" "}
              that bring web pages to life. While I enjoy dabbling in 3D, my
              true passion lies in weaving simple, yet captivating visuals that{" "}
              <Text as="span" color="#64ffda">
                enhance user interaction.
              </Text>
            </Text>
            <Text>{`If your project could benefit from a blend of mathematics, creativity, and advanced web technologies, I'd be more than happy to connect.`}</Text>
            <Text>{`Here are the main stacks that I've working on ;)`}</Text>
            <Flex
              direction="row"
              justify="left"
              wrap="wrap"
              gap="15px"
              fontFamily="Lekton"
              fontWeight="900"
              letterSpacing="2px"
            >
              <Flex direction="column" gap="5px">
                {stacks.slice(0, stacks.length / 2).map((text, i) => (
                  <Flex key={i} gap="5px" align="center">
                    <Flex
                      w="15px"
                      h="15px"
                      justify="center"
                      align="center"
                      fontWeight="800"
                    >
                      <MdArrowRight color="#64ffda" />
                    </Flex>
                    <Text fontSize="13px">{text}</Text>
                  </Flex>
                ))}
              </Flex>
              <Flex direction="column" gap="5px">
                {stacks.slice(stacks.length / 2).map((text, i) => (
                  <Flex key={i + stacks.length / 2} gap="5px" align="center">
                    <Flex w="15px" h="15px" justify="center" align="center">
                      <MdArrowRight color="#64ffda" />
                    </Flex>
                    <Text fontSize="13px" key={i + stacks.length / 2}>
                      {text}
                    </Text>
                  </Flex>
                ))}
              </Flex>
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
      </Flex>
    </AnimatePresence>
  );
};

export default AboutMe;
