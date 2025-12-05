import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-amber-400">
          <BookOpen className="h-6 w-6" />
          <span>CerdasMenghafal</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="#metode" className="hover:text-amber-400 transition-colors">Metode SRS</Link>
          <Link href="#fitur" className="hover:text-amber-400 transition-colors">Fitur</Link>
          <Link href="#faq" className="hover:text-amber-400 transition-colors">FAQ</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-amber-400">
            Masuk
          </Link>
          <Button className="bg-amber-400 hover:bg-amber-500" >Mulai Gratis</Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="text-left mb-6 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" /> CerdasMenghafal
              </SheetTitle>
              <div className="flex flex-col gap-4 mt-4">
                <Link href="#metode" className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors">
                  Metode SRS
                </Link>
                <Link href="#fitur" className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors">
                  Fitur
                </Link>
                <Link href="#faq" className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
                <hr className="my-2 border-border" />
                <Link href="#" className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors">
                  Masuk
                </Link>
                <Button className="w-full mt-2">Mulai Gratis</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
