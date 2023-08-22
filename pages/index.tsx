import "@/app/globals.css";
import { Container, Image, Text } from "@chakra-ui/react";
import Header from "../components/header";
import Footer from "../components/footer";
import About from "@/components/about";
import Bio from "@/components/bio";
import SocialMedia from "@/components/social-media";

export default function Home() {
  return (
    <Container>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Mochizuki Hikari - Home</title>
      <Header />

      <Image src="/Pastel-pink-sky.jpg" width="100%" height="297px"></Image>

      <Container
        my="10"
        bg="#FFF3DA"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mx="auto"
        maxWidth="400"
        borderRadius="15"
      >
        <Text borderRadius="10" fontSize="15" whiteSpace="nowrap">
          I'm Hikari, a person who loves&nbsp;
        </Text>
        <Text
          bg="linear-gradient(to right, #03C988, #1C82AD, #00337C, #13005A)"
          bgClip="text"
          fontWeight="bold"
          fontSize="15"
        >
          creative
        </Text>
        <Text>&nbsp;things!</Text>
      </Container>

      <Container
        display="flex"
        justifyContent="center"
        alignItems="center"
        my="30"
      >
        <Container mr="4rem">
          <Text fontSize="30" fontWeight="bold" whiteSpace="nowrap">
            Mochizuki Hikari
          </Text>
          <Text>Artist, Developer, Video Editor</Text>
        </Container>
        <Image
          src="/20230820_225657.jpg"
          width="120px"
          borderRadius="60"
          border="#FFFFFD 2px solid"
        ></Image>
      </Container>

      <About />

      <Bio />

      <Container display="flex" flexDir="column">
        <Text
          textDecoration="underline"
          justifyContent="center"
          display="flex"
          mr="19.5rem"
          fontSize="20"
          height="10"
          fontWeight="bold"
          color="grey"
        >
          What I love
        </Text>
        <Container display="flex" justifyContent="center">
          <Text maxWidth="400px">
            Chilling music, Drawing, Photography, Watching Anime
          </Text>
        </Container>
      </Container>

      <SocialMedia />

      <Footer />
    </Container>
  );
}
