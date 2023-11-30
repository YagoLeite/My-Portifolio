import { Flex } from "@chakra-ui/react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const ContainerWrapper = ({ children, ...rest }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
    layoutEffect: false,
  });

  const scaleTransform = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <Flex
      as={motion.div}
      ref={ref}
      bg="hsla(0,0%,9%,.5)"
      h="100%"
      w="100%"
      //   maxW={["300px", "400px", "500px"]}
      p="20px"
      //   style={{ backdropFilter: "blur(8px)" }}
      backdropFilter="blur(8px)"
      style={{ scale: scaleTransform }}
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default ContainerWrapper;
