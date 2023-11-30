import { Flex, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const MyHero = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      //   minH="100vh"
      justify="top"
      align="left"
      //   maxW="700px"
    //   color="white"
      direction="column"
      gap="30px"
      position={["relative", "relative", "relative", "sticky", "sticky"]}
      top={["", "", "", "0", "0"]}
      left={["", "", "", "0", "0"]}
      right={["", "", "", "0", "0"]}
      px="30px"
      pt="100px"
      zIndex={10}
    >
          <Flex>
      {"Hi, I'm Yago".split("").map((letter, index) => {
        return (
          <Flex key={index}>
            {letter === " " ? (
              <Text opacity={0}>aa</Text>
            ) : (
              <SingleLetter letter={letter} size={['45px',  '55px',  '60px']} />
            )}
          </Flex>
        );
      })}
    </Flex>
      <Flex w="100%" gap="30px">
        <Flex
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          cursor="pointer"
          w="40px"
          h="40px"
          justify="center"
          align="center"
          borderRadius="10px"
          border="1px solid"
          p="10px"
        >
          <Link href={"https://github.com/YagoLeite"} legacyBehavior passHref>
            <a target={"https://github.com/YagoLeite"}>
              <FiGithub size="100%" />
            </a>
          </Link>
        </Flex>
        <Flex
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          cursor="pointer"
          w="40px"
          h="40px"
          justify="center"
          align="center"
          borderRadius="10px"
          border="1px solid"
          p="10px"
        >
          <Link
            href={"https://www.linkedin.com/in/yagoleite/"}
            legacyBehavior
            passHref
          >
            <a target={"https://www.linkedin.com/in/yagoleite/"}>
              <FiLinkedin size="100%" />
            </a>
          </Link>
        </Flex>
      </Flex>
      <Text
        fontSize={["20px", "24px", "24px"]}
      >{`I'm a frontend developer and mathematician, skilled in bringing dynamic animations to web interfaces. My focus is on efficient, engaging user experiences. In my free time, I enjoy exploring new tech and solving complex problems. Ready and eager for new challenges in the world of development.`}</Text>
    </Flex>
  );
};

function SingleLetter ({ letter, size })  {
    const controls = useAnimation();
    const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
  
    const bump = {
      visible: {
        // These values may vary depending on your font size
        scaleX: [1, 0.85, 1.15, 0.9, 1.05, 1],
        scaleY: [1, 1.15, 0.85, 1.05, 0.9, 1],
        y: ["0px", "-7px", "3px", "-3px", "2px", "0px"],
        transition: {
          duration: 1,
          type: "spring",
        },
      },
    };
  
    return (
      <Text
        as={motion.div}
        fontSize={size}
        animate={controls}
        onHoverStart={() => {
          if (!isAnimationPlaying) {
            setIsAnimationPlaying(true);
            controls.start(bump.visible);
          }
        }}
        onAnimationComplete={() => setIsAnimationPlaying(false)}
      >
        {letter}
      </Text>
    );
  };
  

export default MyHero;
