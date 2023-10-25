import { useTranslation } from "react-i18next";
import { Input } from "../input/Input";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Result } from "../result/result";
import useCalcSquareFeetStore from "../../useCalcSquareFeetStore";

import "./square-feet.scss";
import "../result/result.scss";

export const SquareFeet = () => {
  const { t } = useTranslation();
  const {
    width,
    length,
    height,
    setWidth,
    setLength,
    setHeight,
    getCalcResult,
  } = useCalcSquareFeetStore();

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
                <h2>{t("cubicFeetTitle")}</h2>
              </Col>
            </Row>
            <Row>
              <Col lg="3" className="d-flex align-items-center">
                <Form.Group>
                  <Form.Label>{t("cubicFeetWidth")}</Form.Label>
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
                  <Form.Label>{t("cubicFeetLength")}</Form.Label>
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
                  <Form.Label>{t("cubicFeetHeight")}</Form.Label>
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
              <Col lg="3" className="d-flex align-items-center">
                <Result
                  heading={t("cubicFeetTotal")}
                  number={getCalcResult()}
                />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};
