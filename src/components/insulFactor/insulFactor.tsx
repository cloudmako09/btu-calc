import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { Result } from "../result/result";
import { CheckBox } from "../checkBox/checkBox";
import useInsulFactorStore from "../../useInsulFactorStore";

export const InsulFactor = () => {
  const { t } = useTranslation();
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
      <section className="insul-factor">
        <Container>
          <div className="box red">
            <Row>
              <Col lg="12">
                <h2>{t("insulTitle")}</h2>
              </Col>
            </Row>
            <Row>
              <Col lg="4">
                <CheckBox
                  heading={t("insulTitleOne")}
                  desc={t("insulDescOne")}
                  id="insulated"
                  name="insulation"
                  checked={insul === insulLevels.GOOD}
                  onChange={handleInsulChange}
                />
              </Col>
              <Col lg="4">
                <CheckBox
                  heading={t("insulTitleTwo")}
                  desc={t("insulDescTwo")}
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
                  heading={t("insulTitleThree")}
                  desc={t("insulDescThree")}
                  id="poorly-insulated"
                  name="insulation"
                  checked={insul === insulLevels.POOR}
                  onChange={handlePoorlyInsulChange}
                />
              </Col>
              <Col lg="4">
                <CheckBox
                  heading={t("insulTitleFour")}
                  desc={t("insulDescFour")}
                  id="not-insulated"
                  name="insulation"
                  checked={insul === insulLevels.NONE}
                  onChange={handleNotInsulChange}
                />
              </Col>
              <Col lg="4">
                <Result heading={t("insulFactor")} number={insul} />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};
