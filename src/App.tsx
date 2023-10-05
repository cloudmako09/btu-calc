import { Container, Row, Col } from "react-bootstrap";

import { SquareFeet } from "./components/squareFeet/squareFeet";
import { TempDiffFactor } from "./components/tempDiffFactor/tempDiffFactor";
import { InsulFactor } from "./components/insulFactor/insulFactor";
import { Result } from "./components/result/result";

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
      <section className="final-result">
        <Container>
          <Row>
            <Col lg="12">
              <Result heading="Required number of BTUs" number={0} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default App;
