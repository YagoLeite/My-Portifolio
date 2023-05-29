import { Box, Flex } from "@chakra-ui/react";
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
      overflowX="hidden"
      align="center"
      color="white"
      h="20000px"
      bg="#1e2029"
    >
      <Flex
        direction="column"
        fontFamily="Roboto"
        p="20px"
        maxW="1440px"
        justify="center"
        align="center"
      >
        <Header />
        {/* <Hero /> */}
        {/* <AboutMe /> */}
        <Work />
        <Projects />
      </Flex>
    </Flex>
  );
}
