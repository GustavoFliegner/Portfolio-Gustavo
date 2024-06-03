import { VStack, useColorMode } from "@chakra-ui/react";
import { Header } from "../components/commons/Header";

import { CardHome } from "../components/card/cardHome";
import { CardAbout } from "../components/card/cardAbout";
import { Qualificacoes } from "../components/card/qualificacoes";
import Gallery from "../components/Gallery";
import { Experiencias } from "../components/card/experiencias";
import Footer from "../components/commons/footer";
import { Contato } from "../components/card/contato";
import { Projetos } from "../components/card/projetos";

export default function Home() {
  const { colorMode } = useColorMode();
  return (
    <>
      <VStack
        maxW="100vw"
        gap="0px"
        color={colorMode === "light" ? "light.textPrimary" : "dark.textPrimary"}
        style={{ fontFamily: "Lato, serif" }}
      >
        <Header />
        <CardHome></CardHome>
        <CardAbout></CardAbout>
        <Experiencias></Experiencias>
        {/* <Qualificacoes></Qualificacoes> */}
        <Projetos></Projetos>
        <Gallery></Gallery>
        <Contato></Contato>
      </VStack>

      <Footer></Footer>
    </>
  );
}
