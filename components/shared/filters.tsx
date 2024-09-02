import { FC } from "react";
import { cn } from "@/lib/utils";
import { CheckboxFilterGroup, FilterCheckbox, RangeSlider, Title } from "./";
import { Input } from "@/components/ui";

type Props = {
  className?: string;
};

const INGREDIENTS = [
  {
    text: "Beef Patty",
    value: "1",
  },
  {
    text: "Cheddar Cheese",
    value: "2",
  },
  {
    text: "Lettuce",
    value: "3",
  },
  {
    text: "Tomato",
    value: "4",
  },
  {
    text: "Onions (Raw or Grilled)",
    value: "5",
  },
  {
    text: "Pickles",
    value: "6",
  },
  {
    text: "Ketchup",
    value: "7",
  },
  {
    text: "Mustard",
    value: "8",
  },
  {
    text: "Bacon",
    value: "10",
  },
  {
    text: "BBQ Sauce",
    value: "11",
  },
  {
    text: "Mushrooms",
    value: "12",
  },
  {
    text: "Avocado",
    value: "13",
  },
  {
    text: "Jalapeños",
    value: "14",
  },
  {
    text: "American Cheese",
    value: "16",
  },
];

export const Filters: FC<Props> = ({ className }) => {
  return (
    <div className={cn(className)}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="New Items" value="1" />
        <FilterCheckbox text="Top Sellers" value="2" />
      </div>
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="mb-3 font-bold">Price: </p>
        <div className="mb-5 flex gap-3">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={500}
            defaultValue={0}
          />
          <Input type="number" placeholder="0" min={100} max={1000} />
        </div>
        <RangeSlider min={0} max={500} step={10} value={[0, 500]} />
      </div>
      <CheckboxFilterGroup
        title="Ingredients"
        className="mt-5"
        limit={6}
        defaultItems={INGREDIENTS}
        items={INGREDIENTS}
      />
    </div>
  );
};
