import { Container, Image } from "@chakra-ui/react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "@/app/globals.css";

export default function Posts() {
  return (
    <Container>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Mochizuki Hikari - Posts</title>
      <Header />
      <Image src="/Pastel-pink-sky.jpg" width="100%" height="297px"></Image>

      <Container>
        
      </Container>
      <Footer />
    </Container>
  );
}
