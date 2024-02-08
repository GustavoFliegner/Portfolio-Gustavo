import { Flex, Highlight, Link, Text, useColorMode } from "@chakra-ui/react";

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
        Site feito por{" "}
        <Link
          href="https://www.linkedin.com/in/jair-jos%C3%A9-sequeira/"
          isExternal
          color={colorMode === "light" ? "light.highlight" : "dark.highlight"}
        >
          {" "}
          Jair.js{" "}
        </Link>
      </Text>
    </Flex>
  );
}

