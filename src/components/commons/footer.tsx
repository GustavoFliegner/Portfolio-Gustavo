import { Flex, Text, useColorMode } from "@chakra-ui/react";

export default function Footer() {
  const { colorMode } = useColorMode();
  return (
    <Flex
      align="center"
      bg={colorMode === "light" ? "light.secondary" : "dark.secondary"}
      w="100%"
      h="50px"
      justify="center"
      bottom="0"
    >
      <Text>
        Site feito por <a href="https://github.com/Evon09">Jair.js </a>
      </Text>
    </Flex>
  );
}
