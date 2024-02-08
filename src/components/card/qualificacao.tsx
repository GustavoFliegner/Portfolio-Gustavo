import { Image, Text, Card, useColorMode } from "@chakra-ui/react";

interface QualificacaoProps {
  icon: string;
  Texto1: string;
  Texto2: string;
}

export function Qualificacao(prop: QualificacaoProps) {
  const { colorMode } = useColorMode();
  return (
    <Card
      w={{ base: "100%", sm: "300px" }}
      minH={{ base: "300px", sm: "20vw" }}
      borderRadius="24"
      align="center"
      justify="center"
      padding="32px"
      gap="10px"
      bg={colorMode === "light" ? "light.background" : "dark.background"}
    >
      <Image width="40px" height="40px" src={prop.icon} alt="film-reel" />

      <Text w="60%" fontSize="26" textAlign="center">
        {prop.Texto1}
      </Text>
      <Text w="100%" overflow="hidden" textAlign="center">
        {prop.Texto2}
      </Text>
    </Card>
  );
}
