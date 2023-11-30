import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import ContainerWrapper from "../Wrapper/ContainerWrapper";
import { MdArrowRight } from "react-icons/md";

const data = ["TypeScript", "Framer Motion", "React", "Chakra UI"];
const dataTwo = ["JavaScript", "React Three Fiber", "Three JS", "Maths"];

const Stacks = () => {
  return (
    <Flex
      w="100%"
      h="fit-content"
      // color="white"
      direction="column"
      justify="center"
      align="left"
      gap="30px"
      p="20px"
    >
      <Text fontSize="30px" fontWeight="bold">
        Stacks
      </Text>

      <ContainerWrapper>
        <Flex w="100%" h="100%" direction="column" gap="15px">
          <Flex w="100%" justify="space-between" aling="center">
            <Text fontSize={["18px", "18px", "20px"]} fontWeight="bold">
              Tech I Love
            </Text>
          </Flex>
          <Flex w="100%" direction={["row", "row", "row", "row"]} gap="20px">
            <Flex w="100%" direction="column" gap="10px">
              {data.map((item, index) => (
                <Flex key={index} align="center" gap="5px">
                  <Flex w="15px" h="15px" justify="center" align="center">
                    <MdArrowRight color="#64ffda" />
                  </Flex>
                  <Text fontSize={["13px", "16px", "16px", "16px"]}>
                    {item}
                  </Text>
                </Flex>
              ))}
            </Flex>
            <Flex w="100%" direction="column" gap="10px">
              {dataTwo.map((item, index) => (
                <Flex key={index} align="center" gap="5px">
                  <Flex w="15px" h="15px" justify="center" align="center">
                    <MdArrowRight color="#63ffda" />
                  </Flex>
                  <Text fontSize={["13px", "16px", "16px", "16px"]}>
                    {item}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </ContainerWrapper>
    </Flex>
  );
};

export default Stacks;
