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
          <h1 className="text-2xl font-black uppercase">Burger Joint</h1>
        </div>
        <div className="mx-10 flex-1">
          <SearchInput />
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline">Login</Button>

          {/* <CartDrawer> */}
          <Button className="group relative">
            <b>20$</b>
            <span className="mx-3 h-full w-px bg-white/30" />
            <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
              <ShoppingCart className="relative size-4" strokeWidth={2} />
              <b>3</b>
            </div>
            <ArrowRight className="absolute right-5 w-5 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </Button>
          {/* </CartDrawer> */}
        </div>
      </Container>
    </header>
  );
};
