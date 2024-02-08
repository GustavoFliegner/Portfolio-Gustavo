import {
  VStack,
  Flex,
  useColorMode,
  Stack,
  List,
  ListItem,
  ListIcon,
  Text,
} from "@chakra-ui/react";
import {
  PhoneIcon,
  EmailIcon,
  SearchIcon,
  AttachmentIcon,
} from "@chakra-ui/icons";
import { ContatoForm } from "../form/contatoForm";
import string from "../../assets/json/contato.json";

export function Contato() {
  const { colorMode } = useColorMode();

  return (
    <VStack
      id="cont"
      w="100%"
      px="10vw"
      py={{ base: "10px", sm: "30px" }}
      minH="80vh"
      direction={{ base: "column", sm: "row" }}
      spacing={{ base: "4", sm: "0" }}
      align="center"
      justify="start"
      bg={colorMode === "light" ? "light.background" : "dark.background"}
    >
      <Text fontSize="42" w="100%">
        {string.TextoDestaque.split(
          " ",
          string.TextoDestaque.split(" ").length - 1
        )}
        <span style={{ color: "#3498db" }}>
          {" " + string.TextoDestaque.split(" ").pop()}
        </span>
      </Text>
      <Stack w="100%" direction={{ base: "column", sm: "row" }}>
        <Flex h="100%" w={{ base: "100%", md: "70%" }} align="center">
          <List
            spacing={{ base: "10", md: "70" }}
            w="70%"
            fontSize={{ base: "10px", md: "20px" }}
          >
            {string.Emdereco ? (
              <ListItem>
                <ListIcon as={AttachmentIcon} />
                <span style={{ color: "#3498db" }}>Endereço_</span>{" "}
                {string.Emdereco}
              </ListItem>
            ) : (
              <></>
            )}
            {string.Telefone ? (
              <ListItem>
                <ListIcon as={PhoneIcon} />
                <span style={{ color: "#3498db" }}>Telefone_</span> (66)
                {string.Telefone}
              </ListItem>
            ) : (
              <></>
            )}
            {string.Email ? (
              <ListItem>
                <ListIcon as={EmailIcon} />
                <span style={{ color: "#3498db" }}>Email_</span> {string.Email}
              </ListItem>
            ) : (
              <></>
            )}
            {string.Site ? (
              <ListItem>
                <ListIcon as={SearchIcon} />
                <span style={{ color: "#3498db" }}> Site_</span> {string.Site}
              </ListItem>
            ) : (
              <></>
            )}
          </List>
        </Flex>

        <Flex h="100%" w={{ base: "100%", md: "50%" }} align="center">
          <ContatoForm email={string.Email}></ContatoForm>
        </Flex>
      </Stack>
    </VStack>
  );
}
