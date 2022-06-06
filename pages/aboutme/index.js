import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "../../components/Header/Header";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  console.log(router);
  return (
    <Box color="white" bg="#1e2029">
      <Header />
      <Box>about me</Box>
    </Box>
  );
};

export default index;
