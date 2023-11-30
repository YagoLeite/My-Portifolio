import { Flex } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Moon from "../Stars/Moon";
import StarsBackground from "../Stars/StarsBackground";
import MyHero from "../Hero/MyHero";
import MyWork from "../Work/MyWork";
import MyProjects from "../projects/MyProjects";
import useResizeObserver from "@react-hook/resize-observer";
import TopGradient from "../Stars/TopGradiant";
import ContactMe from "../Contact/ContactMe";
import Stacks from "../Stacks/Stacks";

const FullPage = () => {
  const ref = useRef();
  const [height, setHeight] = useState("100vh");

  useResizeObserver(ref, (entry) => {
    setHeight(entry.contentRect.height + 50);
  });

  return (
    <Flex
      w="100%"
      maxW="100vw"
      minH="100vw"
      bg="black"
      position="relative"
      h={height}
      //   color="#64ffda"
      color="white"
    >
      <Flex
        position="sticky"
        top="0"
        left="0"
        right="0"
        w="100%"
        h="100vh"
        overflow="hidden"
      >
        <Flex
          backgroundImage={`url(/backgroundImage.png)`}
          h="100vh"
          w="100%"
          backgroundSize="cover"
          backgroundPosition="bottom"
          zIndex={1}
        />
        <TopGradient />
        <Moon />
        <StarsBackground />
      </Flex>
      <Flex
        position="absolute"
        ref={ref}
        top="0"
        w="100%"
        zIndex={3}
        h="fit-content"
        direction={["column", "column", "column", "row", "row"]}
      >
        <MyHero />
        <Flex
          w="100%"
          h="fit-content"
          direction="column"
          gap="30px"
          align="center"
        >
          <MyWork />
          <MyProjects />
          <Stacks />
          <ContactMe />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FullPage;
