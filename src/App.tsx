import { ChakraProvider } from "@chakra-ui/react";
import theme from './theme';
import AppRoutes from './Routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <AppRoutes />
      </ChakraProvider>
    </div>
  );
}

export default App;
