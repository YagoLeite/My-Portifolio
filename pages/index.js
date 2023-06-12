import { Box, Divider, Flex } from "@chakra-ui/react";
import AboutMe from "../components/AboutMe/AboutMe";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Projects from "../components/projects/Projects";
import Work from "../components/Work/Work";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import Link from "next/link";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Head from "next/head";

const iconsData = [
  { icon: <FiGithub />, link: "https://github.com/YagoLeite" },
  { icon: <FiInstagram />, link: "https://www.instagram.com/yagomaluco/" },
  { icon: <FiLinkedin />, link: "https://www.linkedin.com/in/yagoleite/" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Yago Leite</title>
        <meta
          name="description"
          content="Yago Leite is a professional web developer specializing in modern JavaScript frameworks like Next.js., Framer Motion and Chakra UI"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="canonical" href="https://www.yagoleitedev.com.br" />
        <meta charSet="utf-8" />
      </Head>
      <Flex
        // bg="#0a192f"
        bg="black"
        color="#8892b0"
        position="relative"
        justifyContent="space-around"
        w="100%"
        px="20px"
      >
        <Flex
          display={["none", "none", "flex", "flex"]}
          height="300px"
          position="sticky"
          top="0"
          align="center"
          justify="top"
          direction="column"
          gap="30px"
        >
          <Divider orientation="vertical" h="120px" />
          <Flex direction="column" gap="25px">
            {iconsData.map((item, index) => {
              return (
                <Link href={item.link} passHref legacyBehavior key={index}>
                  <a target="_blank">
                    <Flex
                      as={motion.div}
                      cursor="pointer"
                      whileHover={{
                        y: -4,
                        color: "#64ffda",
                        scale: 1.1,
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
        </Flex>
        <Flex
          direction="column"
          fontFamily="Inter"
          maxW="900px"
          p="20px"
          gap="80px"
          justify="center"
          align="center"
          alignSelf="center"
        >
          <Hero />
          <AboutMe />
          <Work />
          <Projects />
          <Contact />
          <Footer />
        </Flex>
        <Flex
          display={["none", "none", "flex", "flex"]}
          height="300px"
          position="sticky"
          top="0"
          align="center"
          justify="top"
          direction="column"
          gap="30px"
        >
          <Divider orientation="vertical" h="120px" />
          <motion.p
            style={{
              writingMode: "vertical-lr",
              textOrientation: "mixed",
              fontSize: "11px",
              cursor: "pointer",
            }}
            whileHover={{
              y: 10,
              color: "#64ffda",
              transition: { duration: 0.2 },
            }}
          >
            yagoleitedev@gmail.com
          </motion.p>
        </Flex>
      </Flex>
    </>
  );
}
