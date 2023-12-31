import { Container, Text, Link } from "@chakra-ui/react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

export default function SocialMedia() {
  return (
    <Container>
      <Text
        textDecoration="underline"
        justifyContent="center"
        display="flex"
        mr="13rem"
        fontSize="20"
        height="10"
        fontWeight="bold"
        color="grey"
        whiteSpace='nowrap'
      >
        Social Media
      </Text>
      <Container
        alignItems="center"
        justifyContent="center"
        display="flex"
        flexDir="column"
        ml='5rem'
      >
        <Link
          href="https://www.facebook.com/Hikari.13864"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mr="15.25rem"
          maxWidth="fit-content"
          _hover={{ bg: "lightcyan", borderRadius: "10" }}
          px="10"
          textDecoration="none"
          color="#4267B2"
          transition="all 500ms"
        >
          <BsFacebook />
          <Text mx="10" fontWeight="bold">
            @Hikari.13864
          </Text>
        </Link>
        <Link
          href="https://www.instagram.com/minhnguyen14022k3"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mr="11.6rem"
          maxWidth="fit-content"
          _hover={{ bg: "lightcyan", borderRadius: "10" }}
          px="10"
          textDecoration="none"
          color="#833AB4"
          transition="all 500ms"
        >
          <BsInstagram />
          <Text mx="10" fontWeight="bold">
            @minhnguyen14022k3
          </Text>
        </Link>
      </Container>
    </Container>
  );
}
