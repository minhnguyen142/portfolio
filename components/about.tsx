import { Container, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <Container lineHeight="1.5">
      <Text
        textDecoration="underline"
        justifyContent="center"
        display="flex"
        mr="17rem"
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
        <Text maxWidth="350px" textAlign="justify" alignItems="center">
          I'm a student who are currently following Computer Science program at
          Thuy Loi University. I'm also learning things about content creating
          like drawing or video editing. I'm the person who is very comfortable
          at work and wants to do my own creativity comfortably
        </Text>
      </Container>
    </Container>
  );
}
