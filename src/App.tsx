import { SquareFeet } from "./components/squareFeet/squareFeet";
import { TempDiffFactor } from "./components/tempDiffFactor/tempDiffFactor";
import { InsulFactor } from "./components/insulFactor/insulFactor";
import { FinalResult } from "./components/finalResult/finalResult";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/montserrat";
import "./styles/general.scss";
import "./styles/breakpoints.scss";

function App() {
  return (
    <>
      <SquareFeet />
      <TempDiffFactor />
      <InsulFactor />
      <FinalResult />
    </>
  );
}

export default App;
