import { Container, Link } from "@chakra-ui/react";

export default function Header() {
  return (
    <Container
      bg="#FFF"
      zIndex="20"
      py="10"
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      position="fixed"
      width="100%"
      borderBottom="lightgrey 0.5px solid"
    >
      <Link
        href="/"
        fontSize="28"
        textDecoration="none"
        fontFamily="Cherry Bomb One, sans-serif"
        _hover={{
          color: "#FFAAC9",
        }}
        transition="all 500ms"
        bg="linear-gradient(90deg, #FFE7CE, #FFAAC9, #E4A5FF)"
        bgClip="text"
        textAlign="center"
      >
        Khủng Long 3 Sừng
      </Link>

      <Container>
        <Link
          href="works"
          width="fit-content"
          display="flex"
          textAlign="center"
          textDecor="none"
          fontWeight="bold"
          px="15"
          py="2"
          bg="linear-gradient(to right, #FFE7CE, #FFAAC9, #E4A5FF)"
          bgClip="text"
          fontFamily="Pacifico"
          fontSize="25"
          rounded="10"
          transition="all 500ms"
          _hover={{ opacity: "0.7" }}
        >
          Works
        </Link>
      </Container>
    </Container>
  );
}
