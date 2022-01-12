import { CardHeader } from "reactstrap";

export function TableHeader({ title, text }) {
  return (
    <CardHeader>
      <h3 className="mb-0">{title}</h3>
      <p className="text-sm mb-0">{text}</p>
    </CardHeader>
  );
}
