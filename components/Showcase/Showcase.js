import { Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

const overlayVariantsTwo = {
  idle: { left: "100%", transition: { duration: 0.4 } },
  hovered: { left: "0%", transition: { duration: 0.4 } },
};
const overlayVariantsOne = {
  idle: { left: "100%", transition: { duration: 0.4 } },
  hovered: { left: "0%", transition: { delay: 0.4, duration: 0.4 } },
};

const imgVariants = {
  idle: {
    scale: 1,
    transition: { duration: 0.4 },
  },
  hovered: {
    scale: 1.1,
    transition: { duration: 0.4 },
  },
};

const textVariants = {
  idle: { opacity: 0 },
  hovered: { opacity: 1, transition: { delay: 0.5 } },
};

const textVariantsTwo = {
  idle: { opacity: 0 },
  hovered: { opacity: 1, transition: { delay: 0.9 } },
};

const Showcase = ({ data }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Link href={data.link} legacyBehavior passHref>
      <a target={data.link}>
        <Flex
          as={motion.div}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          position="relative"
          direction="column"
          //   bg="green"
          //   w={["300px", "400px", "500px", "800px"]}
          w="100%"
          h="400px"
          jusitfy="center"
          align="center"
          overflow="hidden"
          cursor="pointer"
          color="white"
        >
          <Image
            // src="/animationStoreImage.png"
            src={data.image}
            srcSet={data.image}
            alt="project image"
            sizes="(max-width: 320px) 280px, 
             (max-width: 480px) 440px, 
             800px"
            as={motion.img}
            variants={imgVariants}
            initial="idle"
            animate={isHovering ? "hovered" : "idle"}
            position="aboslute"
            // top="0"
            objectFit="fill"
            // w={["300px", "400px", "500px", "700px"]}
            h="400px"
          />
          <Flex
            as={motion.div}
            variants={overlayVariantsTwo}
            initial="idle"
            animate={isHovering ? "hovered" : "idle"}
            position="absolute"
            top="50%"
            // w={["300px", "400px", "500px", "700px"]}
            w="100%"
            h="200px"
            background="rgba(0, 0, 0, 0.5)"
            direction="column"
            p="10px"
            gap="10px"
          >
            <Flex w="100%" px="10px">
              <Text
                as={motion.div}
                variants={textVariants}
                initial="idle"
                animate={isHovering ? "hovered" : "idle"}
                fontSize={["13px", "14px", "16px"]}
                textAlign="center"
              >
                {data.description}
              </Text>
            </Flex>
          </Flex>
          <Flex
            as={motion.div}
            variants={overlayVariantsOne}
            initial="idle"
            animate={isHovering ? "hovered" : "idle"}
            position="absolute"
            // top="0"
            // w={["300px", "400px", "500px", "700px"]}
            w="100%"
            h="200px"
            background="rgba(0, 0, 0, 0.5)"
          >
            <Flex w="100%" align="center" justify="center">
              <Text
                as={motion.div}
                variants={textVariantsTwo}
                initial="idle"
                animate={isHovering ? "hovered" : "idle"}
                fontSize={["55px", "60px"]}
                fontWeight="bold"
              >
                {data.title}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </a>
    </Link>
  );
};

export default Showcase;
