import CardSubMenu from "@components/cards/CardSubMenu";
import CodeBlock from "@components/ui/CodeBlock";
import { generateDisplayComponent } from "@lib/utils/helper";

const CardUsageHelperMessage = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of HelperMessage:</p>
      <CodeBlock codeString={generateDisplayComponent("HelperMessage", displayUsage)} />
    </CardSubMenu>
  );
};

const displayUsage = `return <HelperMessage variant={"error"} message={"Siska Apriana Rifianti"} />`;

export default CardUsageHelperMessage;
