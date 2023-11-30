import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import ContainerWrapper from "../Wrapper/ContainerWrapper";
import { projectData } from "../../constans/Constants";
import Link from "next/link";
const data = [
  {
    name: "Younner",
    title: "Frontend Dev",
    date: "2022 - Present",
    items: [
      `Implemented responsive web designs, ensuring optimal performance across multiple device types.`,
      "Implemented a successful API integration project which synchronized data across different services, enhancing overall system efficiency and reducing data redundancy.",
      "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
      "Developed reusable components and front-end libraries for future use, increasing development speed and efficiency.",
    ],
  },
  {
    name: "The British School",
    title: "Maths teacher",
    date: "2018 - 2022",
    items: [
      `Worked on meeting educational standards and enlightening students`,
      "Promoted student engagement and group learning.",
      "Planned and delivered well-structured lessons which engaged and motivated students",
      "Provided optimal instructions and academic support to students",
    ],
  },
];

const MyProjects = () => {
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
        My projects
      </Text>
      {projectData.map((item, index) => (
        <ContainerWrapper key={index}>
          <Project data={item} />
        </ContainerWrapper>
      ))}
    </Flex>
  );
};

function Project({ data }) {
  return (
    <Flex w="100%" h="100%" direction="column" gap="15px">
      <Flex w="100%" justify="space-between" aling="center">
        <Text fontSize={["18px", "18px", "20px"]} fontWeight="bold">
          {data.name}
        </Text>
        <Link href={data.link} passHref legacyBehavior>
          <a target="_blank">Visit Website</a>
        </Link>
      </Flex>

      <Text fontSize={["14px", "16px", "18px"]}>{data.description}</Text>

      <Flex w="100%" flexWrap="wrap" gap="10px">
        {data.stacks.map((item, index) => (
          <ProjectTag stack={item} key={index} />
        ))}
      </Flex>
    </Flex>
  );
}

function ProjectTag({ stack }) {
  return (
    <Flex
      w="fit-content"
      px="10px"
      py="5px"
      justify="center"
      align="center"
      borderRadius="10px"
      bg="#5a047d"
      fontSize={["13px", "14px", "15px"]}
      color="white"
    >
      <Text>{stack}</Text>
    </Flex>
  );
}

export default MyProjects;
