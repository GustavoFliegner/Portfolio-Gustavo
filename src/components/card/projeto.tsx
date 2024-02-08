import {
  Image,
  Text,
  Stack,
  Card,
  useColorMode,
  CardBody,
  Heading,
  CardFooter,
  Button,
  Link,
} from "@chakra-ui/react";

interface ProjetoProps {
  Imagen: string;
  Titulo: string;
  Descricao: string;
  Botao: string;
  Link: string;
}

export function Projeto(prop: ProjetoProps) {
  const { colorMode } = useColorMode();

  const imagem = require(`../../assets/img/projetos/${prop.Imagen}`);

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      w={{ base: "100%", lg: "49%" }}
      bg={colorMode === "light" ? "light.secondary" : "dark.secondary"}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        h={{ base: "", sm: "350px" }}
        src={imagem}
        alt={prop.Titulo}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{prop.Titulo}</Heading>

          <Text py="2">{prop.Descricao}</Text>
        </CardBody>

        <CardFooter>
          <Link href={`https://${prop.Link}`} isExternal>
            <Button variant="solid" color="white" bg="#3498db">
              {prop.Botao}
            </Button>
          </Link>
        </CardFooter>
      </Stack>
    </Card>
  );
}
