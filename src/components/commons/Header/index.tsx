import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
  useColorMode,
  Stack, // Importe o componente Stack
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../../ColorModeSwitcher";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Separator } from "../separator";

export function Header() {
  const { colorMode } = useColorMode();

  return (
    <Flex
      w="100%"
      bg={colorMode === "light" ? "light.secondary" : "dark.secondary"}
      px="10vw"
      py="4"
      gap="3"
      alignItems="center"
      direction={["column", "column", "row"]}
    >
      <Link to="/">
        <Flex alignItems="center" gap={2}>
          <Image
            width="35"
            height="35"
            src="https://img.icons8.com/fluency/48/documentary.png"
            alt="film-reel"
          />
          <Flex direction="column">
            <Heading>Gustavo</Heading>
            <Heading>Fliegner</Heading>
          </Flex>
        </Flex>
      </Link>
      <Spacer />
      <Flex>
        <Stack
          direction={["column", "column", "row"]} // Ajuste a direção do Stack com base no tamanho da tela
          spacing="8px"
          align="center"
          display={{ base: "none", md: "flex" }} // Ocultar em telas menores
        >
          <Breadcrumb separator={<Separator />}>
            <BreadcrumbItem>
              <BreadcrumbLink href="#home">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#about">About</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#exp">Expreriencias</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#quali">Qualificações</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#proj">Projetos</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#gale">Galeria</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#cont">Contato</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Stack>
      </Flex>
      <Spacer />
      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  );
}
