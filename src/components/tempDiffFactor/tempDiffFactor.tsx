import { Input } from "../input/Input";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Difference } from "../difference/difference";
import { Result } from "../result/result";
import useTempDiffFactorStore from "../../useTempDiffFactorStore";

import "./temp-diff-factor.scss";

export const TempDiffFactor = () => {
  const {
    outdoorTemp,
    indoorTemp,
    difference,
    result,
    setOutdoorTemp,
    setIndoorTemp,
  } = useTempDiffFactorStore();

  const handleOutdoorTempChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newOutdoorTempValue = parseFloat(e.target.value);
    setOutdoorTemp(newOutdoorTempValue);
  };

  const handleIndoorTempChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIndoorTempValue = parseFloat(e.target.value);
    setIndoorTemp(newIndoorTempValue);
  };

  console.log("Result", result);

  return (
    <>
      <section className="temp-diff-factor">
        <Container>
          <div className="box yellow">
            <Row>
              <Col lg="12">
                <h2>
                  Determine the temperature differential (in degrees Celsius).
                </h2>
              </Col>
            </Row>
            <Row>
              <Col lg="3" className="d-flex align-items-center">
                <Form.Group>
                  <Form.Label>Outdoor Temperature</Form.Label>
                  <div className="d-flex align-items-center">
                    <Input
                      value={outdoorTemp}
                      onChange={handleOutdoorTempChange}
                      placeholder=""
                    />
                    <span>-</span>
                  </div>
                </Form.Group>
              </Col>
              <Col lg="3" className="d-flex align-items-center">
                <Form.Group>
                  <Form.Label>Desired Indoor Temperature</Form.Label>
                  <div className="d-flex align-items-center">
                    <Input
                      value={indoorTemp}
                      onChange={handleIndoorTempChange}
                      placeholder=""
                    />
                    <span>=</span>
                  </div>
                </Form.Group>
              </Col>
              <Col lg="3">
                <Form.Group>
                  <Form.Label>Difference</Form.Label>
                  <div className="d-flex align-items-center">
                    <Difference number={difference} />
                    <span>=</span>
                  </div>
                </Form.Group>
              </Col>
              <Col lg="3" className="d-flex align-items-center">
                <Result
                  heading="Temperature Difference Factor"
                  number={result}
                />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};
