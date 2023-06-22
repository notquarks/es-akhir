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

export default function Home() {
  return (
    <Flex
      m={"auto"}
      mt={20}
      flexDir={"column"}
      w="100vw"
      p={8}
      alignItems="center"
      justifyContent={"space-around"}
    >
      <Box w={"4xl"}>
        <Stack spacing={18} align={"center"}>
          <Heading
            w={"80%"}
            fontSize={"6xl"}
            textAlign={"center"}
            fontWeight={"semibold"}
          >
            “Temukan Kepribadian Aslimu dalam 10 Menit!”
          </Heading>
          <Text fontSize={"xl"} textAlign={"center"} w={"70%"}>
            Hanya dalam waktu 10 menit, kamu akan mendapatkan gambaran
            kepribadianmu dan alasan di balik segala tindakanmu.
          </Text>
          <Link to="/quiz">
            <Button
              mt={6}
              colorScheme="teal"
              // size="lg"
              h={"80px"}
              w={"264px"}
              rightIcon={<ArrowForwardIcon />}
              borderRadius={"full"}
              fontSize={"2xl"}
            >
              Mulai Quiz !
            </Button>
          </Link>
        </Stack>
      </Box>
    </Flex>
  );
}

// export default function Home() {
//   const [count, setCount] = useState(0);
//   const [currentTime, setCurrentTime] = useState(0);

//   useEffect(() => {
//     const fetchTime = async () => {
//       try {
//         const response = await fetch("/time");
//         const jsonData = await response.json();
//         setCurrentTime(jsonData.time);
//       } catch (error) {
//         console.error("Error fetching time:", error);
//       }
//     };
//     fetchTime();
//   }, []);
//   return (
//     <Flex
//       m={"auto"}
//       flexDir={"column"}
//       w="100vw"
//       p={8}
//       alignItems="center"
//       justifyContent={"space-around"}
//     >
//       <Box display="flex" alignItems="center" justifyContent="space-between">
//         <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </Box>
//       <Container py={4}>
//         <Center>
//           <h1>Vite + React</h1>
//         </Center>
//       </Container>
//       <Stack
//         p={4}
//         alignItems="center"
//         justifyContent={"space-around"}
//         spacing={2}
//       >
//         <Center py={4}>
//           <Button size="md" onClick={() => setCount((count) => count + 1)}>
//             count is {count}
//           </Button>
//         </Center>

//         <p>The current time is {currentTime}.</p>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </Stack>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </Flex>
//   );
// }
