import { FC } from "react";
import Image from "next/image";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";
import { Container, SearchInput } from "@/components/shared";

type Props = {
  className?: string;
};

export const Header: FC<Props> = ({ className }) => {
  return (
    <header className={cn("border-b border-gray-100", className)}>
      <Container className="flex items-center justify-between py-8">
        <div className="flex items-center gap-4">
          <Image src="/logo-min.png" width={35} height={35} alt="Logo" />
          <h1 className="text-2xl uppercase font-black">Burger Joint</h1>
        </div>
        <div className="mx-10 flex-1">
          <SearchInput />
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline">Login</Button>

          {/* <CartDrawer> */}
          <Button className="group relative">
            <b>20$</b>
            <span className="h-full w-[1px] bg-white/30 mx-3" />
            <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
              <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
              <b>3</b>
            </div>
            <ArrowRight className="absolute right-5 w-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
          </Button>
          {/* </CartDrawer> */}
        </div>
      </Container>
    </header>
  );
};
