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
        fontSize="30"
        textDecoration="none"
        fontFamily="Cherry Bomb One, sans-serif"
        _hover={{
          color: "#FFAAC9",
        }}
        transition="all 500ms"
        bg="linear-gradient(90deg, #FFE7CE, #FFAAC9, #E4A5FF)"
        bgClip="text"
      >
        Khủng Long 3 Sừng
      </Link>

      <Container>
        <Link
          href="/works"
          mx="30"
          textDecoration="none"
          color="#9F7AEA"
          _hover={{ color: "#E4A5FF" }}
          transition="all 500ms"
          fontWeight="bold"
        >
          Works
        </Link>
        <Link
          href="/posts"
          textDecoration="none"
          color="#9F7AEA"
          _hover={{ color: "#E4A5FF" }}
          transition="all 500ms"
          fontWeight="bold"
        >
          Posts
        </Link>
      </Container>
    </Container>
  );
}
