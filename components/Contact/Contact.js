import { Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ContactButton from "./ContactButton";

const Contact = () => {
  return (
    <Flex
      w="100%"
      direction="column"
      align="center"
      justify="center"
      gap="20px"
      h="80vh"
    >
      <Flex w="100%" gap="10px" justifyContent="space-between" align="center">
        <Divider
          //   display={["none", "none", "flex", "flex"]}
          orientation="horizontal"
          borderColor="#ccd6f6"
          w="100%"
          opacity={0.2}
        />
        <Flex minW={["200px", "400px", "400px", "400px"]} justify="center">
          <Text fontSize={["25px", "40px", "50px", "50px"]} w="fit-content">
            Get In Touch
          </Text>
        </Flex>
        <Divider
          //   display={["none", "none", "flex", "flex"]}
          orientation="horizontal"
          borderColor="#ccd6f6"
          w="100%"
          opacity={0.2}
        />
      </Flex>
      <Text
        fontSize={["15px", "20px", "20px", "20px"]}
        textAlign="center"
        w="fit-content"
      >{`Interested in learning more about my work or have a project idea that you'd like to discuss? I invite you to reach out with a friendly 'Hello!' – I'm always open to new collaborations and conversations!`}</Text>
      <ContactButton message="Contact me" />
    </Flex>
  );
};

export default Contact;
