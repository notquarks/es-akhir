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
  Image,
  Tag,
  TagLabel,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Type() {
  function getColorScheme(personality) {
    switch (personality) {
      case "Sanguinis":
        return "orange";
      case "Koleris":
        return "red";
      case "Melankolis":
        return "blue";
      case "Plegmatis":
        return "green";
      default:
        return "gray";
    }
  }
  const personality = {
    Sanguinis: {
      name: "Sanguinis",
      description:
        "Orang-orang dengan tipe kepribadian sanguinis cenderung hidup, optimis, ceria, dan tanpa beban. Mereka suka petualangan dan memiliki toleransi risiko yang tinggi. Orang-orang sanguinis umumnya tidak tahan dengan kebosanan dan akan mencari variasi dan hiburan. Secara alami, sifat ini kadang-kadang dapat berdampak negatif pada hubungan romantis dan hubungan lainnya.Orang-orang sanguin umumnya tidak tahan dengan kebosanan dan akan mencari variasi dan hiburan. Secara alami, sifat ini kadang-kadang dapat berdampak negatif pada hubungan romantis dan hubungan lainnya.Karena kepribadian ini rentan terhadap perilaku pencarian kesenangan, banyak orang dengan kepribadian sanguin mungkin mengalami kesulitan dengan kecanduan. Kebingungan mereka yang konstan dapat menyebabkan kebiasaan makan berlebihan dan masalah berat badanOrang-orang sanguin sangat kreatif dan dapat menjadi seniman hebat. Selain itu, mereka adalah entertainer yang fantastis dan akan berhasil jika memilih karir di industri hiburan. Kemampuan alami mereka juga akan membantu mereka jika memilih pekerjaan yang berhubungan dengan.",
      img: "/sanguine.png",
      work: ["Marketing", "Travel", "Model", "Memasak", "Olahraga"],
    },
    Koleris: {
      name: "Koleris",
      description:
        "Seseorang dengan temperamen koleris murni biasanya adalah orang yang berorientasi pada tujuan. Orang-orang koleris sangat cerdas, analitis, dan logis. Sangat praktis dan lugas, mereka tidak selalu menjadi teman yang baik atau terlalu ramah. Mereka tidak menyukai pembicaraan kecil dan menikmati percakapan yang dalam dan bermakna. Lebih baik mereka sendiri daripada bersama orang-orang dangkal dan permukaan. Secara ideal, mereka ingin menghabiskan waktu dengan orang-orang yang memiliki minat profesional yang serupa.",
      img: "/choleric.png",
      work: [
        "Manajemen",
        "Teknologi",
        "Statistik",
        "Engineering",
        "Pemrograman",
        "Bisnis",
      ],
    },
    Melankolis: {
      name: "Melankolis",
      description:
        "Orang-orang dengan kepribadian melankolis menyukai tradisi.Seperti wanita memasak untuk pria; pria membuka pintu untuk wanita. Mereka mencintai keluarga dan teman-teman mereka dan, berbeda dengan orang-orang sanguinis, mereka tidak mencari hal-hal baru dan petualangan. Bahkan lebih dari itu, mereka menghindarinya sebisa mungkin. Seseorang dengan temperamen melankolis tidak mungkin menikah dengan orang asing atau meninggalkan tanah air mereka untuk negara lain. Orang-orang melankolis sangat sosial dan berusaha untuk berkontribusi pada masyarakat. Karena sangat teliti dan akurat, mereka adalah manajer yang fantastis dengan kepribadian yang baik.",
      img: "/melancholic.png",
      work: ["Manajemen", "Akuntansi", "Kerja Sosial", "Administrasi"],
    },
    Plegmatis: {
      name: "Plegmatis",
      description:
        "Seseorang dengan kepribadian plegmatis biasanya adalah orang yang suka bergaul. Mereka mencari harmoni antar pribadi dan hubungan yang erat, yang membuat orang plegmatis menjadi pasangan yang setia dan orangtua yang penuh kasih. Mereka berusaha mempertahankan hubungan dengan teman lama, anggota keluarga yang jauh, dan tetangga. Orang-orang dengan sifat plegmatis cenderung menghindari konflik dan selalu mencoba menjadi mediator antara orang lain untuk mengembalikan perdamaian dan harmoni.",
      img: "/phlegmatic.png",
      work: [
        "Perawatan",
        "Pengajaran",
        "Psikologi",
        "Konseling",
        "Pengembangan Anak",
        "Layanan Sosial",
      ],
    },
  };
  return (
    <Flex
      m={"auto"}
      mt={20}
      flexDir={"column"}
      p={8}
      alignItems="center"
      justifyContent={"space-around"}
    >
      <Stack width={"70%"}>
        {Object.values(personality).map((personalityType) => (
          <Grid templateColumns={"40% 60%"} key={personalityType.key} py={4}>
            <GridItem>
              <Box w={"4xl"} m={"auto"} py={20}>
                <Image
                  boxSize="240px"
                  src={personalityType.img}
                  alt={personalityType.name}
                />
              </Box>
            </GridItem>
            <GridItem>
              <Box>
                <Stack>
                  <Heading>{personalityType.name}</Heading>
                  <Text textAlign={"justify"}>
                    {personalityType.description}
                  </Text>
                  <Text
                    textAlign={"left"}
                    fontSize={"lg"}
                    pt={2}
                    pb={2}
                    fontWeight={"semibold"}
                  >
                    {" "}
                    Karir yang cocok untukmu ialah:
                  </Text>
                  <HStack>
                    {personalityType.work.map((job) => (
                      <Tag
                        key={job}
                        size="lg"
                        colorScheme={getColorScheme(personalityType.name)}
                        borderRadius="full"
                      >
                        <TagLabel>{job}</TagLabel>
                      </Tag>
                    ))}
                  </HStack>
                </Stack>
              </Box>
            </GridItem>
          </Grid>
        ))}
      </Stack>
    </Flex>
  );
}
