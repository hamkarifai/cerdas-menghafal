import { BookOpen } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold text-xl text-amber-400">
            <BookOpen className="h-6 w-6" />
            <span>CerdasMenghafal</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CerdasMenghafal. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm font-medium text-muted-foreground">
            <Link href="#" className="hover:text-amber-400 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-amber-400 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-amber-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
