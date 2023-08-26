import "@/app/globals.css";
import { Container, Image, Text } from "@chakra-ui/react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Works() {
  return (
    <Container>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Mochizuki Hikari - Works</title>
      <Header />
      <Image src="/Pastel-pink-sky.jpg" width="100%" height="297px"></Image>

      <Text
        textDecoration="underline"
        justifyContent="center"
        display="flex"
        mr="23rem"
        fontSize="20"
        height="10"
        fontWeight="bold"
        color="grey"
        width="auto"
      >
        Works
      </Text>

      <Container textAlign="center" my="100">
        <Text fontSize="30" color="#FFAAC9" fontFamily="Cherry Bomb One">
          Video
        </Text>
        <Container>
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fref%3Dembed_video%26v%3D1190572965147992&width=250&show_text=false&height=125&appId"
            width="440"
            height="220"
            allow="fullscreen; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
          <Text>VNU Check</Text>
          <Text>A video discussing about students' life at the University</Text>
        </Container>
      </Container>

      <Container textAlign="center" mb="100" mt="50">
        <Text fontSize="30" color="#E4A5FF" fontFamily="Cherry Bomb One">
          Art
        </Text>
        <Container>
          <Container>
            <Image src="/20230825_192430.jpg" width="800" height="400"></Image>
            <Text>Kuriyama Mirai (Beyond the Boundary)</Text>
          </Container>
          <Container my="50">
            <Image src="/20230825_215811.jpg" width="600" height="300"></Image>
            <Text>Nishimiya Shouko (A Silent Voice)</Text>
          </Container>
          <Container>
            <Image src="/20230825_215659.jpg" width="600" height="300"></Image>
            <Text>Kitashirakawa Tamako (Tamako Market, Tamako Love Story)</Text>
          </Container>
        </Container>
      </Container>

      <Footer />
    </Container>
  );
}
