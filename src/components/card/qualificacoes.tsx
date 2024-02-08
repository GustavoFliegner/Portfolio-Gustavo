import { Text, Flex, useColorMode, Highlight } from "@chakra-ui/react";
import { Qualificacao } from "./qualificacao";

import string from "../../assets/json/qualificacoes.json";

export function Qualificacoes() {
  const { colorMode } = useColorMode();
  const cardsKeys = Object.keys(string.Cards);
  return (
    <Flex
      id="quali"
      w="100%"
      minH="80vh"
      bg={colorMode === "light" ? "light.secondary" : "dark.secondary"}
      paddingRight="10vw"
      paddingLeft="10vw"
      paddingTop={{ base: "10px", sm: "10px", lg: "20px" }}
      paddingBottom={{ base: "10px", sm: "10px", lg: "20px" }}
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
        <Highlight
          query={[`${string.TextoDestaque.split(" ").pop()}`]}
          styles={{
            color: colorMode === "light" ? "light.highlight" : "dark.highlight",
          }}
        >
          {" " + string.TextoDestaque.split(" ").pop()}
        </Highlight>
      </Text>

      <Text w="100%" h="10%" fontSize="16" overflow="hidden" textAlign="start">
        {string.Texto}
      </Text>
      <Flex
        direction="row"
        w="100%"
        justify="center"
        flexWrap="wrap"
        gap={{ base: "20px", sm: "20" }}
      >
        {cardsKeys.map((card) => (
          <Qualificacao
            key={card}
            icon={string.Cards[card as keyof typeof string.Cards].icon}
            Texto1={string.Cards[card as keyof typeof string.Cards].Texto1}
            Texto2={string.Cards[card as keyof typeof string.Cards].Texto2}
          />
        ))}
      </Flex>
    </Flex>
  );
}
