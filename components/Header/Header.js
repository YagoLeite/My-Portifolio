import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  return (
    <Flex minH="40px" h="100px" alignItems="center" justify="space-around">
      <Link href="/">Logo</Link>
      <Flex gap="8px" justify="space-between">
        <Flex
          borderBottom="4px"
          borderColor={router.pathname == "/aboutme" ? "#9a6aff" : "#1e2029"}
        >
          <Link href="/aboutme">About me</Link>
        </Flex>
        <Flex
          borderBottom="4px"
          borderColor={router.pathname == "/projects" ? "#9a6aff" : "#1e2029"}
        >
          <Link href="/projects">Projects</Link>
        </Flex>
        <Text>Contacts</Text>
      </Flex>
    </Flex>
  );
};

export default Header;
