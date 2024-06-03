import {
  Image,
  Text,
  Stack,
  VStack,
  Flex,
  useColorMode,
  Highlight,
} from "@chakra-ui/react";

import string from "../../assets/json/about.json";

export function CardAbout() {
  const { colorMode } = useColorMode();
  const imagem = require(`../../assets/img/about/${string.Imagen}`);
  console.log(string.TextoDestaque.split(" ").pop());
  return (
    <Stack
      w="100%"
      id="about"
      paddingRight="10vw"
      paddingLeft="10vw"
      paddingTop={{ base: "10px", sm: "0px" }}
      paddingBottom={{ base: "10px", sm: "0px" }}
      minH="80vh"
      direction={{ base: "column", sm: "row" }}
      bg={colorMode === "light" ? "light.secondary" : "dark.secondary"}
    >
      <Stack
        w={{ base: "100%", sm: "50%" }}
        align="start"
        justify="center"
        position="relative"
      >
        <Flex
          position="relative"
          border={`10px solid ${
            colorMode !== "light" ? "#ecf0f1" : "#34495e"
          } `}
          w={{ base: "100%", sm: "22vw" }}
          h={{ base: "100%", sm: "30vw" }}
          borderRadius="24px"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "30vw" }}
            h={{ base: "100%", sm: "30vw" }}
            src={imagem}
            alt="Gustavo"
            borderRadius="24px"
            position={{ base: "relative", sm: "absolute" }}
            zIndex="10"
            bottom="10px"
            left="10px"
          />
        </Flex>
      </Stack>

      <Flex w={{ base: "100%", sm: "50%" }} justify="start" align="center">
        <VStack align="start" gap="10px" w="100%">
          <Text fontSize="42">
            {string.TextoDestaque.split(
              " ",
              string.TextoDestaque.split(" ").length - 1
            )}
            <Highlight
              query={[`${string.TextoDestaque.split(" ").pop()}`]}
              styles={{
                color:
                  colorMode === "light" ? "light.highlight" : "dark.highlight",
              }}
            >
              {" " + string.TextoDestaque.split(" ").pop()}
            </Highlight>
          </Text>

          <Text fontSize="16">{string.Texto}</Text>
        </VStack>
      </Flex>
    </Stack>
  );
}
