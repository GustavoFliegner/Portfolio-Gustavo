import {
  Button,
  Flex,
  Link,
  Text,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { Header } from "../components/commons/Header";
import Footer from "../components/commons/footer";

export default function NotFound() {
  const { colorMode } = useColorMode();
  return (
    <VStack
      maxW="100vw"
      gap="0px"
      color={colorMode === "light" ? "light.textPrimary" : "dark.textPrimary"}
      style={{ fontFamily: "Lato, serif" }}
      direction="column"
      minH="100vh"
      align="center"
      justify="space-between"
      bg={colorMode === "light" ? "light.background" : "dark.background"}
    >
      <Header />

      <Flex
        direction="column"
        align="center"
        w="70v"
        textAlign="center"
        gap="20px"
        py="10px"
      >
        <Text fontSize="150px">404!</Text>

        <Text fontSize="70px">Parece que você está perdido no roteiro!</Text>
        <Text w="50vw" fontSize="20px">
          Parece que houve um problema de edição e você acabou em uma cena
          deletada. Nossos editores estão trabalhando para encontrar o seu
          caminho de volta à trama principal.
        </Text>
        <Link href="/">
          <Button>Voltar!</Button>
        </Link>
      </Flex>

      <Footer></Footer>
    </VStack>
  );
}
