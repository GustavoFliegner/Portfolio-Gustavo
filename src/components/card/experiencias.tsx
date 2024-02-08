import {
  VStack,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  Text,
  Flex,
  useColorMode,
  Stack,
} from "@chakra-ui/react";

import string from "../../assets/json/experiencias.json";

export function Experiencias() {
  const { colorMode } = useColorMode();
  const experiencia = Object.keys(string.Experiencias);
  return (
    <VStack
      id="exp"
      w="100%"
      px="10vw"
      py={{ base: "10px", sm: "30px" }}
      minH="60vh"
      direction="column"
      spacing={{ base: "4", sm: "0" }}
      align={{ base: "center", sm: "flex-start" }} // Centraliza na base, alinha à esquerda em telas maiores
      justify="center"
      gap="40px"
      bg={colorMode === "light" ? "light.background" : "dark.background"}
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
      <Flex h="100%" align="center">
        <Tabs w="100%" isLazy h="100%" orientation="vertical">
          <Stack spacing="4" h="100%" direction={{ base: "column", sm: "row" }}>
            <VStack
              align="flex-start"
              justify="start"
              minW="15vw"
              h="100%"
              bg={colorMode === "light" ? "light.secondary" : "dark.secondary"}
            >
              {experiencia.map((exp) => (
                <Tab>
                  {
                    string.Experiencias[exp as keyof typeof string.Experiencias]
                      .local
                  }
                </Tab>
              ))}
            </VStack>
            <VStack justify="center" h="100%">
              <TabPanels h="100%">
                {experiencia.map((exp) => (
                  <TabPanel h="100%">
                    <Flex
                      h="100%"
                      direction="column"
                      justify="start"
                      gap="30px"
                    >
                      <Flex justify="space-between" fontSize="20px">
                        <Text>
                          Empresa:
                          {
                            string.Experiencias[
                              exp as keyof typeof string.Experiencias
                            ].local
                          }
                        </Text>
                        <Text>
                          Período:{" "}
                          {
                            string.Experiencias[
                              exp as keyof typeof string.Experiencias
                            ].periodo
                          }
                        </Text>
                      </Flex>
                      <Text>
                        Cargo:
                        <span style={{ color: "#3498db" }}>
                          {
                            string.Experiencias[
                              exp as keyof typeof string.Experiencias
                            ].cargo
                          }
                        </span>
                      </Text>
                      <Text>
                        {
                          string.Experiencias[
                            exp as keyof typeof string.Experiencias
                          ].descricao
                        }
                      </Text>
                    </Flex>
                  </TabPanel>
                ))}
              </TabPanels>
            </VStack>
          </Stack>
        </Tabs>
      </Flex>
    </VStack>
  );
}
