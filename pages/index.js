import { Box, Flex, Grid } from "@chakra-ui/react";
import AboutMe from "../components/AboutMe/AboutMe";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Projects from "../components/projects/Projects";
import Work from "../components/Work/Work";

export default function Home() {
  return (
    <Flex
      direction="column"
      w="100%"
      p="20px"
      overflowX="hidden"
      align="center"
      // color="white"
      bg="#0a192f"
      color="#8892b0"
    >
      <Flex
        direction="column"
        fontFamily="Inter"
        // p="20px"
        maxW="900px"
        gap="80px"
        justify="center"
        align="center"
      >
        {/* <Header /> */}
        <Hero />
        <AboutMe />
        <Work />
        <Projects />
      </Flex>
    </Flex>
  );
}
