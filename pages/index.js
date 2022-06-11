import { Box } from "@chakra-ui/react";
import AboutMe from "../components/AboutMe/AboutMe";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Projects from "../components/projects/Projects";

export default function Home() {
  return (
    <Box color="white" h="3000px" bg="#1e2029">
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
    </Box>
  );
}
