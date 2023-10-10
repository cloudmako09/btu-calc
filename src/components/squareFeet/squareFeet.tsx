import { Input } from "../input/Input";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Result } from "../result/result";
import useCalcSquareFeetStore from "../../useCalcSquareFeetStore";

import "./square-feet.scss";
import "../result/result.scss";

export const SquareFeet = () => {
  const { width, length, height, setWidth, setLength, setHeight, result } =
    useCalcSquareFeetStore();

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newWidthValue = parseFloat(e.target.value);
    setWidth(newWidthValue);
  };

  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLengthValue = parseFloat(e.target.value);
    setLength(newLengthValue);
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHeightValue = parseFloat(e.target.value);
    setHeight(newHeightValue);
  };

  return (
    <>
      <section className="square-feet">
        <Container>
          <div className="box red">
            <Row>
              <Col lg="12">
                <h2>Determine the volume in cubic feet that needs heating.</h2>
              </Col>
            </Row>
            <Row>
              <Col lg="3" className="d-flex align-items-center">
                <Form.Group>
                  <Form.Label>Width (ft)</Form.Label>
                  <div className="d-flex align-items-center">
                    <Input
                      value={width}
                      onChange={handleWidthChange}
                      placeholder=""
                    />
                    <span>x</span>
                  </div>
                </Form.Group>
              </Col>
              <Col lg="3" className="d-flex align-items-center">
                <Form.Group>
                  <Form.Label>Length (ft)</Form.Label>
                  <div className="d-flex align-items-center">
                    <Input
                      value={length}
                      onChange={handleLengthChange}
                      placeholder=""
                    />
                    <span>x</span>
                  </div>
                </Form.Group>
              </Col>
              <Col lg="3" className="d-flex align-items-center">
                <Form.Group>
                  <Form.Label>Height (ft)</Form.Label>
                  <div className="d-flex align-items-center">
                    <Input
                      value={height}
                      onChange={handleHeightChange}
                      placeholder=""
                    />
                    <span>=</span>
                  </div>
                </Form.Group>
              </Col>
              <Col lg="3">
                <Result
                  heading="Number of square feet"
                  number={result} // Use the function from the store
                />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};
