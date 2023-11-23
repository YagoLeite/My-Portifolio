import { Divider, Flex, Text } from "@chakra-ui/react";
import {
  AnimatePresence,
  AnimateSharedLayout,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdArrowRight } from "react-icons/md";
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

const Work = () => {
  const [selectedWork, setSelectedWork] = useState(data[0]);
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Flex
      as={motion.div}
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      direction="column"
      w="100%"
      // maxW="800px"
      gap="50px"
      minH="600px"
      fontFamily="Inter"
      align="center"
      justify="center"
    >
      <Flex w="100%" gap="20px" align="center">
        <Text color="#CCD6F6" fontSize="32px">{`Where I've worked`}</Text>
        <Divider
          orientation="horizontal"
          borderColor="#ccd6f6"
          w="40%"
          opacity={0.2}
        />
      </Flex>
      <Flex w="100%" gap="20px" direction={["column", "column", "row", "row"]}>
        <AnimateSharedLayout>
          <Flex direction="column" w="100%" maxW="fit-content">
            {data.map((work, index) => (
              <SidebarItem
                key={index}
                work={work}
                isSelected={work === selectedWork}
                onClick={() => setSelectedWork(work)}
              />
            ))}
          </Flex>
        </AnimateSharedLayout>

        <Flex direction="column" w="100%" gap="15px">
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={selectedWork.name}
              // display="flex"
              style={{ minHeight: "300px" }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
              transition={{ duration: 0.3 }}
            >
              <Flex direction="column" gap="5px">
                <Text fontSize="20px" fontWeight="semibold" color="#CCD6F6">
                  {selectedWork.title}{" "}
                  <Text as="span" color="#64ffda">
                    @ {selectedWork.name}
                  </Text>
                </Text>
                <Text fontSize="13px">{selectedWork.date}</Text>
              </Flex>
              <Flex direction="column" gap="10px" mt="10px">
                {selectedWork.items?.map((item, index) => {
                  return (
                    <Flex key={index} align="center" gap="5px">
                      <Flex w="15px" h="15px" justify="center" align="center">
                        <MdArrowRight color="#64ffda" />
                      </Flex>
                      <Text fontSize="15px">{item}</Text>
                    </Flex>
                  );
                })}
              </Flex>
            </motion.div>
          </AnimatePresence>
        </Flex>
      </Flex>
    </Flex>
  );
};

function SidebarItem({ work, isSelected, onClick }) {
  return (
    <Flex
      position="relative"
      onClick={onClick}
      py="5px"
      pl="10px"
      w="100%"
      alignItems="center"
      cursor="pointer"
    >
      {/* New static line element */}
      <div
        style={{
          height: "100%",
          width: "2px",
          backgroundColor: "#8892b0",
          position: "absolute",
          left: 0,
        }}
      />
      {isSelected && (
        <motion.div
          layoutId="highlight"
          initial={false}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          style={{
            height: "100%",
            width: "2px",
            backgroundColor: "#64ffda",
            position: "absolute",
            left: 0,
          }}
        />
      )}
      <Text color={isSelected ? "#64ffda" : "#8892b0"}>{work.name}</Text>
    </Flex>
  );
}

export default Work;
