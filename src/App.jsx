import { Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Clients from "./components/Clients";
import Manage from "./components/Manage";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";
import Footer from "./components/Footer";

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
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Footer /> 
    </Flex>
  );
}

export default App;
