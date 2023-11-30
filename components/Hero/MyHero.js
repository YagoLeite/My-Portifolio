import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
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
      color="white"
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
      <Text fontSize="40px" fontWeight="extrabold">{`Hi, I'm Yago`}</Text>
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

export default MyHero;
