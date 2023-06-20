import { ReactNode } from "react";
import { RiSunFill, RiMoonFill } from "react-icons/ri";
// import { Menu, MenuItem, MenuButton, MenuDivider } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Stack,
  useColorMode,
  Container,
  useColorModeValue,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  MenuItem,
  MenuDivider,
  Flex,
  Avatar,
  HStack,
  Center,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";

const Links = ["Tes Kepribadian", "Tipe Kepribadian", "Tentang"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    <Text fontSize="xl"> {children}</Text>
  </Link>
);

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HStack
      as={"header"}
      borderBottom={"1px"}
      borderBottomColor={"gray.200"}
      px={4}
      minWidth="max-content"
      alignItems="center"
      h={24}
      justifyContent={"space-around"}
      // bgColor={"green"}
    >
      {/* <HStack alignItems={"center"} flex={1} justifyContent={"space-between"}> */}
      <Box>
        <h2>4 Personalities</h2>
      </Box>
      <Box flex={1}>
        <Center>
          <HStack
            as={"nav"}
            spacing={24}
            display={{ base: "none", md: "flex" }} //explain this line : https://chakra-ui.com/docs/features/responsive-styles#using-objects
          >
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </Center>
      </Box>
      {/* <Flex alignItems={"center"}>
          <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Settings</MenuItem>
                <MenuDivider />
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
        </Flex> */}
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
      <HStack spacing={8}>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <RiSunFill /> : <RiMoonFill />}
        </Button>
        <Button>Login</Button>
      </HStack>
      {/* </HStack> */}
    </HStack>
  );
};

export default Header;
