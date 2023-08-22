import { Container, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <Container lineHeight="1.5">
      <Text
        textDecoration="underline"
        justifyContent="center"
        display="flex"
        mr="22rem"
        fontSize="20"
        height="10"
        fontWeight="bold"
        color="grey"
      >
        About
      </Text>
      <Container
        alignItems="center"
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Text
          maxWidth="400px"
          textAlign="justify"
          alignItems="center"
          height="64"
        >
          I'm a student who are currently following Computer Science program at
          Thuy Loi University. I'm also learning things about content creating
          like drawing or video editing. I'm the person who don't want to be
          constrained! Instead, I'd like to go with my passion and be
        </Text>
        <Text
          fontWeight="bold"
          ml="18.5rem"
          bg="linear-gradient(to right, #03C988, #1C82AD, #00337C, #13005A)"
          bgClip="text"
        >
          creative
        </Text>
      </Container>
    </Container>
  );
}
