import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";

const Quiz = () => {
  const progress_value = 50;
  return (
    <Flex
      m={"auto"}
      flexDir={"column"}
      w="100vw"
      alignItems="center"
      justifyContent={"space-around"}
    >
      <Box direction={"column"} py={"20"}>
        <Stack align={"center"} spacing={4}>
          <Text fontSize={"6xl"} fontWeight={"semibold"}>
            Tes Kepribadian
          </Text>
          <Text fontSize={"xl"}>4 Temperament Test</Text>
        </Stack>
      </Box>
      <Box
        w={"100%"}
        py={4}
        flexWrap={"wrap"}
        direction={"column"}
        alignItems={"center"}
      >
        <Stack>
          <Box w={"60%"} alignItems={"center"} m={"auto"} pb={24}>
            <Grid templateColumns="60px 2fr" alignItems={"center"}>
              <GridItem>
                <Text fontSize={"xl"}>{progress_value}%</Text>
              </GridItem>
              <GridItem>
                <Progress
                  colorScheme="green"
                  size="lg"
                  value={progress_value}
                  borderRadius={"lg"}
                />
              </GridItem>
            </Grid>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Quiz;
