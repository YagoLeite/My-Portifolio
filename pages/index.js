import { Box, Divider, Flex, Show, Text } from "@chakra-ui/react";
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
import Showcase from "../components/Showcase/Showcase";

const iconsData = [
  { icon: <FiGithub />, link: "https://github.com/YagoLeite" },
  { icon: <FiInstagram />, link: "https://www.instagram.com/yagomaluco/" },
  { icon: <FiLinkedin />, link: "https://www.linkedin.com/in/yagoleite/" },
];

const data = [
  {
    title: "TOP GAIN",
    description:
      " In my project with TopGain, a Brazilian company specializing in financial market education, I focused on enhancing user experience across their digital platforms. This involved streamlining the interface for their extensive course offerings and improving the interactivity of live market discussions and chat features. My efforts led to increased user engagement and a more intuitive learning environment, showcasing my skills in user-centered design and digital innovation in education.",
    image: "/topGainImage.png",
    link: "http://www.topgain.com",
  },
  {
    title: "ANIMATION STORE",
    description:
      "Animation Store is a streamlined, user-friendly hub for developers to explore and acquire animations with ease. It boasts a vast collection of animations crafted using Chakra UI, Framer Motion, and React. Users can effortlessly view the source code of any animation and integrate it into their projects with just two clicks. Additionally, this platform encourages community engagement by allowing users to share their own animations, fostering a collaborative and innovative environment.",
    image: "/animationStoreImage.png",
    srcSet: `
    /animationStoreSmallImage.png 320w,
    /animationStoreMidImage.png 480w,
    /animationStoreImage.png 800w
  `,
    link: "http://www.animationstore.dev",
  },
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
          <Flex direction="column" gap="25px" w="100%">
            <Flex w="100%" gap="20px" align="center">
              <Text color="#CCD6F6" fontSize="32px">{`My TOP projects`}</Text>
              <Divider
                orientation="horizontal"
                borderColor="#ccd6f6"
                w="40%"
                opacity={0.2}
              />
            </Flex>

            {data.map((item, idex) => (
              <Showcase data={item} key={idex} />
            ))}
          </Flex>
          {/* <Showcase /> */}
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
