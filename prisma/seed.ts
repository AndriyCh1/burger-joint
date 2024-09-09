import { Prisma } from "@prisma/client";
import { _categories, _ingredients, _products } from "./constants";
import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({ productId }: { productId: number }) => {
  return {
    productId,
    price: randomDecimalNumber(5, 40),
  } as Prisma.ProductItemUncheckedCreateInput;
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User Test",
        email: "user@gmail.com",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "User Admin",
        email: "admin@gmail.com",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });

  await prisma.category.createMany({ data: _categories });

  const ingredients = await prisma.ingredient.createManyAndReturn({
    data: _ingredients,
  });

  await prisma.product.createMany({ data: _products });

  const burger1 = await prisma.product.create({
    data: {
      name: "Classic Burger",
      categoryId: 1,
      ingredients: { connect: ingredients.slice(0, 5) },
    },
  });

  const burger2 = await prisma.product.create({
    data: {
      name: "Double Burger",
      categoryId: 1,
      ingredients: { connect: ingredients.slice(3, 8) },
    },
  });

  const burger3 = await prisma.product.create({
    data: {
      name: "BBQ Burger",
      categoryId: 1,
      ingredients: { connect: ingredients.slice(5, ingredients.length) },
    },
  });

  await prisma.productItem.createMany({
    data: [
      generateProductItem({ productId: burger1.id }),
      generateProductItem({ productId: burger1.id }),
      generateProductItem({ productId: burger1.id }),
      generateProductItem({ productId: burger2.id }),
      generateProductItem({ productId: burger2.id }),
      generateProductItem({ productId: burger2.id }),
      generateProductItem({ productId: burger2.id }),
      generateProductItem({ productId: burger2.id }),
      generateProductItem({ productId: burger2.id }),
      generateProductItem({ productId: burger3.id }),
      generateProductItem({ productId: burger3.id }),
      generateProductItem({ productId: burger3.id }),
      generateProductItem({ productId: 1 }),
      generateProductItem({ productId: 2 }),
      generateProductItem({ productId: 3 }),
      generateProductItem({ productId: 4 }),
      generateProductItem({ productId: 5 }),
      generateProductItem({ productId: 6 }),
      generateProductItem({ productId: 7 }),
      generateProductItem({ productId: 8 }),
      generateProductItem({ productId: 9 }),
      generateProductItem({ productId: 10 }),
      generateProductItem({ productId: 11 }),
      generateProductItem({ productId: 12 }),
      generateProductItem({ productId: 13 }),
      generateProductItem({ productId: 14 }),
      generateProductItem({ productId: 15 }),
      generateProductItem({ productId: 16 }),
      generateProductItem({ productId: 17 }),
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: "11111",
      },
      {
        userId: 2,
        totalAmount: 0,
        token: "222222",
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
