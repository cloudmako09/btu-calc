import { useTranslation } from "react-i18next";
import { Input } from "../input/Input";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Difference } from "../difference/difference";
import { Result } from "../result/result";
import useTempDiffFactorStore from "../../useTempDiffFactorStore";

import "./temp-diff-factor.scss";

export const TempDiffFactor = () => {
  const { t } = useTranslation();
  const {
    outdoorTemp,
    indoorTemp,
    setOutdoorTemp,
    setIndoorTemp,
    getDifference,
    getTempDiffResult,
  } = useTempDiffFactorStore();

  const handleOutdoorTempChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newOutdoorTempValue = parseFloat(e.target.value);
    setOutdoorTemp(newOutdoorTempValue);
  };

  const handleIndoorTempChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIndoorTempValue = parseFloat(e.target.value);
    setIndoorTemp(newIndoorTempValue);
  };

  return (
    <>
      <section className="temp-diff-factor">
        <Container>
          <div className="box yellow">
            <Row>
              <Col lg="12">
                <h2>{t("tempDiffTitle")}</h2>
              </Col>
            </Row>
            <Row>
              <Col lg="3" className="d-flex align-items-center">
                <Form.Group>
                  <Form.Label>{t("tempDiffOutdoor")}</Form.Label>
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
                  <Form.Label>{t("tempDiffIndoor")}</Form.Label>
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
              <Col lg="3" className="d-flex align-items-center">
                <Form.Group>
                  <Form.Label>{t("tempDiffDifference")}</Form.Label>
                  <div className="d-flex align-items-center">
                    <Difference number={getDifference()} />
                    <span>=</span>
                  </div>
                </Form.Group>
              </Col>
              <Col lg="3" className="d-flex align-items-center">
                <Result
                  heading={t("tempDiffFactor")}
                  number={getTempDiffResult()}
                />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};
