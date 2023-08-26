import { Container, Text } from "@chakra-ui/react";

export default function Bio() {
  return (
    <Container>
      <Text
        textDecoration="underline"
        justifyContent="center"
        display="flex"
        mr="20rem"
        fontSize="20"
        height="10"
        fontWeight="bold"
        color="grey"
      >
        Bio
      </Text>

      <Container
        display="flex"
        justifyContent="center"
        lineHeight="1.5"
        alignItems="center"
      >
        <Container fontWeight="bold">
          <Text>2003</Text>
          <Text>2005</Text>
          <Text>04/2021</Text>
          <Text>
            10/2021 <br /> - present
          </Text>
        </Container>

        <Container
          borderLeft="grey 1px solid"
          mx="20"
          my="auto"
          height="10.5rem"
        ></Container>

        <Container maxW="250">
          <Text>Born in Phu Ly, Ha Nam</Text>
          <Text>Started living in Hanoi</Text>
          <Text>Got IELTS 6.0 Certificate</Text>
          <Text>Studying Computer Science program at Thuy Loi University</Text>
        </Container>
      </Container>
    </Container>
  );
}
