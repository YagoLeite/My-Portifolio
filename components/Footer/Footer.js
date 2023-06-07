import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const iconsData = [
  { icon: <FiGithub />, link: "https://github.com/YagoLeite" },
  { icon: <FiInstagram />, link: "https://www.instagram.com/yagomaluco/" },
  { icon: <FiLinkedin />, link: "https://www.linkedin.com/in/yagoleite/" },
];

const Footer = () => {
  return (
    <Flex
      w="100%"
      align="center"
      gap="10px"
      direction="column"
      justify="center"
      h="40px"
    >
      <Flex gap="10px">
        {iconsData.map((item, index) => {
          return (
            <Link href={item.link} passHref legacyBehavior key={index}>
              <a target="_blank">
                <Flex
                  as={motion.div}
                  cursor="pointer"
                  whileHover={{
                    y: -4,
                    scale: 1.1,
                    color: "#64ffda",
                    transition: { duration: 0.2 },
                  }}
                >
                  {item.icon}
                </Flex>
              </a>
            </Link>
          );
        })}
      </Flex>
      <Text fontSize="13px">Made with love</Text>
    </Flex>
  );
};

export default Footer;
