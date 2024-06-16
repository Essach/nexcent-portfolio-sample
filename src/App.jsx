import { Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Flex direction='column' minH='100vh' bgColor={'white'}>
      <Navbar />
    </Flex>
  );
}

export default App;
