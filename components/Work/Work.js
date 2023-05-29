import { Flex, Text } from "@chakra-ui/react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import React, { useState } from "react";
import { motion } from "framer-motion";

const data = [
  {
    name: "Younner",
    title: "Frontend Dev",
    date: "2022 - Present",
    items: [
      `Work as a productive and positive team member to design, code, report and debug operations`,
      "Helped to achieve a consistent look and visual theme across the website by promoting uniform fonts, formatting, images and layout.",
      "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
      "Successfully identified, diagnosed, and fixed website issues",
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

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Flex
      direction="column"
      w="100%"
      // maxW="800px"
      gap="15px"
      fontFamily="Inter"
    >
      <Text>{`Where I've worked`}</Text>
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
                    <Flex key={index}>
                      <Text fontSize="15px"> - {item}</Text>
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
