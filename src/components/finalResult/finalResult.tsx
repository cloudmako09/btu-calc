import { Container, Row, Col } from "react-bootstrap";
import { Result } from "../result/result";
import useCalcSquareFeetStore from "../../useCalcSquareFeetStore";
import useTempDiffFactorStore from "../../useTempDiffFactorStore";
import useInsulFactorStore from "../../useInsulFactorStore";

export const FinalResult = () => {
  const { getCalcResult } = useCalcSquareFeetStore();
  const { getTempDiffResult } = useTempDiffFactorStore();
  const { getInsul } = useInsulFactorStore();

  const finalResult = () => {
    const result = getCalcResult() * getTempDiffResult() * getInsul();
    return result;
  };

  return (
    <>
      <section className="final-result">
        <Container>
          <Row>
            <Col lg="12">
              <Result
                heading="Required number of BTUs"
                number={finalResult()}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
