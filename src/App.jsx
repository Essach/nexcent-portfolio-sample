import { Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Clients from "./components/Clients";
import Manage from "./components/Manage";
import Section4 from "./components/Section4";

const App = () => {
  return (
    <Flex direction='column' minH='100vh' bgColor={'white'}>
      <Flex direction={'column'} h='100vh'>
        <Navbar />
        <Home />
      </Flex>
      <Clients />
      <Manage />
      <Section4 />
    </Flex>
  );
}

export default App;
