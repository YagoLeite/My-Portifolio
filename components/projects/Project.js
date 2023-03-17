import React, { useState } from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Project = ({ project, index, testando, controls }) => {
  const router = useRouter();
  return (
    <Flex
      key={index}
      direction="column"
      as={motion.div}
      variants={testando(index)}
      animate={controls}
      whileHover={{ scale: 1.1 }}
      onClick={() => router.push(project.title)}
    >
      <Flex overflow="hidden">
        {/* <Image objectFit="cover" src={project.img} /> */}
      </Flex>
      <Box>
        <Text>Title: {project.title}</Text>
        <Text>Demo: {project.demo} </Text>
        <Text>GitHub: {project.github} </Text>
      </Box>
    </Flex>
  );
};

export default Project;
