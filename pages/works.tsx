import "@/app/globals.css";
import { Container, Image } from "@chakra-ui/react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Works() {
  return (
    <Container>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Mochizuki Hikari - Works</title>
      <Header />
      <Image src="/Pastel-pink-sky.jpg" width="100%" height="297px"></Image>
      <Footer />
    </Container>
  );
}
