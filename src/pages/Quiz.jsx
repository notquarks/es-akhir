import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Heading,
  Input,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Progress,
  Radio,
  RadioGroup,
  Stack,
  Text,
  UnorderedList,
  useDisclosure,
  useRadioGroup,
} from "@chakra-ui/react";
import axios from "axios";
// import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const questionsList = questions.slice(questionIndex, questionIndex + 4);
  // const [answers, setAnswers] = useState([]);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [predictedPersonality, setPredictedPersonality] = useState("");
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();

  useEffect(() => {
    const fetchQuestion = () => {
      try {
        axios
          .get("https:/es-flask.onrender.com/api/questions")
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

  const handleSubmit = () => {
    const quizData = {
      username: username,
      q_val: answers,
    };
    try {
      axios
        .get("https:/es-flask.onrender.com/api/answer", quizData, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // body: JSON.stringify(quizData),
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log(data.prediction);
          setPredictedPersonality(data);
          navigate("/result", {
            state: { prediction: data.prediction },
          });
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
            <Grid
              templateColumns="60px 2fr"
              alignItems={"center"}
              ref={myRef}
              id="progressbar"
            >
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
          <Flex direction={"column"} align={"center"} mb={48} w={"80vw"}>
            {questionsList.map((question) => (
              <Box key={question.id} alignItems={"center"}>
                <Heading
                  as="h3"
                  size="lg"
                  py={4}
                  mb={12}
                  color={"dimgray"}
                  textAlign={"center"}
                >
                  {question.question}
                </Heading>
                <Center mb={12}>
                  <RadioGroup
                    id={question.id}
                    alignItems={"center"}
                    justifyContent={"space-around"}
                    py={8}

                    // onChange={setValue}
                    // value={value}
                  >
                    <HStack spacing={24}>
                      <Text fontSize={"20"} fontWeight={"semibold"}>
                        Tidak Setuju
                      </Text>
                      <Radio
                        size="xxl"
                        name={"ans" + question.id}
                        value="1"
                        colorScheme="orange"
                        onChange={(event) => {
                          setAnswers((prevAnswers) => ({
                            ...prevAnswers,
                            [question.id]: event.target.value,
                          }));
                          // setAnswers([...answers, event.target.value]);
                        }}
                      ></Radio>
                      <Radio
                        size="xl"
                        name={"ans" + question.id}
                        value="2"
                        colorScheme="yellow"
                        onChange={(event) => {
                          setAnswers((prevAnswers) => ({
                            ...prevAnswers,
                            [question.id]: event.target.value,
                          }));
                          // setAnswers([...answers, event.target.value]);
                        }}
                      ></Radio>
                      <Radio
                        size={"lg"}
                        name={"ans" + question.id}
                        value="3"
                        colorScheme="gray"
                        onChange={(event) => {
                          setAnswers((prevAnswers) => ({
                            ...prevAnswers,
                            [question.id]: event.target.value,
                          })); // setAnswers([...answers, event.target.value]);
                        }}
                      ></Radio>
                      <Radio
                        size="xl"
                        name={"ans" + question.id}
                        value="4"
                        colorScheme="cyan"
                        onChange={(event) => {
                          setAnswers((prevAnswers) => ({
                            ...prevAnswers,
                            [question.id]: event.target.value,
                          }));
                          // setAnswers([...answers, event.target.value]);
                        }}
                      ></Radio>
                      <Radio
                        size="xxl"
                        name={"ans" + question.id}
                        value="5"
                        colorScheme="blue"
                        onChange={(event) => {
                          setAnswers((prevAnswers) => ({
                            ...prevAnswers,
                            [question.id]: event.target.value,
                          }));
                          console.log(Object.keys(answers).length);
                          console.log("questionIndex : " + questionIndex);
                          // setAnswers([...answers, event.target.value]);
                        }}
                      ></Radio>
                      <Text fontSize={"20"} fontWeight={"semibold"}>
                        Setuju
                      </Text>
                    </HStack>
                  </RadioGroup>
                </Center>
                <Divider />
              </Box>
            ))}
            <Button
              isDisabled={
                Object.keys(answers).length != questionIndex + 4 ? true : false
              }
              mt={6}
              colorScheme="teal"
              // size="lg"
              h={"80px"}
              w={"264px"}
              rightIcon={<ArrowForwardIcon />}
              borderRadius={"full"}
              fontSize={"2xl"}
              onClick={() => {
                executeScroll();
                // const answer = questionsList[questionIndex].id;
                // setAnswers([...answers, answer]);
                if (questionIndex >= 40) {
                  onOpen();
                } else {
                  setQuestionIndex(questionIndex + 4);
                }
                console.log(answers);
              }}
            >
              Next
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Your Name</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Insert your name"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="teal"
              onClick={() => {
                handleSubmit();
                onClose();
              }}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Quiz;
