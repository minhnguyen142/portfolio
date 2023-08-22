import { Container, Text, Link } from "@chakra-ui/react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

export default function SocialMedia() {
  return (
    <Container>
      <Text
        textDecoration="underline"
        justifyContent="center"
        display="flex"
        mr="18.5rem"
        fontSize="20"
        height="10"
        fontWeight="bold"
        color="grey"
      >
        Social Media
      </Text>
      <Container
        alignItems="center"
        justifyContent="center"
        display="flex"
        flexDir="column"
      >
        <Link
          href="https://www.google.com"
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
          href="https://www.google.com"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mr="13.15rem"
          maxWidth="fit-content"
          _hover={{ bg: "lightcyan", borderRadius: "10" }}
          px="10"
          textDecoration="none"
          color="#833AB4"
          transition="all 500ms"
        >
          <BsInstagram />
          <Text mx="10" fontWeight="bold">
            @minhnguyen1402
          </Text>
        </Link>
      </Container>
    </Container>
  );
}
