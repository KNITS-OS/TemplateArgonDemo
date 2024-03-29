import { CardHeader } from "reactstrap";

export const TableHeader = ({ title, text }) => {
  return (
    <CardHeader>
      <h3 className="mb-0">{title}</h3>
      <p className="text-sm mb-0">{text}</p>
    </CardHeader>
  );
};
