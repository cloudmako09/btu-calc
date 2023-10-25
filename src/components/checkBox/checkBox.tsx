import { Form } from "react-bootstrap";

interface Props {
  heading: string;
  id: string;
  desc: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

export const CheckBox: React.FC<Props> = ({
  heading,
  desc,
  id,
  name,
  onChange,
  checked,
}) => {
  return (
    <>
      <Form.Group>
        <Form.Check
          type="radio"
          label=""
          id={id}
          name={name}
          onChange={onChange}
          defaultChecked={checked}
          aria-label="radio"
        />
        <h3>{heading}</h3>
        <p>{desc}</p>
      </Form.Group>
    </>
  );
};
