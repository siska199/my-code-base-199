import Badge from "@components/ui/Badge";
import Button from "@components/ui/Button";

interface TProps {
  name: string;
  to?: string;
}

const Filename = (props: TProps) => {
  const { name, to } = props
  const Label = <Badge label={name} variant={"soft-gray"} />
  return to ? <Button label={Label} to={to} variant={"link-black"} /> : Label
}

export default Filename