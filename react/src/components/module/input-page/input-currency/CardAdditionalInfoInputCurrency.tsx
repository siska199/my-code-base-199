
import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoInputCurrency = () => {
  const listAdditionalInfo = [
    {
      title: "Currency Formatting",
      caption: (
        <p>
          The <code>InputCurrency</code> component automatically formats input values as currency. It adds commas for thousands separators and ensures values are displayed with two decimal places.
        </p>
      )
    },
    {
      title: "Controlled Component",
      caption: (
        <p>
          <code>InputCurrency</code> is a controlled component, meaning the input value is controlled by the <code>value</code> prop. Ensure that the <code>value</code> prop is updated correctly to reflect changes in the input field.
        </p>
      )
    },
    {
      title: "Handling User Input",
      caption: (
        <p>
          The component provides two event handlers: <code>onChange</code> and <code>onBlur</code>. Use <code>onChange</code> to handle input value changes with formatted updates, and <code>onBlur</code> to finalize the formatted value when the input field loses focus.
        </p>
      )
    },
    {
      title: "Required Props",
      caption: (
        <p>
          Ensure the component is provided with required props such as <code>onChange</code>, <code>value</code>, and <code>name</code> to function properly. These props are essential for controlling the input&apos;s behavior and value.
        </p>
      )
    },
    {
      title: "Placeholder Behavior",
      caption: (
        <p>
          The placeholder behavior depends on the <code>variant</code> prop. If <code>variant</code> is set to &apos;v2&apos;, the placeholder text will be empty. For other variants, the placeholder text will default to the <code>attrs.placeholder</code> value.
        </p>
      )
    },
    {
      title: "Ref Usage",
      caption: (
        <p>
          You can use the <code>inputRef</code> provided by the component to access the underlying DOM input element. This can be useful for focusing the input programmatically or obtaining its current value directly.
        </p>
      )
    }
  ];


  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}



export default CardAdditionalInfoInputCurrency;
