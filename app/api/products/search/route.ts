import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const name = searchParams.get("name");
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: name || "",
        mode: "insensitive",
      },
    },
    take: 5, // TODO: Add pagination
  });

  return NextResponse.json(products);
}
