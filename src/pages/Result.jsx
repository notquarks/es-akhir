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
        "Tipe kepribadian sanguinis pada siswa memiliki karakteristik yang berhubungan dengan kehidupan yang penuh semangat, optimisme, keceriaan, dan kebebasan. Mereka cenderung menyukai petualangan dan memiliki toleransi risiko yang tinggi. Siswa dengan tipe kepribadian sanguinis umumnya tidak tahan dengan kebosanan dan selalu mencari variasi dan hiburan. Namun, sifat ini kadang-kadang dapat memiliki dampak negatif pada hubungan romantis dan hubungan interpersonal lainnya. Karena cenderung mencari kesenangan, siswa dengan tipe kepribadian sanguinis mungkin menghadapi tantangan terkait kecanduan. Ketidakstabilan emosi mereka juga dapat berkontribusi pada kebiasaan makan berlebihan dan masalah berat badan. Selain itu, siswa dengan tipe kepribadian sanguinis memiliki kreativitas yang tinggi dan potensi untuk menjadi seniman yang luar biasa. Mereka juga memiliki bakat dalam hiburan dan dapat sukses jika memilih karir di industri tersebut.",
      img: "/sanguine.png",
      work: ["Marketing", "Travel", "Model", "Memasak", "Olahraga"],
    },
    Koleris: {
      name: "Koleris",
      description:
        "Tipe kepribadian koleris pada siswa memiliki ciri-ciri yang berkaitan dengan sikap yang berorientasi pada tujuan, kecerdasan, analisis, dan logika. Siswa dengan tipe kepribadian koleris cenderung menjadi individu yang praktis dan lugas, mungkin kurang cenderung untuk menjalin hubungan sosial yang erat atau terlalu ramah. Mereka tidak begitu tertarik dengan percakapan yang dangkal, melainkan lebih menyukai diskusi yang mendalam dan bermakna. Siswa dengan tipe kepribadian ini cenderung lebih nyaman berada sendiri dibandingkan dengan bergaul dengan orang-orang yang memiliki minat yang dangkal atau sekadar permukaan.",
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
        "Tipe kepribadian melankolis pada siswa memiliki karakteristik yang berkaitan dengan kecenderungan terhadap tradisi. Mereka menyukai hal-hal yang berhubungan dengan nilai-nilai tradisional seperti wanita yang memasak untuk pria atau pria yang membuka pintu untuk wanita. Kepribadian melankolis mencintai keluarga dan teman-teman mereka, dan berbeda dengan tipe kepribadian sanguinis, mereka tidak aktif mencari pengalaman baru atau petualangan. Sebaliknya, mereka cenderung menghindarinya sebisa mungkin. Siswa dengan tipe kepribadian melankolis tidak akan dengan mudah menikah dengan orang yang tidak mereka kenal atau meninggalkan tanah air mereka untuk tinggal di negara lain. Orang-orang melankolis juga memiliki sifat sosial yang kuat dan berusaha untuk berkontribusi pada masyarakat. Karena sifat mereka yang cermat dan akurat, mereka sering kali menjadi manajer yang hebat dengan kepribadian yang baik.",
      img: "/melancholic.png",
      work: ["Manajemen", "Akuntansi", "Kerja Sosial", "Administrasi"],
    },
    Plegmatis: {
      name: "Plegmatis",
      description:
        "Tipe kepribadian plegmatis pada siswa memiliki karakteristik yang berkaitan dengan kecenderungan untuk suka bergaul. Mereka aktif mencari harmoni dalam hubungan antar pribadi dan berusaha membangun hubungan yang erat dengan orang lain. Kepribadian plegmatis membuat siswa menjadi individu yang setia dalam hubungan pasangan dan penuh kasih dalam peran sebagai orangtua. Mereka memiliki upaya yang kuat untuk mempertahankan hubungan baik dengan teman lama, anggota keluarga yang jauh, dan tetangga. Selain itu, orang dengan tipe kepribadian plegmatis cenderung menghindari konflik dan memiliki kemampuan sebagai mediator di antara orang lain untuk mengembalikan perdamaian dan harmoni.",
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
