import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Box color="white" bg="#1e2029">
      <Header />
    </Box>
  );
}
