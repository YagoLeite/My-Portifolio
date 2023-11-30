import { Flex } from "@chakra-ui/react";
import React from "react";

const ContainerWrapper = ({ children, ...rest }) => {
  return (
    <Flex
      bg="hsla(0,0%,9%,.5)"
      h="100%"
      w="100%"
      //   maxW={["300px", "400px", "500px"]}
      p="20px"
      //   style={{ backdropFilter: "blur(8px)" }}
      backdropFilter="blur(8px)"
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default ContainerWrapper;
