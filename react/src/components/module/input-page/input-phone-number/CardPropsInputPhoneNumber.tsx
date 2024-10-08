import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";
import Here from "@components/ui/text/Here";

const CardPropsInputPhoneNumber = () => {
  const listItem = [
    {
      label: "onChange",
      content: "Handles input value changes with formatted updates.",
    },
    {
      label: "value",
      content: "Maintains the current value of the input field.",
    },
    {
      label: "name",
      content: "Identifies the input field by its name.",
    },
    {
      label: "HTMLProps",
      content: "t defines all properties (props) that an <input> element in HTML can accept. These include attributes like className, style, value, and event handlers like onChange, onFocus, etc.",
    },
    {
      label: "Inherit all props that ContainerInput have",
      content: (
        <>
          To see all available props that ContainerInput have you can see in <Here to={`/docs/prerequisite/helper-component?id=ContainerInput.tsx`} />{" "}
        </>
      ),
    },
  ];

  return (
    <CardSubMenu title={"Props"}>
      <List items={listItem} />
    </CardSubMenu>
  );
};

export default CardPropsInputPhoneNumber;
