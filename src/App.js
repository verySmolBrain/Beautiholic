import './App.css';
import {
  ChakraProvider,
  Flex,
  Image,
  Heading,
} from "@chakra-ui/react";
import customTheme from "./components/customTheme"
import Model from "./assets/woman_smol.png"

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Flex flexDirection="column" justify="flex-end" align="flex-start" minH="100vh" w="100%" bg="watermillion.100">
        <Flex as="h1" h="15vh" justify="center" align="center" width="100%">
          <Heading>Beautiholic</Heading>
        </Flex>

        <Flex>
          <Image maxH="85vh" objectFit="scale-down" src={Model} alt="asian woman"/>
        </Flex>
      </Flex>

      <Flex justify="center" align="center" minH="100vh" w="100%" bg="feeling_orange.100">
      </Flex>

      <Flex justify="center" align="center" minH="100vh" w="100%" bg="orange_sherbert.100">
      </Flex>

      <Flex justify="center" align="center" minH="100vh" w="100%" bg="lime.100">
        
      </Flex>
    </ChakraProvider>
  );
}

export default App;

// Opening
// Gallery (Should be pretty easy)
// Booking (Have to design but shouldn't be that hard)
// About Us ()