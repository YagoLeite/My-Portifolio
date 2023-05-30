import { Box, Flex, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function ContactMe({ message }) {
  const email = "yagoleitedev@gmail.com";
  const subject = encodeURIComponent("Subject of the email");
  const body = encodeURIComponent("Body of the email");

  return (
    <Link
      href={`mailto:${email}?subject=${subject}&body=${body}`}
      _hover={{ textDecoration: "none" }}
    >
      <Flex
        as={motion.div}
        whileHover={{ boxShadow: "0px 0px 5px #64ffda", y: -2 }}
        borderRadius="5px"
        border="2px #64ffda solid"
        w="130px"
        h="55px"
        align="center"
        justify="center"
        bg="#050d12"
      >
        {message}
      </Flex>
    </Link>
  );
}
