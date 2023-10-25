import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { Result } from "../result/result";
import useCalcSquareFeetStore from "../../useCalcSquareFeetStore";
import useTempDiffFactorStore from "../../useTempDiffFactorStore";
import useInsulFactorStore from "../../useInsulFactorStore";

export const FinalResult = () => {
  const { t } = useTranslation();
  const { getCalcResult } = useCalcSquareFeetStore();
  const { getTempDiffResult } = useTempDiffFactorStore();
  const { insul } = useInsulFactorStore();

  const finalResult = () => {
    const result = getCalcResult() * getTempDiffResult() * insul;
    return result;
  };

  console.log("Square Footage Result", getCalcResult());
  console.log("Temp Diff Result", getTempDiffResult());

  return (
    <>
      <section className="final-result">
        <Container>
          <Row>
            <Col lg="12">
              <Result heading={t("finalTitle")} number={finalResult()} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
