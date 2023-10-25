import { Form } from "react-bootstrap";

interface Props {
  placeholder: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<Props> = ({ placeholder, value, onChange }) => {
  return (
    <>
      <Form.Control
        type="number"
        id="input"
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        aria-describedby="input"
        aria-label="input"
      />
    </>
  );
};
