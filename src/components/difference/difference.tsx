import { Form } from "react-bootstrap";

import "./difference.scss";

interface Props {
  number: any;
}

export const Difference: React.FC<Props> = ({ number }) => {
  return (
    <>
      <div className="difference">
        <h4>{number}</h4>
      </div>
    </>
  );
};
