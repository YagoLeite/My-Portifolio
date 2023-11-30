import React from "react";
import { Box } from "@chakra-ui/react";

const TopGradient = () => {
  return (
    <Box
      position="fixed"
      top="0"
      w="full"
      h="150px"
      bgGradient="linear(to-b, whiteAlpha.200, transparent)"
    />
  );
};

export default TopGradient;
