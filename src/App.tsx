import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: "warning warning",
        lg: `"nav" "main"`,
      }}
    >
      <Show above="lg">
        <GridItem area="nav" bg="coral">
          Nav
        </GridItem>
        <GridItem area="main" bg="lightpink">
          Main
        </GridItem>
      </Show>
      <Show below="lg">
        <GridItem area="warning warning" bg="red">
          Warning
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
