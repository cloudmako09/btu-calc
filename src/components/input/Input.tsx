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
        id="changethis"
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        aria-describedby="changethis"
      />
    </>
  );
};
