import { Container, Text } from "@chakra-ui/react"

const date = new Date()

export default function Footer() {
    return (
        <Container textAlign='center' p='24' fontWeight='light'>
            <Text color='darkgrey'>&copy; {date.getFullYear()} Mochizuki Hikari. All right reserved.</Text>
        </Container>
    )
}