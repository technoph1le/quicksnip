import { FC } from "react";

import { AppProvider } from "@contexts/AppContext";

import Container from "./Container";

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <AppProvider>
      <Container />
    </AppProvider>
  );
};

export default App;
