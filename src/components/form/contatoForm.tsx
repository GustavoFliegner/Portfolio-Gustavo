import {
  VStack,
  Input,
  Button,
  FormControl,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";

interface formProp {
  email: string;
}

export function ContatoForm(prop: formProp) {
  var link = `https://formsubmit.co/${prop.email}`;

  return (
    <form action={link} method="POST" style={{ width: "100%" }}>
      <VStack w="100%" spacing="4">
        <FormControl>
          <FormLabel>Nome</FormLabel>
          <Input
            type="text"
            name="name"
            placeholder="Seu Nome"
            variant="filled"
            required
          />
        </FormControl>

        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="Seu Email"
            variant="filled"
            required
          />
        </FormControl>

        <FormControl>
          <FormLabel>Mensagem</FormLabel>
          <Textarea
            name="message"
            placeholder="Mensagem"
            variant="filled"
            required
            h="25vh"
          />
        </FormControl>

        <FormControl>
          <Input type="hidden" name="_captcha" value="false" />
        </FormControl>

        <FormControl>
          <Input
            type="hidden"
            name="_autoresponse"
            value="Obrigado por entrar em contato!"
          />
        </FormControl>

        <Button bg="dark.highlight" type="submit" colorScheme="teal" w="100%">
          Enviar
        </Button>
      </VStack>
    </form>
  );
}
