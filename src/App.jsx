import { Grid, GridItem } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import Main from "./components/Main";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "main main"`,
      }}
      padding="20px"
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main" marginTop={4}>
        <Main />
      </GridItem>
    </Grid>
  );
}

export default App;
