import {
  Container,
  Title,
  TopBar,
  Filters,
  ProductsGroupList,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All burgers" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* List of items */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Classic"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: "Burger",
                    imageUrl: "/images/burger.png",
                    price: 10,
                    items: [
                      {
                        id: 1,
                        name: "Burger",
                        imageUrl: "/images/burger.png",
                        price: 10,
                      },
                    ],
                  },
                  {
                    id: 2,
                    name: "Burger",
                    imageUrl: "/images/burger.png",
                    price: 10,
                    items: [
                      {
                        id: 1,
                        name: "Burger",
                        imageUrl: "/images/burger.png",
                        price: 10,
                      },
                    ],
                  },
                  {
                    id: 3,
                    name: "Burger",
                    imageUrl: "/images/burger.png",
                    price: 10,
                    items: [
                      {
                        id: 1,
                        name: "Burger",
                        imageUrl: "/images/burger.png",
                        price: 10,
                      },
                    ],
                  },
                  {
                    id: 4,
                    name: "Burger",
                    imageUrl: "/images/burger.png",
                    price: 10,
                    items: [
                      {
                        id: 1,
                        name: "Burger",
                        imageUrl: "/images/burger.png",
                        price: 10,
                      },
                    ],
                  },
                ]}
              />
              <ProductsGroupList
                title="Specialty"
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: "Burger",
                    imageUrl: "/images/burger.png",
                    price: 10,
                    items: [
                      {
                        id: 1,
                        name: "Burger",
                        imageUrl: "/images/burger.png",
                        price: 10,
                      },
                    ],
                  },
                  {
                    id: 2,
                    name: "Burger",
                    imageUrl: "/images/burger.png",
                    price: 10,
                    items: [
                      {
                        id: 1,
                        name: "Burger",
                        imageUrl: "/images/burger.png",
                        price: 10,
                      },
                    ],
                  },
                  {
                    id: 3,
                    name: "Burger",
                    imageUrl: "/images/burger.png",
                    price: 10,
                    items: [
                      {
                        id: 1,
                        name: "Burger",
                        imageUrl: "/images/burger.png",
                        price: 10,
                      },
                    ],
                  },
                  {
                    id: 4,
                    name: "Burger",
                    imageUrl: "/images/burger.png",
                    price: 10,
                    items: [
                      {
                        id: 1,
                        name: "Burger",
                        imageUrl: "/images/burger.png",
                        price: 10,
                      },
                    ],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
