import React from "react";
import ContainerWrapper from "../Wrapper/ContainerWrapper";
import { Flex, Text } from "@chakra-ui/react";
import { MdArrowRight } from "react-icons/md";
import { workData } from "../../constans/Constants";

const MyWork = () => {
  return (
    <Flex
      w="100%"
      h="fit-content"
      // color="white"
      // color="#64ffda"
      direction="column"
      gap="30px"
      justify="center"
      align="left"
      mt="50px"
      p="20px"
    >
      <Text fontSize="30px" fontWeight="bold">
        Where i worked
      </Text>
      {workData.map((item, index) => (
        <ContainerWrapper key={index}>
          <Work data={item} />
        </ContainerWrapper>
      ))}
    </Flex>
  );
};

function Work({ data }) {
  return (
    <Flex w="100%" h="100%" direction="column" gap="5px">
      <Text fontSize={["18px", "18px", "20px"]} fontWeight="bold">
        {data.title}
      </Text>
      <Flex
        w="100%"
        gap="5px"
        align="center"
        justify="left"
        fontSize={["13px", "13px", "15px"]}
      >
        <Text>{data.name}</Text>
        <Text>Full-Time</Text>
        <Text>{data.date}</Text>
      </Flex>
      <Text fontSize="14px">Brazil</Text>
      <Flex w="100%" direction="column" gap="10px">
        {data.items.map((item, index) => (
          <Flex key={index} align="center" gap="5px">
            <Flex w="15px" h="15px" justify="center" align="center">
              <MdArrowRight color="#64ffda" />
            </Flex>
            <Text fontSize="16px">{item}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export default MyWork;
