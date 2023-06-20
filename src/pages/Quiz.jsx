import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  ListItem,
  Progress,
  Radio,
  RadioGroup,
  Stack,
  Text,
  UnorderedList,
  useRadioGroup,
} from "@chakra-ui/react";
// import axios from "axios";
import { useEffect, useState } from "react";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const questionsList = questions.slice(questionIndex, questionIndex + 4);
  // const [answers, setAnswers] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchQuestion = () => {
      try {
        fetch("/questions")
          .then((response) => response.json())
          .then((data) => setQuestions(data), setQuestionIndex(0));
        // const jsonData = await response.json();
        // setQuestions(jsonData.data);
        // console.log(jsonData.data);
      } catch (error) {
        console.error("Error fetching quest:", error);
      }
    };
    fetchQuestion();
  }, []);

  const progress_value = Math.round((questionIndex / 44) * 100);
  return (
    <Flex
      flexDir={"column"}
      // w="100vw"
      flex={1}
      m={"auto"}
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
        // w={"100%"}
        py={4}
        direction={"column"}
        alignItems={"center"}
      >
        <Flex direction={"column"} flex={1} minWidth={"max-content"}>
          <Box
            w={"60vw"}
            alignItems={"center"}
            m={"auto"}
            pb={24}
            minWidth={"max-content"}
          >
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
          <Flex direction={"column"} align={"center"}>
            {questionsList.map((question) => (
              <Box key={question.id} alignItems={"center"}>
                <Heading as="h3" size="lg" py={4} color={"dimgray"}>
                  {question.question}
                </Heading>
                <Center>
                  <RadioGroup
                    id={question.id}
                    alignItems={"center"}
                    justifyContent={"space-around"}
                    py={8}
                    // onChange={setValue}
                    // value={value}
                  >
                    <HStack spacing={12}>
                      <Radio
                        size="xxl"
                        name={"ans" + question.id}
                        value="1"
                        onChange={(event) => {
                          setAnswers([...answers, event.target.value]);
                        }}
                      ></Radio>
                      <Radio
                        size="xl"
                        name={"ans" + question.id}
                        value="2"
                        onChange={(event) => {
                          setAnswers([...answers, event.target.value]);
                        }}
                      ></Radio>
                      <Radio
                        size={"lg"}
                        name={"ans" + question.id}
                        value="3"
                        onChange={(event) => {
                          setAnswers([...answers, event.target.value]);
                        }}
                      ></Radio>
                      <Radio
                        size="xl"
                        name={"ans" + question.id}
                        value="4"
                        onChange={(event) => {
                          setAnswers([...answers, event.target.value]);
                        }}
                      ></Radio>
                      <Radio
                        size="xxl"
                        name={"ans" + question.id}
                        value="5"
                        onChange={(event) => {
                          setAnswers([...answers, event.target.value]);
                          console.log(answers.length);
                        }}
                      ></Radio>
                    </HStack>
                  </RadioGroup>
                </Center>
                <Divider />
              </Box>
            ))}
            <Button
              isDisabled={answers.length != questionIndex ? true : false}
              mt={6}
              colorScheme="teal"
              // size="lg"
              h={"80px"}
              w={"264px"}
              rightIcon={<ArrowForwardIcon />}
              borderRadius={"full"}
              fontSize={"2xl"}
              onClick={() => {
                // const answer = questionsList[questionIndex].id;
                // setAnswers([...answers, answer]);
                setQuestionIndex(questionIndex + 4);
                console.log(answers);
              }}
            >
              Next
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Quiz;
