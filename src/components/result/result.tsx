interface Props {
  heading: string;
  number: any;
}

export const Result: React.FC<Props> = ({ heading, number }) => {
  return (
    <div className="result">
      <h4 className="heading">{heading}</h4>
      <h4 className="number">{number.toLocaleString()}</h4>
    </div>
  );
};
