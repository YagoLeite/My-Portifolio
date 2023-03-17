import { Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";

const parentVariant = {
  initial: {
    x: 0,
  },
  hovered: {
    x: [0, -3, -5, -3, 0, 3, 5, 3, 0],
  },
};

const childVariant = {
  initial: {
    y: 0,
    backgroundColor: "transparent",
    transition: {
      duration: 0.5,
      type: "ease",
    },
  },
  hovered: {
    y: -160,
    backgroundColor: "rgba(0,0,0,0.5)",
    transition: {
      duration: 0.5,
      type: "ease",
    },
  },
};

const textVariant = {
  initial: {
    opacity: 0,
  },
  hovered: {
    opacity: 1,
  },
};

const imgVariant = {
  initial: {
    opacity: 0.7,
  },
  hovered: {
    opacity: 1,
  },
};

const ProjectCard = ({ project, key }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link href={project.demo} passHref>
      <a target="_blank" rel="noopener noreferrer">
        <Flex
          as={motion.div}
          key={key}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, animationDelay: 0.4, type: "ease" }}
          // transition={{ duration: 0.4, type: "ease" }}
          // variants={parentVariant}
          onMouseEnter={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
          animate={isHovered ? "hovered" : "initial"}
          w="300px"
          h="430px"
          borderRadius="10px"
          overflow="hidden"
          boxShadow="dark-lg"
          position="relative"
        >
          <Image
            as={motion.img}
            variants={imgVariant}
            src={project.image.src}
            scale={project.title === "Jokenpo" && 0.8}
            alt="pic"
            objectFit="fill"
            position="absolute"
          />
          <Flex
            as={motion.div}
            variants={childVariant}
            direction="column"
            position="absolute"
            w="100%"
            h="fit-content"
            p="20px"
            top="80%"
            color="white"
            pointerEvents="none"
            gap="10px"
            borderRadius="10px"
          >
            <Text
              scale={0.8}
              textShadow="1px 1px black"
              fontWeight="500"
              fontSize="20px"
            >
              {project.title}
            </Text>
            <Flex
              as={motion.div}
              variants={textVariant}
              direction="column"
              w="100%"
              h="170px"
              // bg="green"
              wordBreak="break-word"
              fontSize="15px"
              gap="10px"
              justify="space-between"
            >
              <Text textShadow="1px 1px black">{project.message}</Text>
              <Text textShadow="2px 2px black">Click to find more!</Text>
            </Flex>
          </Flex>
        </Flex>
      </a>
    </Link>
  );
};

export default ProjectCard;
