import { Container, Row, Col } from "react-bootstrap";
import { Result } from "../result/result";
import { CheckBox } from "../checkBox/checkBox";
import useInsulFactorStore from "../../useInsulFactorStore";

export const InsulFactor = () => {
  const { insul, setInsul } = useInsulFactorStore();

  enum insulLevels {
    GOOD = 2,
    MED = 4,
    POOR = 7,
    NONE = 8.5,
  }

  // 2 4 7 8.5
  const handleInsulChange = () => {
    setInsul(insulLevels.GOOD);
  };

  const handleWellInsulChange = () => {
    setInsul(insulLevels.MED);
  };

  const handlePoorlyInsulChange = () => {
    setInsul(insulLevels.POOR);
  };

  const handleNotInsulChange = () => {
    setInsul(insulLevels.NONE);
  };

  return (
    <>
      <Container>
        <div className="box red">
          <Row>
            <Col lg="12">
              <h2>Compute the heat insulation rating for the given area.</h2>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <CheckBox
                heading="Insulated"
                desc="Enclosed area with doors and windows in place."
                id="insulated"
                name="insulation"
                checked={insul === insulLevels.GOOD}
                onChange={handleInsulChange}
              />
            </Col>
            <Col lg="4">
              <CheckBox
                heading="Well Insulated"
                desc="Sealed environment. Walls constructed but lacking insulation. Doors and windows shielded with plastic sheets or tarps."
                id="well-insulated"
                name="insulation"
                checked={insul === insulLevels.MED}
                onChange={handleWellInsulChange}
              />
            </Col>
            <Col lg="4">&nbsp;</Col>
          </Row>
          <Row>
            <Col lg="4">
              <CheckBox
                heading="Poorly Insulated"
                desc="Semi-enclosed area with numerous walls in place."
                id="poorly-insulated"
                name="insulation"
                checked={insul === insulLevels.POOR}
                onChange={handlePoorlyInsulChange}
              />
            </Col>
            <Col lg="4">
              <CheckBox
                heading="Not Insulated"
                desc="Uncovered area with primary walls not yet built."
                id="not-insulated"
                name="insulation"
                checked={insul === insulLevels.NONE}
                onChange={handleNotInsulChange}
              />
            </Col>
            <Col lg="4">
              <Result heading="Factor" number={insul} />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};
