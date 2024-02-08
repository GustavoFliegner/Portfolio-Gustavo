import {
  Flex,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import string from "../assets/json/gallery.json";

const Gallery: React.FC = () => {
  const [photoSections, setPhotoSections] = useState<{
    [key: string]: string[];
  }>({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const { colorMode } = useColorMode();

  useEffect(() => {
    const importPhotos = async () => {
      try {
        const context = (require as any).context(
          `../assets/galeria`,
          true,
          /\.(jpg|jpeg|png)$/
        );

        const photoFiles = context.keys();

        const photosBySection: { [key: string]: string[] } = {};
        photoFiles.forEach((file: string) => {
          const parts = file.split("/");
          const section = parts[parts.length - 2]; // Nome da pasta
          if (!photosBySection[section]) {
            photosBySection[section] = [];
          }
          photosBySection[section].push(context(file));
        });

        setPhotoSections(photosBySection);
      } catch (error) {
        console.error("Erro ao importar fotos:", error);
      }
    };

    importPhotos();
  }, []);

  const openModal = (photo: string) => {
    setSelectedPhoto(photo);
    onOpen();
  };

  return (
    <Flex
      id="gale"
      paddingRight="10vw"
      paddingLeft="10vw"
      w="100%"
      paddingTop="30px"
      paddingBottom="30px"
      direction="column"
      bg={colorMode === "light" ? "light.secondary" : "dark.secondary"}
    >
      <VStack w="100%" align="start">
        <Text fontSize="42px">{string.TextoDestaque}</Text>
        <Text fontSize="16" w="40%">
          {string.Texto}
        </Text>
      </VStack>

      {Object.keys(photoSections).map((section, index) => (
        <Flex direction="column" key={index}>
          <Text fontSize="42px">{section}</Text>
          <Flex
            bg={colorMode !== "light" ? "light.secondary" : "dark.secondary"}
            borderRadius="50px"
            w="100%"
            h="5px"
            marginBottom="25px"
          ></Flex>
          <Flex
            w="100%"
            justify="start"
            direction="row"
            flexWrap="wrap"
            className="gallery"
            gap="10px"
          >
            {photoSections[section].map((photo, photoIndex) => (
              <Image
                key={photoIndex}
                src={photo}
                alt={`Foto ${photoIndex + 1}`}
                w={{ base: "100px", sm: "150px", lg: "200px" }}
                h={{ base: "100px", sm: "150px", lg: "200px" }}
                objectFit="cover"
                onClick={() => openModal(photo)}
              />
            ))}
          </Flex>
        </Flex>
      ))}

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            {selectedPhoto && (
              <Image
                src={selectedPhoto}
                alt="Imagem Ampliada"
                w="100%"
                h="100%"
                objectFit="contain"
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Gallery;
