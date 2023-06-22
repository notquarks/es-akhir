import { useState, useEffect } from "react";
import reactLogo from "../assets/react.svg";
// import React from "react";
import "../App.css";
import viteLogo from "/vite.svg";
import {
  Box,
  Button,
  Center,
  Flex,
  Stack,
  Container,
  Text,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function About() {
  return (
    <Flex
      m={"auto"}
      mt={10}
      flexDir={"column"}
      w="100vw"
      p={8}
      alignItems="center"
      justifyContent={"space-around"}
    >
      <Box w={"6xl"}>
        <Stack spacing={20} align={"center"}>
          <Heading
            w={"80%"}
            fontSize={"6xl"}
            textAlign={"center"}
            fontWeight={"semibold"}
          >
            Tentang Kami
          </Heading>
          <Stack w={"80%"} fontSize={"xl"} textAlign={"justify"} gap={8}>
            <Text>
              Kami adalah tim yang berdedikasi untuk membantu Anda memahami dan
              mencerahkan kepribadian Anda. Dengan pengalaman yang luas dalam
              bidang psikologi dan kepribadian, kami percaya bahwa setiap
              individu memiliki keunikan dan potensi yang luar biasa. Melalui
              quiz kepribadian kami, kami bertujuan untuk memberikan wawasan
              yang mendalam tentang sifat-sifat dominan Anda, membantu Anda
              mengenali kekuatan Anda, dan memberikan pemahaman yang lebih dalam
              tentang bagaimana kepribadian Anda memengaruhi interaksi
              sehari-hari Anda.
            </Text>
            <Text>
              Kami berkomitmen untuk menyajikan konten yang akurat, informatif,
              dan terpercaya. Kami terus melakukan riset dan penelitian terbaru
              untuk memastikan bahwa kami memberikan hasil yang paling relevan
              dan bermanfaat bagi Anda. Tim kami terdiri dari para ahli
              psikologi yang berpengalaman dan berdedikasi, yang dengan
              antusiasme membantu Anda dalam perjalanan penemuan diri.
            </Text>
            <Text>
              Kami sangat senang bisa menjadi bagian dari perjalanan Anda dalam
              menggali lebih dalam tentang kepribadian Anda. Jadilah diri Anda
              yang sejati, temukan potensi Anda yang tak terbatas, dan nikmati
              pengalaman kami yang menyenangkan dan pencerah.
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
}
