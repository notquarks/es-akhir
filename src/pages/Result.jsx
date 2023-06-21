import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  ListItem,
  Stack,
  Tag,
  TagLabel,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const Result = () => {
  // const { predictedPersonality } = props.location.state;
  // const { state } = this.props.location;
  const location = useLocation();
  // const get_personality = location.state.prediction;
  const personality = {
    Sanguinis: {
      name: "Sanguinis",
      description:
        "Orang-orang dengan tipe kepribadian sanguinis cenderung hidup, optimis, ceria, dan tanpa beban. Mereka suka petualangan dan memiliki toleransi risiko yang tinggi. Orang-orang sanguinis umumnya tidak tahan dengan kebosanan dan akan mencari variasi dan hiburan. Secara alami, sifat ini kadang-kadang dapat berdampak negatif pada hubungan romantis dan hubungan lainnya.",
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
        "Orang-orang dengan kepribadian melankolis menyukai tradisi.Seperti wanita memasak untuk pria; pria membuka pintu untuk wanita. Mereka mencintai keluarga dan teman-teman mereka dan, berbeda dengan orang-orang sanguinis, mereka tidak mencari hal-hal baru dan petualangan. Bahkan lebih dari itu, mereka menghindarinya sebisa mungkin. Seseorang dengan temperamen melankolis tidak mungkin menikah dengan orang asing atau meninggalkan tanah air mereka untuk negara lain. Orang-orang melankolis sangat sosial dan berusaha untuk berkontribusi pada masyarakat. Karena sangat teliti dan akurat, mereka adalah manajer yang fantastis dengan kepribadian yang baik. Karier yang sempurna untuk tipe kepribadian melankolis harus berada di bidang:",
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
  return (
    <Flex
      m={"auto"}
      flexDir={"column"}
      alignItems="center"
      justifyContent={"space-around"}
    >
      <Box w={"4xl"}>
        <Stack spacing={18} align={"center"}>
          <Heading as={"h2"} size={"lg"} textAlign={"center"}>
            Tipe Kepribadianmu ialah:
          </Heading>
          <Heading as={"h2"} size={"2xl"} textAlign={"center"} w={"60%"} pt={2}>
            {personality[location.state.prediction].name}
          </Heading>
          <Box pt={8} pb={12}>
            <Image
              src={personality[location.state.prediction].img}
              boxSize="240px"
            />
          </Box>
          <Center flexDirection={"column"}>
            <Card variant={"filled"}>
              <CardBody>
                <Text align={"justify"}>
                  {personality[location.state.prediction].description}
                </Text>
              </CardBody>
            </Card>

            <Card mt={4} variant={"filled"}>
              <CardBody>
                <Text
                  textAlign={"center"}
                  fontSize={"lg"}
                  pb={2}
                  fontWeight={"semibold"}
                >
                  {" "}
                  Karir yang cocok untukmu ialah:
                </Text>
                <HStack spacing={12}>
                  {personality[location.state.prediction].work.map(
                    (value, index) => (
                      <Tag
                        key={index}
                        size="lg"
                        colorScheme={getColorScheme(location.state.prediction)}
                        borderRadius="full"
                      >
                        <TagLabel>{value}</TagLabel>
                      </Tag>
                    )
                  )}
                </HStack>
              </CardBody>
            </Card>
          </Center>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Result;
