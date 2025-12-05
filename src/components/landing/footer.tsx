import { BookOpen, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Mosque Silhouette (CSS Art) */}
      <div className="absolute top-0 left-0 right-0 h-24 opacity-10 pointer-events-none text-primary">
         <svg viewBox="0 0 1440 320" className="w-full h-full absolute bottom-0" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0V224Z" transform="scale(1, -1) translate(0, -320)"></path>
         </svg>
         {/* Simple Dome Shapes */}
         <div className="absolute bottom-0 left-[10%] w-32 h-16 bg-current rounded-t-full"></div>
         <div className="absolute bottom-0 left-[12%] w-4 h-24 bg-current -mt-8"></div>
         <div className="absolute bottom-0 left-[8%] w-4 h-20 bg-current -mt-4"></div>
         
         <div className="absolute bottom-0 right-[10%] w-40 h-20 bg-current rounded-t-full"></div>
         <div className="absolute bottom-0 right-[15%] w-4 h-28 bg-current -mt-8"></div>
         <div className="absolute bottom-0 right-[5%] w-4 h-24 bg-current -mt-4"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
                <div className="flex items-center gap-2 font-bold text-2xl text-amber-400">
                    <BookOpen className="h-8 w-8" />
                    <span>CerdasMenghafal</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                    Platform belajar bahasa Arab #1 dengan metode SRS terbukti membantu ribuan santri dan pelajar.
                </p>
            </div>
            
            <div>
                <h3 className="font-bold text-lg mb-4">Menu</h3>
                <ul className="space-y-2 text-muted-foreground">
                    <li><Link href="#" className="hover:text-amber-400 transition-colors">Beranda</Link></li>
                    <li><Link href="#fitur" className="hover:text-amber-400 transition-colors">Fitur</Link></li>
                    <li><Link href="#" className="hover:text-amber-400 transition-colors">Harga</Link></li>
                    <li><Link href="#faq" className="hover:text-amber-400 transition-colors">FAQ</Link></li>
                </ul>
            </div>

            <div>
                <h3 className="font-bold text-lg mb-4">Legal</h3>
                <ul className="space-y-2 text-muted-foreground">
                    <li><Link href="#" className="hover:text-amber-400 transition-colors">Kebijakan Privasi</Link></li>
                    <li><Link href="#" className="hover:text-amber-400 transition-colors">Syarat & Ketentuan</Link></li>
                </ul>
            </div>

            <div>
                <h3 className="font-bold text-lg mb-4">Sosial Media</h3>
                <div className="flex gap-4">
                    <Link href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-amber-400 hover:text-white transition-all">
                        <Instagram className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-amber-400 hover:text-white transition-all">
                        <Twitter className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-amber-400 hover:text-white transition-all">
                        <Facebook className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} CerdasMenghafal. Dibuat dengan ❤️ untuk umat.</p>
        </div>
      </div>
    </footer>
  );
}
