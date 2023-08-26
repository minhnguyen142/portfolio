import "@/app/globals.css";
import { Container, Image, Text, Link } from "@chakra-ui/react";
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
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <Header />

      <Image src="/Pastel-pink-sky.jpg" width="100%" height="297px"></Image>

      <Container mx="2rem">
        <Container
          my="10"
          bg="#FFF3DA"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mx="auto"
          maxWidth="380"
          borderRadius="15"
        >
          <Text fontSize="14" whiteSpace="nowrap">
            I'm Hikari, a person who loves&nbsp;
          </Text>
          <Text
            bg="linear-gradient(to right, #03C988, #1C82AD, #00337C, #13005A)"
            bgClip="text"
            fontWeight="bold"
            fontSize="14"
          >
            creative
          </Text>
          <Text fontSize='14'>&nbsp;things!</Text>
        </Container>

        <Container
          display="flex"
          justifyContent="center"
          alignItems="center"
          my="30"
        >
          <Container mr="10">
            <Text fontSize="25" fontWeight="bold" whiteSpace="nowrap">
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

        <Container>
          <Text
            textDecoration="underline"
            justifyContent="center"
            display="flex"
            mr="14rem"
            fontSize="20"
            height="10"
            fontWeight="bold"
            color="grey"
            whiteSpace="nowrap"
          >
            What I love
          </Text>
          <Container display="flex" justifyContent="center">
            <Text maxW="350" lineHeight="1.5">
              Chilling music, Drawing, Photography, Watching Anime
            </Text>
          </Container>
        </Container>

        <SocialMedia />

        <Footer />
      </Container>
    </Container>
  );
}
