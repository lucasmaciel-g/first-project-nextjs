import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return(
    <header>
        <nav className="w-full p-4 flex items-center justify-between shadow-md">
          <Link href="/">
            <Image
              src="/next.svg"
              alt="Next.js Logo"
              width={120}
              height={30}
            />
          </Link>
          <Link href="/sobre">
            <Button variant="link">Sobre</Button>
          </Link>
          <div className="flex items-center gap-2">
            <Button className="text-lg"
              variant="default"
              size="xl"
            >
              Cadastre-se
            </Button>
            <Button className="text-lg"
              variant="outline"
              size="xl"
            >
              Entrar
            </Button>
          </div>
        </nav>
      </header>
  );
}