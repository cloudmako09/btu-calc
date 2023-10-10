import { Container, Row, Col } from "react-bootstrap";
import { Result } from "../result/result";

export const FinalResult = () => {
  return (
    <>
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
};
