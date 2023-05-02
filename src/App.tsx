import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/navbar/NavBar";
import GlobalStyleContainer from "./components/GlobalStyleContainer";
import MainForm from "./components/main/MainForm";

function App() {
  return (
    <GlobalStyleContainer>
      <Grid
        templateAreas={{
          base: "warning warning",
          lg: `"nav" "main"`,
        }}
      >
        <Show above="lg">
          <GridItem area="nav">
            <NavBar />
          </GridItem>
          <GridItem area="main">
            <MainForm />
          </GridItem>
        </Show>
        <Show below="lg">
          <GridItem area="warning warning" bg="red">
            Warning
          </GridItem>
        </Show>
      </Grid>
    </GlobalStyleContainer>
  );
}

export default App;
