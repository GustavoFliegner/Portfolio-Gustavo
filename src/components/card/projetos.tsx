import { Text, Flex, useColorMode } from "@chakra-ui/react";
import { Projeto } from "./projeto";

import string from "../../assets/json/projetos.json";

export function Projetos() {
  const { colorMode } = useColorMode();
  const projetosKeys = Object.keys(string.Projetos);
  return (
    <Flex
      id="proj"
      w="100%"
      minH="80vh"
      bg={colorMode === "light" ? "light.background" : "dark.background"}
      paddingRight="10vw"
      paddingLeft="10vw"
      paddingTop="20px"
      paddingBottom="20px"
      direction="column"
      justify="center"
      align="center"
      gap="20px"
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

      <Text w="100%" h="10%" fontSize="16" overflow="hidden" textAlign="start">
        {string.Texto}
      </Text>

      <Flex
        direction="row"
        w="100%"
        justify={{ base: "center", lg: "space-between" }}
        flexWrap="wrap"
        gap={{ base: "10px", sm: "10px" }}
      >
        {projetosKeys.map((proj, index) => (
          <Projeto
            key={index}
            Botao={string.Projetos[proj as keyof typeof string.Projetos].Botao}
            Imagen={
              string.Projetos[proj as keyof typeof string.Projetos].Imagen
            }
            Descricao={
              string.Projetos[proj as keyof typeof string.Projetos].Descricao
            }
            Titulo={
              string.Projetos[proj as keyof typeof string.Projetos].Titulo
            }
            Link={string.Projetos[proj as keyof typeof string.Projetos].Link}
          ></Projeto>
        ))}
      </Flex>
    </Flex>
  );
}
