import React, { useState } from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Project = ({ project, index, testando, controls }) => {
  return (
    <Flex
      key={index}
      direction="column"
      as={motion.div}
      variants={testando(index)}
      animate={controls}
      whileHover={{ scale: 1.1 }}
    >
      <Flex overflow="hidden">
        <Image objectFit="cover" src={project.img} />
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
