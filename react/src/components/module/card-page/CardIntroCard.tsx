
import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import Card, { TPropsCard } from "@components/ui/Card";
import dummyImage from "@lib/utils/data/dummy-image";

const CardIntroCard = () => {
  const listPropsForEachVariant: ({ props: TPropsCard; title: string })[] = [
    {
      title: "Body",
      props: {
        body: {
          title: "Card Title",
          subtitle: "CARD SUBTITLE",
          content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nostrum recusandae, veritatis corporis doloremque accusamus sunt totam sed officia possimus? Tempora excepturi error dolores autem incidunt nihil ipsum dolore? Error!</p>
        }
      }
    },

    {
      title: "Heading",
      props: {
        header: {
          content: "Featured"
        },
        body: {
          title: "Card Title",
          subtitle: "CARD SUBTITLE",
          content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nostrum recusandae, veritatis corporis doloremque accusamus sunt totam sed officia possimus? Tempora excepturi error dolores autem incidunt nihil ipsum dolore? Error!</p>
        }
      }
    },
    {
      title: "Footer",
      props: {
        footer: "Last updated 5 mins ago",
        body: {
          title: "Card Title",
          subtitle: "CARD SUBTITLE",
          content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nostrum recusandae, veritatis corporis doloremque accusamus sunt totam sed officia possimus? Tempora excepturi error dolores autem incidunt nihil ipsum dolore? Error!</p>
        }
      }
    },
    {
      title: "Image",
      props: {
        header: {
          image: dummyImage[4]
        },
        body: {
          title: "Card Title",
          subtitle: "CARD SUBTITLE",
          content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nostrum recusandae, veritatis corporis doloremque accusamus sunt totam sed officia possimus? Tempora excepturi error dolores autem incidunt nihil ipsum dolore? Error!</p>
        },
        customeClass: {
          container: "w-[20rem]"
        }
      }
    },
    {
      title: "Image inside body content",
      props: {
        body: {
          title: "Card Title",
          subtitle: "CARD SUBTITLE",
          image: dummyImage[4],
          content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nostrum recusandae, veritatis corporis doloremque accusamus sunt totam sed officia possimus? Tempora excepturi error dolores autem incidunt nihil ipsum dolore? Error!</p>
        },
        customeClass: {
          container: "w-[20rem]"
        }
      }
    },
    {
      title: "Button and Link",
      props: {
        body: {
          title: "Card Title",
          subtitle: "CARD SUBTITLE",
          image: dummyImage[4],
          content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nostrum recusandae, veritatis corporis doloremque accusamus sunt totam sed officia possimus? Tempora excepturi error dolores autem incidunt nihil ipsum dolore? Error!</p>
        },
        customeClass: {
          container: "w-[20rem]"
        }
      }
    },
  ]
  const listExample = [
    {
      title: "",
      component: listPropsForEachVariant?.map((data, i) => <CardVariantComp
        key={i}
        title={data?.title}
        withBorder={false}
        Component={<Card {...data?.props}

        />}
      />)
    },

  ]
  return (
    <CardIntroComponent
      title={'Card'}
      subTitle="Description of Card."
      listExample={listExample}
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for Card`;

export default CardIntroCard;
