import { Container, Row, Col } from "react-bootstrap";
import { Result } from "../result/result";
import { CheckBox } from "../checkBox/checkBox";
import useInsulFactorStore from "../../useInsulFactorStore";

export const InsulFactor = () => {
  const {
    insul,
    wellInsul,
    poorlyInsul,
    notInsul,
    setInsul,
    setWellInsul,
    setPoorlyInsul,
    setNotInsul,
  } = useInsulFactorStore();

  const handleInsulChange = () => {
    setInsul(2);
  };

  const handleWellInsulChange = () => {
    setWellInsul(4);
  };

  const handlePoorlyInsulChange = () => {
    setPoorlyInsul(7);
  };

  const handleNotInsulChange = () => {
    setNotInsul(8.5);
  };

  const getInsulFactor = () => {
    if (insul) {
      return insul;
    }
    if (wellInsul) {
      return wellInsul;
    }
    if (poorlyInsul) {
      return poorlyInsul;
    }
    if (notInsul) {
      return notInsul;
    }
    return insul;
  };

  console.log("Insulated", insul);
  console.log("Well Insulated", wellInsul);
  console.log("Poorly Insulated", poorlyInsul);
  console.log("Not Insulated", notInsul);

  console.log("When clicked on Factor", getInsulFactor());

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
                checked={insul === 2}
                onChange={handleInsulChange}
              />
            </Col>
            <Col lg="4">
              <CheckBox
                heading="Well Insulated"
                desc="Sealed environment. Walls constructed but lacking insulation. Doors and windows shielded with plastic sheets or tarps."
                id="well-insulated"
                name="insulation"
                checked={wellInsul === 4}
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
                checked={poorlyInsul === 7.5}
                onChange={handlePoorlyInsulChange}
              />
            </Col>
            <Col lg="4">
              <CheckBox
                heading="Not Insulated"
                desc="Uncovered area with primary walls not yet built."
                id="not-insulated"
                name="insulation"
                checked={notInsul === 8}
                onChange={handleNotInsulChange}
              />
            </Col>
            <Col lg="4">
              <Result heading="Factor" number={getInsulFactor()} />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};
