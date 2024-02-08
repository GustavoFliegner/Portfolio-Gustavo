import {
  Image,
  Text,
  Stack,
  VStack,
  Flex,
  useColorMode,
} from "@chakra-ui/react";

import string from "../../assets/json/home.json";

export function CardHome() {
  const { colorMode } = useColorMode();
  const imagem = require(`../../assets/img/home/${string.Imagen}`);
  return (
    <Stack
      id="homes"
      w="100%"
      paddingRight="10vw"
      paddingLeft="10vw"
      paddingTop={{ base: "10px", sm: "0px" }}
      paddingBottom={{ base: "10px", sm: "0px" }}
      minH="80vh"
      direction={{ base: "column-reverse", sm: "row" }}
      bg={colorMode === "light" ? "light.background" : "dark.background"}
    >
      <Flex w={{ base: "100%", sm: "50%" }} justify="start" align="center">
        <VStack align="start" gap="10px">
          <Text fontSize="16" color="#3498db">
            {string.TextoDestaque}
          </Text>
          <Text fontSize="42"> {string.Texto1}</Text>

          <Text fontSize="16">{string.Texto2}</Text>
        </VStack>
      </Flex>

      <Stack w={{ base: "100%", sm: "50%" }} align="end" justify="center">
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "80%", md: "500px" }}
          src={imagem}
          alt="Gustavo"
          borderRadius="24px"
        />
      </Stack>
    </Stack>
  );
}
