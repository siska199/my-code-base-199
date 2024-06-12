import variant from "@lib/utils/data/variant-color";
import { cn } from "@lib/utils/helper";
import { VariantProps, cva } from "class-variance-authority";

interface TProps extends React.HTMLProps<HTMLDivElement>, VariantProps<typeof badgeVariants> {
  customeElement?: React.ReactNode;

}

const Badge = (props: TProps) => {
  const { label, className, variant, customeElement, shapeBadge, sizeBadge, ...attrs } = props
  return (
    <span className={`${cn(badgeVariants({ className, variant, shapeBadge, sizeBadge }))} text-body-small`} {...attrs}>
      {label}
      {customeElement}
    </span>
  )
}


const badgeVariants = cva(
  'w-fit font-medium bg-white h-fit text-white flex-inline gap-1 text-center font-medium rounded items-center justify-center',
  {
    variants: {
      variant: variant,
      sizeBadge: {
        small: "!text-[10px] px-2 py-1",
        base: "!text-[12px] px-1 py-1",
        large: "!text-[14px] px-3 py-2"
      },

      shapeBadge: {
        pilled: "rounded-full",
        rounded: "rounded-md",
        circle: "rounded-full !aspect-square min-w-[1.5rem] min-h-[1.5rem] flex items-center justify-center"
      },

    },

    defaultVariants: {
      variant: "soft-primary",
      sizeBadge: "base",
      shapeBadge: "pilled"
    }
  }
)


export default Badge