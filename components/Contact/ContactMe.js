import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import ContainerWrapper from "../Wrapper/ContainerWrapper";
import Link from "next/link";

const ContactMe = () => {
  const email = "yagoleitedev@gmail.com";
  const subject = encodeURIComponent("Subject of the email");
  const body = encodeURIComponent("Body of the email");
  return (
    <Flex
      w="100%"
      h="fit-content"
      color="white"
      direction="column"
      gap="30px"
      justify="center"
      align="left"
      mt="50px"
      p="20px"
    >
      <Text fontSize="30px">Contact me</Text>

      <ContainerWrapper>
        <Flex w="100%" h="100%" direction="column" gap="10px">
          <Text fontSize={["18px", "18px", "20px"]} fontWeight="bold">
            Contact
          </Text>
          <Text>
            The best way to contact me is through email or LinkedIn.
            <br /> Give me a shout here:
          </Text>
          <Link
            href={"https://www.linkedin.com/in/yagoleite/"}
            legacyBehavior
            passHref
          >
            <a target={"https://www.linkedin.com/in/yagoleite/"}>
              LinkedIn: https://www.linkedin.com/in/yagoleite/
            </a>
          </Link>
          <Link
            href={`mailto:${email}?subject=${subject}&body=${body}`}
            _hover={{ textDecoration: "none" }}
            legacyBehavior
            passHref
          >
            <a target={`mailto:${email}?subject=${subject}&body=${body}`}>
              Email: yagoleitedev@gmail.com
            </a>
          </Link>
        </Flex>
      </ContainerWrapper>
    </Flex>
  );
};

export default ContactMe;
